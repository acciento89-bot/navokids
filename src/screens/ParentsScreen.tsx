import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { Language, Progress } from '../types';

export function ParentsScreen({ language, progress, onBack }: { language: Language; progress: Progress; onBack: () => void }) {
  const completed = Object.values(progress).reduce((sum, value) => sum + value.completedQuestions, 0);
  const percent = Math.round((completed / 30) * 100);
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.topbar}><Pressable onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable><Text style={styles.title}>{t(copy.parentArea, language)}</Text></View>
      <Text style={styles.intro}>{t(copy.dashboardIntro, language)}</Text>
      <View style={styles.overview}>
        <View style={styles.ring}><Text style={styles.percent}>{percent}%</Text><Text style={styles.ringLabel}>{t(copy.weeklyProgress, language)}</Text></View>
        <View style={styles.stats}><Text style={styles.statValue}>{completed}</Text><Text style={styles.statLabel}>{language === 'de' ? 'Aufgaben gelöst' : 'Activities solved'}</Text><Text style={styles.statValue}>{Object.values(progress).reduce((sum, value) => sum + value.stars, 0)} ⭐</Text><Text style={styles.statLabel}>{language === 'de' ? 'Sterne gesammelt' : 'Stars collected'}</Text></View>
      </View>
      <Text style={styles.sectionTitle}>{language === 'de' ? 'Fortschritt nach Kategorie' : 'Progress by category'}</Text>
      <View style={styles.list}>
        {categories.map((category) => {
          const value = Math.min(100, Math.round((progress[category.id].completedQuestions / 6) * 100));
          return <View key={category.id} style={styles.category}><View style={[styles.categoryIcon, { backgroundColor: category.lightColor }]}><Text style={[styles.categoryIconText, { color: category.color }]}>{category.icon}</Text></View><View style={styles.categoryMain}><View style={styles.categoryHeader}><Text style={styles.categoryTitle}>{t(category.title, language)}</Text><Text style={styles.categoryPercent}>{value}%</Text></View><View style={styles.track}><View style={[styles.fill, { width: `${value}%`, backgroundColor: category.color }]} /></View></View></View>;
        })}
      </View>
      <View style={styles.recommendation}><Text style={styles.recommendationIcon}>🌱</Text><View style={styles.recommendationCopy}><Text style={styles.recommendationTitle}>{language === 'de' ? 'Nächste Empfehlung' : 'Next recommendation'}</Text><Text style={styles.recommendationText}>{language === 'de' ? 'Eine kurze Wiederholung auf der Zahleninsel festigt das Gelernte.' : 'A short Numbers Island review will strengthen recent learning.'}</Text></View></View>
      <View style={styles.privacy}><Text style={styles.privacyTitle}>{language === 'de' ? 'Datenschutz für Kinder' : 'Children’s privacy'}</Text><Text style={styles.privacyText}>{language === 'de' ? 'Der Fortschritt bleibt auf diesem Gerät. Es werden keine Werbe-ID, kein Standort und keine persönlichen Kinderdaten erfasst.' : 'Progress stays on this device. No advertising ID, location, or personal child data is collected.'}</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { backgroundColor: '#F4F8F6', minHeight: '100%', padding: 20, paddingBottom: 50 },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  back: { width: 48, height: 48, borderRadius: 18, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  backText: { color: colors.ink, fontSize: 40, lineHeight: 40 },
  title: { color: colors.ink, fontSize: 27, fontWeight: '900' },
  intro: { color: colors.muted, fontSize: 16, lineHeight: 23, fontWeight: '600', marginTop: 18 },
  overview: { backgroundColor: colors.paper, borderRadius: 30, padding: 22, marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 22, ...shadows.card },
  ring: { width: 130, height: 130, borderRadius: 65, borderWidth: 14, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center' },
  percent: { color: colors.ink, fontSize: 29, fontWeight: '900' },
  ringLabel: { color: colors.muted, fontSize: 10, fontWeight: '800', textAlign: 'center' },
  stats: { flex: 1 },
  statValue: { color: colors.ink, fontSize: 24, fontWeight: '900', marginTop: 5 },
  statLabel: { color: colors.muted, fontSize: 12, fontWeight: '700', marginBottom: 8 },
  sectionTitle: { color: colors.ink, fontSize: 21, fontWeight: '900', marginTop: 28, marginBottom: 13 },
  list: { gap: 11 },
  category: { backgroundColor: colors.paper, borderRadius: 21, padding: 14, flexDirection: 'row', alignItems: 'center' },
  categoryIcon: { width: 49, height: 49, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  categoryIconText: { fontWeight: '900', fontSize: 17 },
  categoryMain: { flex: 1, marginLeft: 13 },
  categoryHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  categoryTitle: { color: colors.ink, fontWeight: '800', fontSize: 15 },
  categoryPercent: { color: colors.muted, fontWeight: '900' },
  track: { height: 7, borderRadius: 4, backgroundColor: '#EDF0EB', marginTop: 8, overflow: 'hidden' },
  fill: { height: 7, borderRadius: 4 },
  recommendation: { backgroundColor: '#E2F4E6', borderRadius: 24, padding: 18, marginTop: 24, flexDirection: 'row', gap: 13 },
  recommendationIcon: { fontSize: 29 },
  recommendationCopy: { flex: 1 },
  recommendationTitle: { color: '#245D37', fontSize: 16, fontWeight: '900' },
  recommendationText: { color: '#416D50', fontSize: 13, lineHeight: 19, fontWeight: '600', marginTop: 4 },
  privacy: { backgroundColor: colors.paper, borderRadius: 24, padding: 18, marginTop: 14 },
  privacyTitle: { color: colors.ink, fontSize: 16, fontWeight: '900' },
  privacyText: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 5 },
});
