import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, shadows } from '../theme';
import { AgeGroup, ChildProfile, Language } from '../types';

const avatars = ['🦊', '🐼', '🦁', '🐨', '🐰', '🐯'];

export function ProfileSetupScreen({ language, mode, onCancel, onSave }: { language: Language; mode: 'first' | 'add'; onCancel?: () => void; onSave: (profile: Omit<ChildProfile, 'id' | 'progress' | 'createdAt'>) => void }) {
  const [nickname, setNickname] = useState('');
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('discoverer');
  const [avatar, setAvatar] = useState(avatars[0]);
  const title = language === 'de' ? (mode === 'first' ? 'Wer geht mit Navi auf Reise?' : 'Weiteres Kinderprofil') : (mode === 'first' ? 'Who is joining Navi?' : 'Add another child');

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {mode === 'add' && <Pressable onPress={onCancel} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>}
        <Image source={require('../../assets/navi-mascot-optimized.png')} style={styles.mascot} resizeMode="contain" />
        <Text style={styles.eyebrow}>NAVOKIDS</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{language === 'de' ? 'Diese Angaben bleiben ausschließlich auf dem Gerät.' : 'These details stay only on this device.'}</Text>

        <View style={styles.card}>
          <Text style={styles.label}>{language === 'de' ? 'Spitzname' : 'Nickname'}</Text>
          <TextInput value={nickname} onChangeText={setNickname} maxLength={16} autoCorrect={false} placeholder={language === 'de' ? 'z. B. Mia' : 'e.g. Mia'} placeholderTextColor="#91A0A1" style={styles.input} />

          <Text style={styles.label}>{language === 'de' ? 'Spielfigur' : 'Player icon'}</Text>
          <View style={styles.avatarRow}>{avatars.map((item) => <Pressable key={item} onPress={() => setAvatar(item)} style={[styles.avatar, avatar === item && styles.avatarSelected]}><Text style={styles.avatarText}>{item}</Text></Pressable>)}</View>

          <Text style={styles.label}>{language === 'de' ? 'Lernstufe' : 'Learning level'}</Text>
          <View style={styles.ageOptions}>
            <Pressable onPress={() => setAgeGroup('discoverer')} style={[styles.ageCard, ageGroup === 'discoverer' && styles.ageCardSelected]}>
              <Text style={styles.ageTitle}>{language === 'de' ? 'Entdecker' : 'Discoverer'}</Text><Text style={styles.ageRange}>3–4</Text><Text style={styles.ageBody}>{language === 'de' ? 'Große Bilder, Hören und erstes Zählen' : 'Big pictures, listening, and first counting'}</Text>
            </Pressable>
            <Pressable onPress={() => setAgeGroup('adventurer')} style={[styles.ageCard, ageGroup === 'adventurer' && styles.ageCardSelected]}>
              <Text style={styles.ageTitle}>{language === 'de' ? 'Abenteurer' : 'Adventurer'}</Text><Text style={styles.ageRange}>5–7</Text><Text style={styles.ageBody}>{language === 'de' ? 'Buchstaben, Wörter und erste Rechnungen' : 'Letters, words, and first calculations'}</Text>
            </Pressable>
          </View>
        </View>

        <Pressable disabled={!nickname.trim()} onPress={() => onSave({ nickname: nickname.trim(), avatar: avatar ?? '🦊', ageGroup })} style={({ pressed }) => [styles.continueButton, !nickname.trim() && styles.disabled, pressed && styles.pressed]}>
          <Text style={styles.continueText}>{language === 'de' ? 'Lernreise starten' : 'Start the learning journey'}</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 22, paddingTop: 18, paddingBottom: 42, alignItems: 'center' },
  back: { position: 'absolute', left: 20, top: 16, zIndex: 3, width: 48, height: 48, borderRadius: 18, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  backText: { color: colors.ink, fontSize: 40, lineHeight: 40 },
  mascot: { width: 146, height: 150 },
  eyebrow: { color: colors.teal, fontSize: 13, fontWeight: '900', letterSpacing: 2 },
  title: { color: colors.ink, fontSize: 29, lineHeight: 35, fontWeight: '900', textAlign: 'center', marginTop: 8 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 20, fontWeight: '600', textAlign: 'center', marginTop: 7, maxWidth: 380 },
  card: { width: '100%', maxWidth: 560, backgroundColor: colors.paper, borderRadius: 30, padding: 20, marginTop: 22, ...shadows.card },
  label: { color: colors.ink, fontSize: 15, fontWeight: '900', marginBottom: 9, marginTop: 9 },
  input: { height: 58, borderRadius: 18, backgroundColor: '#F2F7F5', color: colors.ink, fontSize: 19, fontWeight: '800', paddingHorizontal: 17 },
  avatarRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  avatar: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#F2F7F5', alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: 'transparent' },
  avatarSelected: { backgroundColor: '#DDF4EF', borderColor: colors.teal },
  avatarText: { fontSize: 25 },
  ageOptions: { flexDirection: 'row', gap: 10 },
  ageCard: { flex: 1, minHeight: 145, backgroundColor: '#F5F7F3', borderRadius: 21, borderWidth: 3, borderColor: 'transparent', padding: 14 },
  ageCardSelected: { backgroundColor: '#E1F5F1', borderColor: colors.teal },
  ageTitle: { color: colors.ink, fontSize: 16, fontWeight: '900' },
  ageRange: { color: colors.coral, fontSize: 22, fontWeight: '900', marginTop: 2 },
  ageBody: { color: colors.muted, fontSize: 11, lineHeight: 16, fontWeight: '600', marginTop: 6 },
  continueButton: { width: '100%', maxWidth: 560, height: 62, borderRadius: 22, backgroundColor: colors.teal, alignItems: 'center', justifyContent: 'center', marginTop: 18, ...shadows.card },
  continueText: { color: '#FFF', fontSize: 18, fontWeight: '900' },
  disabled: { opacity: 0.42 },
  pressed: { transform: [{ scale: 0.98 }] },
});
