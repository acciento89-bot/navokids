import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SpeakerButton } from '../components/SpeakerButton';
import { copy, t } from '../i18n';
import { speak, stopSpeaking } from '../services/speech';
import { colors, shadows } from '../theme';
import { Language, LearningCategory } from '../types';

export function GameScreen({ category, stage, language, onBack, onCompleted }: { category: LearningCategory; stage: number; language: Language; onBack: () => void; onCompleted: (answered: number) => void }) {
  const questions = useMemo(() => category.questions.slice((stage - 1) * 3, stage * 3), [category, stage]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const question = questions[index];

  useEffect(() => {
    if (question) speak(t(question.prompt, language), language, true);
    return () => { stopSpeaking(); };
  }, [question, language]);

  if (!question) return null;

  const choose = (answerId: string) => {
    setSelected(answerId);
    if (answerId === question.correctAnswerId) {
      setIsCorrect(true);
      speak(t(question.success, language), language);
    } else {
      const nextAttempts = wrongAttempts + 1;
      setWrongAttempts(nextAttempts);
      speak(nextAttempts >= 2 ? t(question.hint, language) : t(copy.wrong, language), language, true);
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
        <SpeakerButton label={t(copy.listenAgain, language)} onPress={() => speak(t(question.prompt, language), language, true)} />
      </View>
      <View style={styles.visualCard}><Text style={styles.visual}>{question.visual}</Text></View>
      <View style={styles.answers}>
        {question.answers.map((answer) => {
          const chosen = selected === answer.id;
          const correct = isCorrect && answer.id === question.correctAnswerId;
          const wrong = chosen && !isCorrect;
          return (
            <Pressable key={answer.id} disabled={isCorrect} onPress={() => choose(answer.id)} style={({ pressed }) => [styles.answer, answer.color ? { backgroundColor: answer.color, borderColor: answer.color } : null, correct && styles.correct, wrong && styles.wrong, pressed && styles.pressed]}>
              <Text style={[styles.answerText, answer.color && styles.colorAnswerText]}>{answer.label}</Text>
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
