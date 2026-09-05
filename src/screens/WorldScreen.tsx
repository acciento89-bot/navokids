import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { FREE_STAGES_PER_CATEGORY, TOTAL_QUESTIONS_PER_CATEGORY } from '../config/learning';
import { countStars } from '../data/progress';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { CategoryId, ChildProfile, Language } from '../types';

interface Props {
  language: Language;
  profile: ChildProfile;
  onLanguageChange: (language: Language) => void;
  onCategoryPress: (id: CategoryId) => void;
  onParentsPress: () => void;
  onProfilePress: () => void;
}

export function WorldScreen({ language, profile, onLanguageChange, onCategoryPress, onParentsPress, onProfilePress }: Props) {
  const totalStars = countStars(profile.progress);
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topbar}>
        <View style={styles.brand}><Text style={styles.brandNavo}>Navo</Text><Text style={styles.brandKids}>Kids</Text></View>
        <View style={styles.actions}>
          <Pressable accessibilityRole="button" onPress={() => onLanguageChange(language === 'de' ? 'en' : 'de')} style={styles.languageButton}><Text style={styles.languageText}>{language === 'de' ? 'DE' : 'EN'}</Text></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel={language === 'de' ? 'Profil wechseln' : 'Switch profile'} onPress={onProfilePress} style={styles.profileButton}><Text style={styles.profileAvatar}>{profile.avatar}</Text><Text numberOfLines={1} style={styles.profileName}>{profile.nickname}</Text></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel={t(copy.parentArea, language)} onPress={onParentsPress} style={styles.parentButton}><Text style={styles.parentIcon}>⚙</Text></Pressable>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroBubbleOne} /><View style={styles.heroBubbleTwo} />
        <View style={styles.heroCopy}>
          <View style={styles.starPill}><Text style={styles.starText}>⭐ {totalStars} {t(copy.stars, language)}</Text></View>
          <Text style={styles.heroTitle}>{language === 'de' ? `Hallo ${profile.nickname}!` : `Hello ${profile.nickname}!`}</Text>
          <Text style={styles.heroBody}>{language === 'de' ? 'Navi wartet auf dein nächstes Inselabenteuer.' : 'Navi is waiting for your next island adventure.'}</Text>
        </View>
        <Image source={require('../../assets/navi-mascot-optimized.png')} resizeMode="contain" style={styles.mascot} />
      </View>

      <Text style={styles.sectionTitle}>{language === 'de' ? 'Navis Abenteuerkarte' : 'Navi’s adventure map'}</Text>
      <Text style={styles.mapIntro}>{language === 'de' ? 'Tippe auf eine Insel und starte deine Reise!' : 'Tap an island and start your journey!'}</Text>
      <View style={styles.map}>
        <Text style={[styles.wave, styles.waveOne]}>〰</Text><Text style={[styles.wave, styles.waveTwo]}>〰</Text><Text style={[styles.wave, styles.waveThree]}>〰</Text>
        <View style={styles.pathLine} />
        {categories.map((category, index) => {
          const completed = profile.progress[category.id].completedQuestions;
          const percentage = Math.min(100, Math.round((completed / TOTAL_QUESTIONS_PER_CATEGORY) * 100));
          const alignRight = index % 2 === 1;
          return (
            <View key={category.id} style={[styles.islandRow, alignRight && styles.islandRowRight]}>
              <Pressable accessibilityRole="button" accessibilityLabel={t(category.title, language)} onPress={() => onCategoryPress(category.id)} style={({ pressed }) => [styles.island, { backgroundColor: category.lightColor, borderColor: category.color }, pressed && styles.pressed]}>
                <View style={[styles.islandHill, { backgroundColor: category.color }]} />
                <View style={[styles.islandHillSmall, { backgroundColor: category.color }]} />
                <Text style={styles.islandIcon}>{category.icon}</Text>
                <Text style={styles.islandTitle}>{t(category.title, language)}</Text>
                <Text numberOfLines={1} style={styles.islandSubtitle}>{t(category.subtitle, language)}</Text>
                <View style={styles.progressRow}><View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${percentage}%`, backgroundColor: category.color }]} /></View><Text style={styles.progressText}>{percentage}%</Text></View>
                <View style={styles.stageBadge}><Text style={styles.stageBadgeText}>{FREE_STAGES_PER_CATEGORY} {language === 'de' ? 'frei' : 'free'}</Text></View>
              </Pressable>
              <View style={[styles.mapStop, { borderColor: category.color }]}><Text style={styles.mapStopText}>{index + 1}</Text></View>
            </View>
          );
        })}
        <View style={styles.treasure}><Text style={styles.treasureIcon}>🏆</Text><Text style={styles.treasureText}>{language === 'de' ? '150 Stufen voller Abenteuer' : '150 stages full of adventures'}</Text></View>
      </View>
      <Text style={styles.safetyNote}>{language === 'de' ? 'Werbefrei · Kindgerecht · Auch offline' : 'Ad-free · Child-friendly · Works offline'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 18, paddingTop: 12, paddingBottom: 44, backgroundColor: colors.cream, minHeight: '100%' },
  topbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { flexDirection: 'row', alignItems: 'baseline' },
  brandNavo: { color: colors.tealDark, fontSize: 27, fontWeight: '900' }, brandKids: { color: colors.coral, fontSize: 27, fontWeight: '900' },
  actions: { flexDirection: 'row', gap: 7, alignItems: 'center' },
  languageButton: { height: 44, minWidth: 46, borderRadius: 15, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  languageText: { color: colors.tealDark, fontWeight: '900' },
  profileButton: { height: 44, maxWidth: 120, paddingHorizontal: 9, borderRadius: 15, backgroundColor: colors.paper, flexDirection: 'row', alignItems: 'center', gap: 6, ...shadows.card },
  profileAvatar: { fontSize: 21 }, profileName: { color: colors.ink, fontWeight: '900', maxWidth: 62 },
  parentButton: { width: 44, height: 44, borderRadius: 15, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card }, parentIcon: { color: colors.tealDark, fontSize: 24, fontWeight: '900' },
  hero: { height: 220, marginTop: 18, borderRadius: 32, backgroundColor: '#CDEFEA', overflow: 'hidden', flexDirection: 'row', ...shadows.card },
  heroBubbleOne: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: 'rgba(255,255,255,0.28)', right: -25, top: -55 },
  heroBubbleTwo: { position: 'absolute', width: 95, height: 95, borderRadius: 48, backgroundColor: 'rgba(255,255,255,0.22)', left: -20, bottom: -30 },
  heroCopy: { flex: 1, padding: 20, zIndex: 2, justifyContent: 'center' },
  starPill: { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 16, paddingHorizontal: 11, paddingVertical: 7, marginBottom: 10 }, starText: { color: colors.ink, fontWeight: '800', fontSize: 12 },
  heroTitle: { color: colors.ink, fontSize: 25, lineHeight: 30, fontWeight: '900', maxWidth: 220 }, heroBody: { color: colors.muted, fontSize: 14, lineHeight: 20, fontWeight: '600', maxWidth: 220, marginTop: 7 },
  mascot: { width: '45%', height: 215, alignSelf: 'flex-end', marginRight: -5, marginBottom: -4 },
  sectionTitle: { color: colors.ink, fontSize: 23, fontWeight: '900', marginTop: 27 },
  mapIntro: { color: colors.muted, fontSize: 13, fontWeight: '700', marginTop: 4, marginBottom: 14 },
  map: { position: 'relative', padding: 18, paddingVertical: 24, gap: 22, borderRadius: 34, backgroundColor: '#DDF5F4', overflow: 'hidden', ...shadows.card },
  wave: { position: 'absolute', color: 'rgba(37,159,166,0.22)', fontSize: 44, fontWeight: '900' },
  waveOne: { right: 8, top: 85, transform: [{ rotate: '-10deg' }] }, waveTwo: { left: 3, top: 330, transform: [{ rotate: '12deg' }] }, waveThree: { right: 12, bottom: 160 },
  pathLine: { position: 'absolute', left: '50%', top: 84, bottom: 88, width: 3, borderWidth: 2, borderStyle: 'dashed', borderColor: '#65BFC0' },
  islandRow: { minHeight: 150, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingRight: '17%' }, islandRowRight: { flexDirection: 'row-reverse', paddingRight: 0, paddingLeft: '17%' },
  island: { width: '82%', minHeight: 145, borderRadius: 64, borderWidth: 5, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 17, paddingTop: 15, paddingBottom: 12, ...shadows.card },
  islandHill: { position: 'absolute', width: 160, height: 70, borderRadius: 80, left: -25, bottom: -32, opacity: 0.2 },
  islandHillSmall: { position: 'absolute', width: 100, height: 65, borderRadius: 55, right: -14, top: -30, opacity: 0.18 },
  islandIcon: { color: colors.ink, fontSize: 28, fontWeight: '900' },
  islandTitle: { color: colors.ink, fontSize: 18, fontWeight: '900', marginTop: 5 }, islandSubtitle: { color: colors.muted, fontSize: 10, fontWeight: '700', marginTop: 1, maxWidth: '90%' },
  stageBadge: { position: 'absolute', right: 12, top: 9, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.92)', paddingHorizontal: 8, paddingVertical: 4 }, stageBadgeText: { color: colors.ink, fontSize: 9, fontWeight: '900' },
  progressRow: { width: '88%', flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 9 }, progressTrack: { flex: 1, height: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.95)', overflow: 'hidden' }, progressFill: { height: 7, borderRadius: 4 }, progressText: { color: colors.muted, fontSize: 9, fontWeight: '900' },
  mapStop: { width: 38, height: 38, borderRadius: 19, marginHorizontal: -2, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', borderWidth: 4, zIndex: 3 }, mapStopText: { color: colors.ink, fontSize: 13, fontWeight: '900' },
  treasure: { alignSelf: 'center', backgroundColor: '#FFF1BC', borderRadius: 22, paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 9, ...shadows.card }, treasureIcon: { fontSize: 24 }, treasureText: { color: '#795A16', fontWeight: '900', fontSize: 13 },
  safetyNote: { color: colors.muted, textAlign: 'center', fontWeight: '700', marginTop: 28 }, pressed: { transform: [{ scale: 0.985 }], opacity: 0.93 },
});
