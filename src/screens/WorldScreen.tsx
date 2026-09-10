import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { FREE_STAGES_PER_CATEGORY, TOTAL_QUESTIONS_PER_CATEGORY } from '../config/learning';
import { countStars, normalizeCategoryProgress } from '../data/progress';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { CategoryId, ChildProfile, Language } from '../types';

interface Props {
  language: Language;
  profile: ChildProfile;
  premiumUnlocked: boolean;
  onLanguageChange: (language: Language) => void;
  onCategoryPress: (id: CategoryId) => void;
  onParentsPress: () => void;
  onProfilePress: () => void;
}

const islandPlacements: Record<CategoryId, { top: `${number}%`; side: 'left' | 'right' | 'center' }> = {
  shapes: { top: '92%', side: 'right' },
  numbers: { top: '17.5%', side: 'left' },
  colors: { top: '36.5%', side: 'right' },
  animals: { top: '55%', side: 'left' },
  letters: { top: '72.5%', side: 'right' },
  words: { top: '81%', side: 'left' },
};

export function WorldScreen({ language, profile, premiumUnlocked, onLanguageChange, onCategoryPress, onParentsPress, onProfilePress }: Props) {
  const totalStars = countStars(profile.progress);
  const nextCategory = categories.find((category) => profile.progress[category.id].completedQuestions < TOTAL_QUESTIONS_PER_CATEGORY);
  const nextPlacement = nextCategory ? islandPlacements[nextCategory.id] : islandPlacements.words;
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
      <View style={styles.mapShell}>
        <ImageBackground source={require('../../assets/adventure-map-v1.jpg')} resizeMode="cover" style={styles.map} imageStyle={styles.mapImage}>
          <View style={styles.mapLegend}>
            <Text style={styles.mapLegendText}>🧭 {language === 'de' ? '6 Inseln · 180 Stufen' : '6 islands · 180 stages'}</Text>
          </View>

          {categories.map((category) => {
            const completed = normalizeCategoryProgress(profile.progress[category.id]).completedQuestions;
            const percentage = Math.min(100, Math.round((completed / TOTAL_QUESTIONS_PER_CATEGORY) * 100));
            const placement = islandPlacements[category.id];
            return (
              <View key={category.id} pointerEvents="box-none" style={[styles.nodeAnchor, { top: placement.top }, placement.side === 'right' && styles.nodeAnchorRight, placement.side === 'center' && styles.nodeAnchorCenter]}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`${t(category.title, language)}, ${percentage}%`}
                  accessibilityHint={language === 'de' ? 'Öffnet die Stufen dieser Lerninsel' : 'Opens the stages on this learning island'}
                  onPress={() => onCategoryPress(category.id)}
                  style={({ pressed }) => [styles.islandSign, { borderColor: category.color }, pressed && styles.pressed]}
                >
                  <View style={styles.islandSignTop}>
                    <View style={[styles.islandIconBadge, { backgroundColor: category.lightColor }]}><Text style={styles.islandIcon}>{category.icon}</Text></View>
                    <Text numberOfLines={1} style={styles.islandTitle}>{t(category.title, language)}</Text>
                    {!premiumUnlocked && <View style={styles.stageBadge}><Text style={styles.stageBadgeText}>{FREE_STAGES_PER_CATEGORY} {language === 'de' ? 'frei' : 'free'}</Text></View>}
                  </View>
                  <View style={styles.progressRow}>
                    <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${percentage}%`, backgroundColor: category.color }]} /></View>
                    <Text style={styles.progressText}>{percentage}%</Text>
                  </View>
                </Pressable>
              </View>
            );
          })}

          {nextCategory && (
            <View pointerEvents="none" style={[styles.naviMarker, { top: nextPlacement.top }, nextPlacement.side === 'left' ? styles.naviMarkerRight : styles.naviMarkerLeft]}>
              <Image source={require('../../assets/navi-mascot-optimized.png')} resizeMode="contain" style={styles.mapMascot} />
            </View>
          )}

        </ImageBackground>
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
  mapShell: { borderRadius: 34, backgroundColor: '#7FD8F2', ...shadows.card },
  map: { position: 'relative', width: '100%', aspectRatio: 852 / 1846 },
  mapImage: { borderRadius: 34 },
  mapLegend: { position: 'absolute', top: 13, alignSelf: 'center', borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.92)', paddingHorizontal: 13, paddingVertical: 7, borderWidth: 2, borderColor: 'rgba(24,59,63,0.12)' },
  mapLegendText: { color: colors.ink, fontSize: 11, fontWeight: '900' },
  nodeAnchor: { position: 'absolute', left: '4%', width: '49%' },
  nodeAnchorRight: { left: undefined, right: '4%' },
  nodeAnchorCenter: { left: '25.5%' },
  islandSign: { minHeight: 68, borderRadius: 19, borderWidth: 3, backgroundColor: 'rgba(255,249,226,0.96)', paddingHorizontal: 9, paddingVertical: 8, ...shadows.card },
  islandSignTop: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  islandIconBadge: { width: 31, height: 31, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  islandIcon: { color: colors.ink, fontSize: 15, fontWeight: '900' },
  islandTitle: { flex: 1, color: colors.ink, fontSize: 15, fontWeight: '900' },
  stageBadge: { position: 'absolute', right: -4, top: -17, borderRadius: 9, backgroundColor: colors.paper, paddingHorizontal: 6, paddingVertical: 3, borderWidth: 1, borderColor: 'rgba(24,59,63,0.12)' },
  stageBadgeText: { color: colors.ink, fontSize: 8, fontWeight: '900' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  progressTrack: { flex: 1, height: 6, borderRadius: 4, backgroundColor: 'rgba(24,59,63,0.12)', overflow: 'hidden' },
  progressFill: { height: 6, borderRadius: 4 },
  progressText: { color: colors.ink, fontSize: 8, fontWeight: '900' },
  naviMarker: { position: 'absolute', width: 72, height: 85, marginTop: -7, alignItems: 'center', zIndex: 4 },
  naviMarkerRight: { right: 3 },
  naviMarkerLeft: { left: 3 },
  mapMascot: { position: 'absolute', bottom: -7, width: 65, height: 72 },
  safetyNote: { color: colors.muted, textAlign: 'center', fontWeight: '700', marginTop: 28 }, pressed: { transform: [{ scale: 0.985 }], opacity: 0.93 },
});
