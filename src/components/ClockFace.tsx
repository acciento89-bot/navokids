import { StyleSheet, Text, View } from 'react-native';
import { ClockTime, Language } from '../types';

export function clockAngles({ hour, minute }: ClockTime) {
  return { hour: (hour % 12) * 30 + minute * 0.5, minute: minute * 6 };
}

// The short hand moves continuously; at 1:30 it is halfway between 1 and 2.
export function ClockFace({ time, language, size = 228 }: { time: ClockTime; language: Language; size?: number }) {
  const angles = clockAngles(time);
  const center = size / 2;
  const labelSize = size * 0.11;
  const label = language === 'de'
    ? `Analoge Uhr: ${time.hour} Uhr ${time.minute === 0 ? '' : `${time.minute} Minuten`}`
    : `Analog clock: ${time.hour}:${String(time.minute).padStart(2, '0')}`;
  return (
    <View accessible accessibilityRole="image" accessibilityLabel={label} style={[styles.face, { width: size, height: size, borderRadius: center }]}>
      {Array.from({ length: 60 }, (_, i) => (
        <View key={`tick-${i}`} style={[styles.rotator, { transform: [{ rotate: `${i * 6}deg` }] }]}>
          <View style={{ position: 'absolute', top: size * 0.025, left: center - (i % 5 === 0 ? 1 : 0.5), width: i % 5 === 0 ? 2 : 1, height: size * (i % 5 === 0 ? 0.045 : 0.02), backgroundColor: i % 5 === 0 ? '#183B3F' : '#BBC9C8' }} />
        </View>
      ))}
      {Array.from({ length: 12 }, (_, i) => {
        const hour = i + 1, radians = hour * Math.PI / 6;
        return <Text key={hour} style={{ position: 'absolute', left: center + Math.sin(radians) * size * 0.365 - labelSize, top: center - Math.cos(radians) * size * 0.365 - labelSize * 0.6, width: labelSize * 2, fontSize: labelSize, lineHeight: labelSize * 1.2, textAlign: 'center', fontWeight: '800', color: '#183B3F' }}>{hour}</Text>;
      })}
      {[{ angle: angles.hour, length: size * 0.23, width: size * 0.035, color: '#183B3F' }, { angle: angles.minute, length: size * 0.33, width: size * 0.023, color: '#C14440' }].map((hand, index) => (
        <View key={index} style={[styles.rotator, { transform: [{ rotate: `${hand.angle}deg` }] }]}>
          <View style={{ position: 'absolute', left: center - hand.width / 2, top: center - hand.length, height: hand.length, width: hand.width, borderRadius: hand.width, backgroundColor: hand.color }} />
        </View>
      ))}
      <View style={{ position: 'absolute', left: center - size * 0.03, top: center - size * 0.03, width: size * 0.06, height: size * 0.06, borderRadius: size * 0.03, backgroundColor: '#183B3F' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  face: { backgroundColor: '#FFFDF6', alignSelf: 'center', shadowColor: '#183B3F', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.14, shadowRadius: 5, elevation: 2 },
  rotator: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
});
