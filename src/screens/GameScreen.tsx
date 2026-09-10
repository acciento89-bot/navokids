import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SpeakerButton } from '../components/SpeakerButton';
import { ClockFace } from '../components/ClockFace';
import { QUESTIONS_PER_STAGE, STAGES_PER_CATEGORY } from '../config/learning';
import { copy, t } from '../i18n';
import { speak, stopSpeaking } from '../services/speech';
import { commonVoiceKey, questionVoiceKey } from '../services/naviVoiceKeys';
import { colors, shadows } from '../theme';
import { AgeGroup, Answer, Language, LearningCategory } from '../types';

const localizedAnswerLabel = (answer: Answer, language: Language) =>
  typeof answer.label === 'string' ? answer.label : t(answer.label, language);

export function GameScreen({ category, stage, language, ageGroup, onBack, onCompleted, onNextStage }: { category: LearningCategory; stage: number; language: Language; ageGroup: AgeGroup; onBack: () => void; onNextStage: () => void; onCompleted: (answered: number) => void }) {
  const questions = useMemo(() => {
    const start = (stage - 1) * QUESTIONS_PER_STAGE;
    return category.questionsByAge[ageGroup].slice(start, start + QUESTIONS_PER_STAGE);
  }, [ageGroup, category, stage]);
  const scrollRef = useRef<ScrollView>(null);
  const [completed, setCompleted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const question = questions[index];

  useEffect(() => { scrollRef.current?.scrollTo({ y: 0, animated: false }); }, [index, completed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (question) speak(t(question.prompt, language), language, ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt'));
    }, 180);
    return () => {
      clearTimeout(timer);
      stopSpeaking();
    };
  }, [question, language, ageGroup]);

  if (completed) return (
    <ScrollView key="completion" contentContainerStyle={[styles.completion, { backgroundColor: category.lightColor }]}>
      <Text style={styles.completionStars}>⭐⭐⭐</Text>
      <Text accessibilityRole="header" style={styles.completionTitle}>{language === 'de' ? `Stufe ${stage} geschafft!` : `Stage ${stage} complete!`}</Text>
      <Text style={styles.completionCopy}>{stage === STAGES_PER_CATEGORY
        ? (language === 'de' ? 'Du hast alle Stufen dieser Insel geschafft!' : 'You completed every stage on this island!')
        : (language === 'de' ? 'Bereit für dein nächstes Abenteuer?' : 'Ready for your next adventure?')}</Text>
      {stage < STAGES_PER_CATEGORY && <Pressable accessibilityRole="button" onPress={onNextStage} style={[styles.nextButton, styles.completionButton, { backgroundColor: category.color }]}><Text style={styles.nextText}>{language === 'de' ? 'Nächste Stufe' : 'Next stage'}</Text></Pressable>}
      <Pressable accessibilityRole="button" onPress={onBack} style={[styles.completionButton, styles.selectionButton]}><Text style={styles.selectionText}>{language === 'de' ? 'Zur Stufenauswahl' : 'Back to stages'}</Text></Pressable>
    </ScrollView>
  );

  if (!question) return null;
  const choose = (answerId: string) => {
    setSelected(answerId);
    if (answerId === question.correctAnswerId) {
      setIsCorrect(true);
      speak(t(question.success, language), language, false, questionVoiceKey(question.id, 'success'));
    } else {
      const nextAttempts = wrongAttempts + 1;
      setWrongAttempts(nextAttempts);
      const useHint = nextAttempts >= 2;
      speak(
        useHint ? t(question.hint, language) : t(copy.wrong, language),
        language,
        true,
        useHint ? questionVoiceKey(question.id, 'hint') : commonVoiceKey.wrong,
      );
    }
  };

  const next = () => {
    if (index === questions.length - 1) { stopSpeaking(); onCompleted(questions.length); setCompleted(true); }
    else { setIndex(index + 1); setSelected(null); setIsCorrect(false); setWrongAttempts(0); }
  };

  return (
    <ScrollView key="exercise" ref={scrollRef} contentContainerStyle={[styles.screen, { backgroundColor: category.lightColor }]}>
      <View style={styles.topbar}>
        <Pressable onPress={onBack} style={styles.close}><Text style={styles.closeText}>×</Text></Pressable>
        <View style={styles.progress}><View style={[styles.progressFill, { width: `${((index + (isCorrect ? 1 : 0)) / questions.length) * 100}%`, backgroundColor: category.color }]} /></View>
        <Text style={styles.counter}>{index + 1}/{questions.length}</Text>
      </View>
      <View style={styles.promptRow}>
        <Text style={styles.prompt}>{t(question.prompt, language)}</Text>
        <SpeakerButton label={t(copy.listenAgain, language)} onPress={() => speak(t(question.prompt, language), language, ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt'))} />
      </View>
      {question.visual || question.clock ? (
        <View style={[styles.visualCard, question.showNavi && styles.naviVisualCard]}>
          {question.clock ? <ClockFace time={question.clock} language={language} /> : <>
          {question.showNavi ? <Image source={require('../../assets/navi-mascot-optimized.png')} resizeMode="contain" style={styles.naviVisualMascot} /> : null}
          <View style={question.showNavi ? styles.naviCueCard : undefined}>
            <Text style={[styles.visual, category.id === 'shapes' && (question.visual.length > 8 ? styles.patternVisual : styles.shapeVisual), question.showNavi && styles.naviCueText]}>{question.localizedVisual ? t(question.localizedVisual, language) : question.visual}</Text>
          </View>
          </>}
        </View>
      ) : null}
      {ageGroup === 'discoverer' && <Text style={styles.discovererHint}>💡 {t(question.hint, language)}</Text>}
      <View style={[styles.answers, question.answers.some(answer => answer.clock) && styles.clockAnswers]}>
        {question.answers.map((answer) => {
          const chosen = selected === answer.id;
          const correct = isCorrect && answer.id === question.correctAnswerId;
          const wrong = chosen && !isCorrect;
          const answerLabel = localizedAnswerLabel(answer, language);
          return (
            <Pressable key={answer.id} accessibilityRole="button" disabled={isCorrect} onPress={() => choose(answer.id)} style={({ pressed }) => [styles.answer, answer.clock && styles.clockAnswer, answer.color ? { backgroundColor: answer.color, borderColor: answer.color } : null, correct && styles.correct, wrong && styles.wrong, pressed && styles.pressed]}>
              {answer.clock ? <ClockFace time={answer.clock} language={language} size={112} /> : <Text style={[styles.answerText, answerLabel.length > 10 && styles.longAnswerText, answer.color && styles.colorAnswerText]}>{answerLabel}</Text>}
            </Pressable>
          );
        })}
      </View>
      {isCorrect && (
        <View style={styles.successBar}>
          <View style={styles.successCopy}><Text style={styles.successIcon}>⭐</Text><Text style={styles.successText}>{t(question.success, language)}</Text></View>
          <Pressable onPress={next} style={[styles.nextButton, { backgroundColor: category.color }]}><Text style={styles.nextText}>{index === questions.length - 1 ? t(copy.finish, language) : t(copy.next, language)}</Text></Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  completion: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 28, gap: 20 },
  completionStars: { fontSize: 44 },
  completionTitle: { color: colors.ink, fontSize: 30, fontWeight: '900', textAlign: 'center' },
  completionCopy: { color: colors.muted, fontSize: 18, textAlign: 'center' },
  completionButton: { width: '100%', maxWidth: 420, minHeight: 56, padding: 18, borderRadius: 18, alignItems: 'center' },
  selectionButton: { backgroundColor: colors.paper },
  selectionText: { color: colors.ink, fontSize: 17, fontWeight: '800', textAlign: 'center' },
  screen: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 14, paddingBottom: 24 },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  close: { width: 46, height: 46, borderRadius: 17, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  closeText: { color: colors.ink, fontSize: 31, lineHeight: 33 },
  progress: { flex: 1, height: 13, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.85)', overflow: 'hidden' },
  progressFill: { height: 13, borderRadius: 8 },
  counter: { color: colors.muted, fontWeight: '900' },
  promptRow: { minHeight: 110, flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 20 },
  prompt: { flex: 1, color: colors.ink, fontSize: 27, lineHeight: 34, fontWeight: '900' },
  visualCard: { minHeight: 268, borderRadius: 34, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', padding: 20, ...shadows.card },
  naviVisualCard: { flexDirection: 'row', gap: 8, overflow: 'hidden', paddingHorizontal: 12 },
  naviVisualMascot: { width: '45%', height: '100%', minHeight: 165 },
  naviCueCard: { minWidth: 118, minHeight: 118, borderRadius: 30, backgroundColor: '#FFF8E8', borderWidth: 5, borderColor: '#F3C862', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, transform: [{ rotate: '2deg' }], ...shadows.card },
  naviCueText: { fontSize: 58, lineHeight: 70 },
  patternVisual: { fontSize: 26, letterSpacing: 0 },
  shapeVisual: { fontSize: 30, letterSpacing: 0 },
  visual: { color: colors.ink, fontSize: 44, fontWeight: '900', textAlign: 'center', letterSpacing: 2 },
  discovererHint: { color: colors.muted, fontSize: 14, lineHeight: 20, fontWeight: '800', textAlign: 'center', marginTop: 12 },
  answers: { flexDirection: 'row', gap: 11, marginTop: 20 },
  answer: { flex: 1, minHeight: 84, borderRadius: 24, backgroundColor: colors.paper, borderWidth: 4, borderColor: 'transparent', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, ...shadows.card },
  clockAnswers: { flexWrap: 'wrap', justifyContent: 'center' },
  clockAnswer: { flex: 0, flexBasis: '47%', minWidth: 128, minHeight: 146, paddingVertical: 12 },
  longAnswerText: { fontSize: 18, lineHeight: 24 },
  answerText: { color: colors.ink, fontSize: 25, fontWeight: '900', textAlign: 'center' },
  colorAnswerText: { color: '#FFF', fontSize: 17, textShadowColor: 'rgba(0,0,0,0.24)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 },
  correct: { borderColor: colors.green, backgroundColor: '#E1F7E8' },
  wrong: { borderColor: colors.coral },
  pressed: { transform: [{ scale: 0.96 }] },
  successBar: { marginTop: 18, backgroundColor: '#DDF5E4', borderRadius: 27, padding: 15, flexDirection: 'row', alignItems: 'center', gap: 12 },
  successCopy: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
  successIcon: { fontSize: 25 },
  successText: { flex: 1, color: '#24643A', fontSize: 15, lineHeight: 20, fontWeight: '800' },
  nextButton: { minHeight: 53, borderRadius: 18, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center' },
  nextText: { color: '#FFF', fontSize: 15, fontWeight: '900' },
});
