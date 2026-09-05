import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, shadows } from '../theme';

export function SpeakerButton({ onPress, label }: { onPress: () => void; label: string }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.icon}>🔊</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { width: 54, height: 54, borderRadius: 27, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  icon: { fontSize: 25 },
  pressed: { transform: [{ scale: 0.94 }], opacity: 0.9 },
});
