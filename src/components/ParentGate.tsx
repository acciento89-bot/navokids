import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { Language } from '../types';

interface Props {
  visible: boolean;
  language: Language;
  onCancel: () => void;
  onSuccess: () => void;
}

export function ParentGate({ visible, language, onCancel, onSuccess }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>{t(copy.parentArea, language)}</Text>
          <Text style={styles.title}>{t(copy.parentGate, language)}</Text>
          <Text style={styles.math}>8 + 5 = ?</Text>
          <View style={styles.answers}>
            {[11, 13, 15].map((answer) => (
              <Pressable key={answer} onPress={() => answer === 13 && onSuccess()} style={({ pressed }) => [styles.answer, pressed && styles.pressed]}>
                <Text style={styles.answerText}>{answer}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable onPress={onCancel} style={styles.cancel}><Text style={styles.cancelText}>{language === 'de' ? 'Abbrechen' : 'Cancel'}</Text></Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(15,45,48,0.55)', padding: 24, alignItems: 'center', justifyContent: 'center' },
  card: { width: '100%', maxWidth: 460, borderRadius: 30, backgroundColor: colors.paper, padding: 26, alignItems: 'center', ...shadows.card },
  eyebrow: { color: colors.teal, fontWeight: '800', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 },
  title: { color: colors.ink, fontSize: 20, fontWeight: '800', textAlign: 'center', marginTop: 10 },
  math: { color: colors.ink, fontSize: 42, fontWeight: '900', marginVertical: 24 },
  answers: { flexDirection: 'row', gap: 12 },
  answer: { minWidth: 75, height: 62, borderRadius: 18, backgroundColor: '#E8F7F4', alignItems: 'center', justifyContent: 'center' },
  answerText: { color: colors.tealDark, fontSize: 24, fontWeight: '900' },
  cancel: { marginTop: 22, padding: 10 },
  cancelText: { color: colors.muted, fontSize: 16, fontWeight: '700' },
  pressed: { transform: [{ scale: 0.95 }] },
});
