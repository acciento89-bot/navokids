import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SpeakerButton } from '../components/SpeakerButton';
import { QUESTIONS_PER_STAGE, STAGES_PER_CATEGORY } from '../config/learning';
import { copy, t } from '../i18n';
import { speak, stopSpeaking } from '../services/speech';
import { commonVoiceKey, questionVoiceKey } from '../services/naviVoiceKeys';
import { colors, shadows } from '../theme';
import { AgeGroup, Answer, Language, LearningCategory } from '../types';

const englishAnswerLabels: Record<string, string> = {
  red: 'Red', blue: 'Blue', green: 'Green', yellow: 'Yellow', purple: 'Purple', orange: 'Orange', pink: 'Pink', brown: 'Brown',
  dog: 'Dog', cat: 'Cat', fish: 'Fish', moon: 'Moon', sun: 'Sun', star: 'Star', tree: 'Tree', house: 'House', car: 'Car',
  flower: 'Flower', grass: 'Grass', ice: 'Ice', elephant: 'Elephant', butterfly: 'Butterfly',
  rainbow: 'Rain + bow', raincoat: 'Rain + coat', sunflower: 'Sun + flower',
};

const localizedAnswerLabel = (answer: Answer, language: Language) =>
  typeof answer.label === 'string' ? (language === 'en' ? englishAnswerLabels[answer.id] ?? answer.label : answer.label) : t(answer.label, language);

const answersForAge = (answers: Answer[], correctAnswerId: string, ageGroup: AgeGroup, questionId: string) => {
  if (ageGroup === 'adventurer') return answers;
  const correct = answers.find((answer) => answer.id === correctAnswerId);
  const distractor = answers.find((answer) => answer.id !== correctAnswerId);
  if (!correct || !distractor) return answers;
  return questionId.charCodeAt(questionId.length - 1) % 2 === 0 ? [distractor, correct] : [correct, distractor];
};

export function GameScreen({ category, stage, language, ageGroup, onBack, onCompleted }: { category: LearningCategory; stage: number; language: Language; ageGroup: AgeGroup; onBack: () => void; onCompleted: (answered: number) => void }) {
  const questions = useMemo(() => {
    const difficultyBand = Math.min(2, Math.floor(((stage - 1) * 3) / STAGES_PER_CATEGORY));
    const bandSize = Math.floor(category.questions.length / 3);
    const pool = category.questions.slice(difficultyBand * bandSize, (difficultyBand + 1) * bandSize);
    const offset = ((stage - 1) * 5 + difficultyBand) % pool.length;
    return Array.from({ length: QUESTIONS_PER_STAGE }, (_, index) => pool[(offset + index * 2) % pool.length]).filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [category, stage]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const question = questions[index];

  useEffect(() => {
    if (question) speak(t(question.prompt, language), language, ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt'));
    return () => { stopSpeaking(); };
  }, [question, language, ageGroup]);

  if (!question) return null;
  const visibleAnswers = answersForAge(question.answers, question.correctAnswerId, ageGroup, question.id);

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
    if (index === questions.length - 1) onCompleted(questions.length);
    else { setIndex(index + 1); setSelected(null); setIsCorrect(false); setWrongAttempts(0); }
  };

  return (
    <View style={[styles.screen, { backgroundColor: category.lightColor }]}>
      <View style={styles.topbar}>
        <Pressable onPress={onBack} style={styles.close}><Text style={styles.closeText}>×</Text></Pressable>
        <View style={styles.progress}><View style={[styles.progressFill, { width: `${((index + (isCorrect ? 1 : 0)) / questions.length) * 100}%`, backgroundColor: category.color }]} /></View>
        <Text style={styles.counter}>{index + 1}/{questions.length}</Text>
      </View>
      <View style={styles.promptRow}>
        <Text style={styles.prompt}>{t(question.prompt, language)}</Text>
        <SpeakerButton label={t(copy.listenAgain, language)} onPress={() => speak(t(question.prompt, language), language, ageGroup === 'discoverer', questionVoiceKey(question.id, 'prompt'))} />
      </View>
      <View style={styles.visualCard}><Text style={styles.visual}>{question.visual}</Text></View>
      {ageGroup === 'discoverer' && <Text style={styles.discovererHint}>💡 {t(question.hint, language)}</Text>}
      <View style={styles.answers}>
        {visibleAnswers.map((answer) => {
          const chosen = selected === answer.id;
          const correct = isCorrect && answer.id === question.correctAnswerId;
          const wrong = chosen && !isCorrect;
          const answerLabel = localizedAnswerLabel(answer, language);
          return (
            <Pressable key={answer.id} disabled={isCorrect} onPress={() => choose(answer.id)} style={({ pressed }) => [styles.answer, answer.color ? { backgroundColor: answer.color, borderColor: answer.color } : null, correct && styles.correct, wrong && styles.wrong, pressed && styles.pressed]}>
              <Text style={[styles.answerText, answer.color && styles.colorAnswerText]}>{answerLabel}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20, paddingTop: 14, paddingBottom: 24 },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  close: { width: 46, height: 46, borderRadius: 17, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  closeText: { color: colors.ink, fontSize: 31, lineHeight: 33 },
  progress: { flex: 1, height: 13, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.85)', overflow: 'hidden' },
  progressFill: { height: 13, borderRadius: 8 },
  counter: { color: colors.muted, fontWeight: '900' },
  promptRow: { minHeight: 110, flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 20 },
  prompt: { flex: 1, color: colors.ink, fontSize: 27, lineHeight: 34, fontWeight: '900' },
  visualCard: { flex: 1, minHeight: 180, maxHeight: 300, borderRadius: 34, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', padding: 20, ...shadows.card },
  visual: { color: colors.ink, fontSize: 44, fontWeight: '900', textAlign: 'center', letterSpacing: 2 },
  discovererHint: { color: colors.muted, fontSize: 14, lineHeight: 20, fontWeight: '800', textAlign: 'center', marginTop: 12 },
  answers: { flexDirection: 'row', gap: 11, marginTop: 20 },
  answer: { flex: 1, minHeight: 84, borderRadius: 24, backgroundColor: colors.paper, borderWidth: 4, borderColor: 'transparent', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, ...shadows.card },
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
