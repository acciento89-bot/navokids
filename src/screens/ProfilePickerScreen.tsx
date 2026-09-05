import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { countStars } from '../data/progress';
import { colors, shadows } from '../theme';
import { ChildProfile, Language } from '../types';

export function ProfilePickerScreen({ language, profiles, onSelect, onAdd }: { language: Language; profiles: ChildProfile[]; onSelect: (id: string) => void; onAdd: () => void }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image source={require('../../assets/navi-mascot-optimized.png')} style={styles.mascot} resizeMode="contain" />
      <Text style={styles.title}>{language === 'de' ? 'Wer möchte lernen?' : 'Who wants to learn?'}</Text>
      <View style={styles.grid}>
        {profiles.map((profile) => (
          <Pressable key={profile.id} onPress={() => onSelect(profile.id)} style={({ pressed }) => [styles.profile, pressed && styles.pressed]}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{profile.avatar}</Text></View>
            <Text style={styles.name}>{profile.nickname}</Text>
            <Text style={styles.stars}>⭐ {countStars(profile.progress)}</Text>
          </Pressable>
        ))}
        {profiles.length < 4 && <Pressable onPress={onAdd} style={({ pressed }) => [styles.add, pressed && styles.pressed]}><View style={styles.addCircle}><Text style={styles.addPlus}>+</Text></View><Text style={styles.addText}>{language === 'de' ? 'Kind hinzufügen' : 'Add child'}</Text></Pressable>}
      </View>
      <Text style={styles.note}>{language === 'de' ? 'Bis zu vier lokale Kinderprofile' : 'Up to four local child profiles'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { minHeight: '100%', backgroundColor: colors.cream, padding: 24, paddingTop: 36, alignItems: 'center' },
  mascot: { width: 125, height: 135 },
  title: { color: colors.ink, fontSize: 30, fontWeight: '900', textAlign: 'center', marginTop: 8, marginBottom: 28 },
  grid: { width: '100%', maxWidth: 590, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 14 },
  profile: { width: '46%', maxWidth: 250, minHeight: 180, backgroundColor: colors.paper, borderRadius: 28, padding: 18, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  avatar: { width: 76, height: 76, borderRadius: 26, backgroundColor: '#DDF4EF', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 42 },
  name: { color: colors.ink, fontSize: 20, fontWeight: '900', marginTop: 10 },
  stars: { color: colors.muted, fontSize: 13, fontWeight: '800', marginTop: 4 },
  add: { width: '46%', maxWidth: 250, minHeight: 180, borderRadius: 28, borderWidth: 3, borderStyle: 'dashed', borderColor: '#A8C5BF', alignItems: 'center', justifyContent: 'center' },
  addCircle: { width: 58, height: 58, borderRadius: 20, backgroundColor: '#E1F5F1', alignItems: 'center', justifyContent: 'center' },
  addPlus: { color: colors.teal, fontSize: 36, lineHeight: 40 },
  addText: { color: colors.tealDark, fontSize: 15, fontWeight: '900', marginTop: 11 },
  note: { color: colors.muted, fontSize: 13, fontWeight: '700', marginTop: 28 },
  pressed: { transform: [{ scale: 0.97 }] },
});
