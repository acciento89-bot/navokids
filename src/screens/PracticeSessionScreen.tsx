import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { ClockFace } from '../components/ClockFace';
import { SpeakerButton } from '../components/SpeakerButton';
import { speak, stopSpeaking } from '../services/speech';
import { commonVoiceKey, questionVoiceKey } from '../services/naviVoiceKeys';
import { t } from '../i18n';
import { practiceCopy } from '../practice/copy';
import { practiceRecap } from '../practice/core';
import type { AnswerCommand, PracticeSession } from '../practice/core';
import type { ChildProfile, Language } from '../types';
import { colors } from '../theme';

type Props = { profile: ChildProfile; language: Language; premium: boolean; session: PracticeSession; busy: boolean; error: string | null; onBack: () => void; onAnswer: (command: AnswerCommand) => Promise<PracticeSession | null>; onRetry: () => void };
export function PracticeSessionScreen({ profile, language, premium, session, busy, error, onBack, onAnswer, onRetry }: Props) {
  const copy = practiceCopy[language], mounted = useRef(true), submitting = useRef(false);
  const [feedback, setFeedback] = useState<{ questionId: string; answerId: string; correct: boolean; pending: boolean } | null>(null);
  const promptTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scroll = useRef<ScrollView>(null);
  const completedCount = session.answers.filter((answer) => answer.completedAt !== null).length;
  const index = feedback ? session.questions.findIndex((ref) => ref.questionId === feedback.questionId) : completedCount;
  const ref = session.questions[index], category = ref ? categories.find((item) => item.id === ref.categoryId) : null;
  const question = ref ? category?.questionsByAge[session.ageGroup].find((item) => item.id === ref.questionId) : null;
  const available = !!question && !!ref && session.profileId === profile.id && session.ageGroup === profile.ageGroup && !session.discardedAt && (ref.stage <= 2 || premium) && JSON.stringify(question) === ref.contentSignature && Array.from({ length: Math.max(0, ref.stage - 1) }, (_, stage) => stage + 1).every((stage) => profile.progress[ref.categoryId].completedStages.includes(stage));
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; stopSpeaking(); }; }, []);
  useEffect(() => {
    if (!question || !available) return;
    const timer = setTimeout(() => { promptTimer.current = null; void speak(t(question.prompt, language), language, profile.ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt')); }, 180);
    promptTimer.current = timer;
    return () => { clearTimeout(timer); promptTimer.current = null; stopSpeaking(); };
  }, [question, available, language, profile.ageGroup]);
  useEffect(() => { scroll.current?.scrollTo({ y: 0, animated: false }); }, [index]);
  const choose = async (answerId: string) => {
    if (busy || submitting.current || !question || !available || feedback?.correct || session.completedAt) return;
    submitting.current = true;
    if (promptTimer.current) { clearTimeout(promptTimer.current); promptTimer.current = null; }
    stopSpeaking();
    setFeedback({ questionId: question.id, answerId, correct: false, pending: true });
    const command: AnswerCommand = { sessionId: session.id, profileId: profile.id, questionId: question.id, expectedRevision: session.revision, attemptId: `attempt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`, answerId };
    const result = await onAnswer(command);
    submitting.current = false;
    if (!mounted.current) return;
    if (!result) { setFeedback(null); return; }
    const answer = result.answers.find((entry) => entry.questionId === question.id), correct = answer?.completedAt !== null && answer?.completedAt !== undefined;
    setFeedback({ questionId: question.id, answerId, correct, pending: false });
    if (correct) void speak(t(question.success, language), language, false, questionVoiceKey(question.id, 'success'));
    else { const hint = (answer?.wrongAttempts ?? 0) >= 2; void speak(hint ? t(question.hint, language) : copy.wrong, language, true, hint ? questionVoiceKey(question.id, 'hint') : commonVoiceKey.wrong); }
  };
  const button = (label: string, callback: () => void, id?: string, disabled = false) => <Pressable testID={id} accessibilityRole="button" disabled={busy || disabled} onPress={callback} style={[s.button, (busy || disabled) && s.disabled]}><Text style={s.buttonText}>{label}</Text></Pressable>;
  if (session.completedAt && !feedback) {
    const recap = practiceRecap([session], profile.id);
    return <ScrollView contentContainerStyle={s.content}><Text style={s.celebrate}>🌟</Text><Text accessibilityRole="header" style={s.title}>{copy.complete}</Text><Text style={s.body}>{copy.good}</Text><Text style={s.body}>{copy.practiced}: {recap.completedQuestions}</Text><Text style={s.body}>{copy.firstTry}: {recap.firstTry} · {copy.helped}: {recap.withHelp}</Text><Text style={s.body}>{copy.disclaimer}</Text>{button(copy.world, onBack, 'practice-finish-world')}</ScrollView>;
  }
  return <ScrollView ref={scroll} contentContainerStyle={[s.content, { backgroundColor: category?.lightColor ?? colors.cream }]}>
    {button(copy.world, onBack, 'practice-session-back')}<Text style={s.heading}>{session.planTitle}</Text><Text style={s.body}>{Math.min(index + 1, session.questions.length)}/{session.questions.length}</Text>
    {error && <View style={s.warning}><Text accessibilityRole="alert" style={s.error}>{error}</Text>{button(copy.retry, onRetry)}</View>}
    {!available ? <Text accessibilityRole="alert" style={s.error}>{copy.unavailableSession}</Text> : question && <>
      <View style={s.row}><Text accessibilityRole="header" style={s.title}>{t(question.prompt, language)}</Text><SpeakerButton label={copy.listen} onPress={() => { void speak(t(question.prompt, language), language, profile.ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt')); }} /></View>
      {(question.visual || question.clock) && <View style={s.visual}>{question.clock ? <ClockFace time={question.clock} language={language} /> : <>{question.showNavi && <Image source={require('../../assets/navi-mascot-optimized.png')} resizeMode="contain" style={s.navi} />}<Text style={s.visualText}>{question.localizedVisual ? t(question.localizedVisual, language) : question.visual}</Text></>}</View>}
      {profile.ageGroup === 'discoverer' && <Text style={s.body}>💡 {t(question.hint, language)}</Text>}
      <View style={s.answers}>{question.answers.map((answer) => {
        const label = typeof answer.label === 'string' ? answer.label : t(answer.label, language), selected = feedback?.answerId === answer.id && feedback.questionId === question.id;
        return <Pressable testID={`practice-answer-${answer.id}`} key={answer.id} accessibilityRole="button" accessibilityLabel={label} disabled={busy || !!feedback?.correct || !!error} onPress={() => { void choose(answer.id); }} style={[s.answer, answer.color ? { backgroundColor: answer.color } : undefined, selected && !feedback?.pending && (feedback?.correct ? s.correct : s.wrong), busy && s.disabled]}>{answer.clock ? <ClockFace time={answer.clock} language={language} size={104} /> : <Text style={[s.answerText, answer.color && s.colorText]}>{label}</Text>}</Pressable>;
      })}</View>
      {busy && <Text style={s.body}>{copy.pending}</Text>}
      {feedback?.correct ? <View style={s.card}><Text style={s.body}>{t(question.success, language)}</Text>{button(session.completedAt ? copy.finish : copy.next, () => { stopSpeaking(); setFeedback(null); }, 'practice-next')}</View> : feedback && !feedback.pending && <Text style={s.body}>{(session.answers[index]?.wrongAttempts ?? 0) >= 2 ? t(question.hint, language) : copy.wrong}</Text>}
    </>}
  </ScrollView>;
}
const s = StyleSheet.create({ content: { flexGrow: 1, padding: 20, gap: 18, paddingBottom: 40 }, title: { color: colors.ink, fontSize: 27, fontWeight: '900', flexShrink: 1 }, heading: { color: colors.ink, fontSize: 20, fontWeight: '800' }, body: { color: colors.muted, fontSize: 16, lineHeight: 23, flexShrink: 1 }, button: { minHeight: 48, padding: 14, borderRadius: 16, borderWidth: 1, borderColor: colors.teal, justifyContent: 'center' }, buttonText: { color: colors.tealDark, fontWeight: '800', fontSize: 16, textAlign: 'center', flexShrink: 1 }, row: { flexDirection: 'row', alignItems: 'center', gap: 12 }, visual: { minHeight: 210, backgroundColor: colors.paper, padding: 18, borderRadius: 25, alignItems: 'center', justifyContent: 'center', gap: 12 }, navi: { width: 120, height: 130, maxWidth: '100%' }, visualText: { fontSize: 32, color: colors.ink, textAlign: 'center', fontWeight: '800', flexShrink: 1 }, answers: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }, answer: { minHeight: 82, flexGrow: 1, flexBasis: '45%', minWidth: 100, maxWidth: '100%', backgroundColor: colors.paper, padding: 12, borderWidth: 3, borderColor: 'transparent', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }, answerText: { fontSize: 22, fontWeight: '800', color: colors.ink, textAlign: 'center', flexShrink: 1 }, colorText: { color: '#FFFFFF', textShadowColor: '#33443A', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 }, correct: { borderColor: colors.green }, wrong: { borderColor: colors.coral }, disabled: { opacity: 0.45 }, card: { backgroundColor: colors.paper, padding: 16, borderRadius: 20, gap: 12 }, warning: { backgroundColor: '#FFF1D9', padding: 14, gap: 10, borderRadius: 14 }, error: { color: '#9A3028', fontSize: 16, lineHeight: 24 }, celebrate: { fontSize: 54, textAlign: 'center', marginTop: 24 } });
