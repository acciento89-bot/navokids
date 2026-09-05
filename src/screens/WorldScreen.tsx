import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { CategoryId, Language, Progress } from '../types';

interface Props {
  language: Language;
  progress: Progress;
  onLanguageChange: (language: Language) => void;
  onCategoryPress: (id: CategoryId) => void;
  onParentsPress: () => void;
}

export function WorldScreen({ language, progress, onLanguageChange, onCategoryPress, onParentsPress }: Props) {
  const totalStars = Object.values(progress).reduce((sum, item) => sum + item.stars, 0);
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topbar}>
        <View style={styles.brand}><Text style={styles.brandNavo}>Navo</Text><Text style={styles.brandKids}>Kids</Text></View>
        <View style={styles.actions}>
          <Pressable accessibilityRole="button" onPress={() => onLanguageChange(language === 'de' ? 'en' : 'de')} style={styles.languageButton}>
            <Text style={styles.languageText}>{language === 'de' ? 'DE' : 'EN'}</Text>
          </Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel={t(copy.parentArea, language)} onPress={onParentsPress} style={styles.parentButton}>
            <Text style={styles.parentIcon}>👨‍👩‍👧</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroCopy}>
          <View style={styles.starPill}><Text style={styles.starText}>⭐ {totalStars} {t(copy.stars, language)}</Text></View>
          <Text style={styles.heroTitle}>{t(copy.greeting, language)}</Text>
          <Text style={styles.heroBody}>{language === 'de' ? 'Navi begleitet dich durch fünf magische Lerninseln.' : 'Navi guides you through five magical learning islands.'}</Text>
        </View>
        <Image source={require('../../assets/navi-mascot-optimized.png')} resizeMode="contain" style={styles.mascot} />
      </View>

      <Text style={styles.sectionTitle}>{t(copy.chooseIsland, language)}</Text>
      <View style={styles.grid}>
        {categories.map((category) => {
          const completed = progress[category.id].completedQuestions;
          return (
            <Pressable key={category.id} onPress={() => onCategoryPress(category.id)} style={({ pressed }) => [styles.card, { backgroundColor: category.lightColor }, pressed && styles.pressed]}>
              <View style={[styles.iconCircle, { backgroundColor: category.color }]}><Text style={styles.icon}>{category.icon}</Text></View>
              <View style={styles.cardCopy}>
                <Text style={styles.cardTitle}>{t(category.title, language)}</Text>
                <Text style={styles.cardSubtitle}>{t(category.subtitle, language)}</Text>
                <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${Math.min(100, (completed / 6) * 100)}%`, backgroundColor: category.color }]} /></View>
              </View>
              <Text style={[styles.arrow, { color: category.color }]}>›</Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={styles.safetyNote}>{language === 'de' ? 'Werbefrei · Kindgerecht · Auch offline' : 'Ad-free · Child-friendly · Works offline'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 14, paddingBottom: 44, backgroundColor: colors.cream, minHeight: '100%' },
  topbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { flexDirection: 'row', alignItems: 'baseline' },
  brandNavo: { color: colors.tealDark, fontSize: 29, fontWeight: '900' },
  brandKids: { color: colors.coral, fontSize: 29, fontWeight: '900' },
  actions: { flexDirection: 'row', gap: 10 },
  languageButton: { height: 44, minWidth: 50, paddingHorizontal: 12, borderRadius: 16, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  languageText: { color: colors.tealDark, fontWeight: '900' },
  parentButton: { width: 50, height: 44, borderRadius: 16, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  parentIcon: { fontSize: 20 },
  hero: { height: 240, marginTop: 18, borderRadius: 32, backgroundColor: '#CDEFEA', overflow: 'hidden', flexDirection: 'row', ...shadows.card },
  heroCopy: { flex: 1, padding: 22, zIndex: 2, justifyContent: 'center' },
  starPill: { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 7, marginBottom: 12 },
  starText: { color: colors.ink, fontWeight: '800', fontSize: 13 },
  heroTitle: { color: colors.ink, fontSize: 25, lineHeight: 30, fontWeight: '900', maxWidth: 220 },
  heroBody: { color: colors.muted, fontSize: 15, lineHeight: 21, fontWeight: '600', maxWidth: 220, marginTop: 8 },
  mascot: { width: '46%', height: 230, alignSelf: 'flex-end', marginRight: -8, marginBottom: -4 },
  sectionTitle: { color: colors.ink, fontSize: 23, fontWeight: '900', marginTop: 28, marginBottom: 14 },
  grid: { gap: 13 },
  card: { minHeight: 112, borderRadius: 25, padding: 16, flexDirection: 'row', alignItems: 'center', ...shadows.card },
  iconCircle: { width: 66, height: 66, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  icon: { color: '#FFFFFF', fontSize: 22, fontWeight: '900' },
  cardCopy: { flex: 1, marginLeft: 15 },
  cardTitle: { color: colors.ink, fontSize: 20, fontWeight: '900' },
  cardSubtitle: { color: colors.muted, fontSize: 13, lineHeight: 18, fontWeight: '600', marginTop: 2 },
  progressTrack: { height: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.9)', overflow: 'hidden', marginTop: 10 },
  progressFill: { height: 7, borderRadius: 4 },
  arrow: { fontSize: 38, fontWeight: '500', marginLeft: 10 },
  safetyNote: { color: colors.muted, textAlign: 'center', fontWeight: '700', marginTop: 28 },
  pressed: { transform: [{ scale: 0.985 }], opacity: 0.92 },
});
