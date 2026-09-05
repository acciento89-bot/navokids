import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/learningContent';
import { QUESTIONS_PER_STAGE, STAGES_PER_CATEGORY, TOTAL_QUESTIONS, TOTAL_QUESTIONS_PER_CATEGORY } from '../config/learning';
import { copy, t } from '../i18n';
import { colors, shadows } from '../theme';
import { ChildProfile, Language, Progress } from '../types';

export function ParentsScreen({ language, progress, profiles, activeProfileId, premiumUnlocked, onBack, onAddProfile, onSwitchProfile, onPremium }: { language: Language; progress: Progress; profiles: ChildProfile[]; activeProfileId: string; premiumUnlocked: boolean; onBack: () => void; onAddProfile: () => void; onSwitchProfile: () => void; onPremium: () => void }) {
  const completed = Object.values(progress).reduce((sum, value) => sum + value.completedQuestions, 0);
  const percent = Math.min(100, Math.round((completed / TOTAL_QUESTIONS) * 100));
  const focusCategory = [...categories].sort((a, b) => progress[a.id].completedQuestions - progress[b.id].completedQuestions)[0] ?? categories[0];
  const focusProgress = focusCategory ? progress[focusCategory.id].completedQuestions : 0;
  const focusStage = Math.min(STAGES_PER_CATEGORY, Math.floor(focusProgress / QUESTIONS_PER_STAGE) + 1);
  const recommendationVariant = (completed + Object.values(progress).reduce((sum, value) => sum + value.stars, 0)) % 4;
  const recommendation = focusCategory ? [
    language === 'de' ? `Als Nächstes: Stufe ${focusStage} auf der ${t(focusCategory.title, language)}-Insel.` : `Next: Stage ${focusStage} on ${t(focusCategory.title, language)} Island.`,
    language === 'de' ? `${t(focusCategory.title, language)} hat aktuell das meiste Übungspotenzial. Eine kurze Runde reicht.` : `${t(focusCategory.title, language)} currently has the most room to grow. One short round is enough.`,
    language === 'de' ? `Heute empfiehlt Navi eine neue Mission auf der ${t(focusCategory.title, language)}-Insel.` : `Today Navi recommends a new mission on ${t(focusCategory.title, language)} Island.`,
    language === 'de' ? `Für einen ausgewogenen Lernmix geht es mit ${t(focusCategory.title, language)}, Stufe ${focusStage}, weiter.` : `For a balanced learning mix, continue with ${t(focusCategory.title, language)}, Stage ${focusStage}.`,
  ][recommendationVariant] : '';
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.topbar}><Pressable onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable><Text style={styles.title}>{t(copy.parentArea, language)}</Text></View>
      <Text style={styles.intro}>{t(copy.dashboardIntro, language)}</Text>
      <View style={styles.profileStrip}>
        <View style={styles.profileInfo}><Text style={styles.profileAvatar}>{profiles.find((profile) => profile.id === activeProfileId)?.avatar}</Text><View><Text style={styles.profileName}>{profiles.find((profile) => profile.id === activeProfileId)?.nickname}</Text><Text style={styles.profileMeta}>{profiles.length} {language === 'de' ? 'Kinderprofil(e)' : 'child profile(s)'}</Text></View></View>
        <Pressable onPress={onSwitchProfile} style={styles.smallButton}><Text style={styles.smallButtonText}>{language === 'de' ? 'Wechseln' : 'Switch'}</Text></Pressable>
      </View>
      <View style={styles.overview}>
        <View style={styles.ring}><Text style={styles.percent}>{percent}%</Text><Text style={styles.ringLabel}>{t(copy.weeklyProgress, language)}</Text></View>
        <View style={styles.stats}><Text style={styles.statValue}>{completed}</Text><Text style={styles.statLabel}>{language === 'de' ? 'Aufgaben gelöst' : 'Activities solved'}</Text><Text style={styles.statValue}>{Object.values(progress).reduce((sum, value) => sum + value.stars, 0)} ⭐</Text><Text style={styles.statLabel}>{language === 'de' ? 'Sterne gesammelt' : 'Stars collected'}</Text></View>
      </View>
      <Text style={styles.sectionTitle}>{language === 'de' ? 'Fortschritt nach Kategorie' : 'Progress by category'}</Text>
      <View style={styles.list}>
        {categories.map((category) => {
          const value = Math.min(100, Math.round((progress[category.id].completedQuestions / TOTAL_QUESTIONS_PER_CATEGORY) * 100));
          return <View key={category.id} style={styles.category}><View style={[styles.categoryIcon, { backgroundColor: category.lightColor }]}><Text style={[styles.categoryIconText, { color: category.color }]}>{category.icon}</Text></View><View style={styles.categoryMain}><View style={styles.categoryHeader}><Text style={styles.categoryTitle}>{t(category.title, language)}</Text><Text style={styles.categoryPercent}>{value}%</Text></View><View style={styles.track}><View style={[styles.fill, { width: `${value}%`, backgroundColor: category.color }]} /></View></View></View>;
        })}
      </View>
      <View style={styles.recommendation}><Text style={styles.recommendationIcon}>🧭</Text><View style={styles.recommendationCopy}><Text style={styles.recommendationTitle}>{language === 'de' ? 'Navis nächste Empfehlung' : 'Navi’s next recommendation'}</Text><Text style={styles.recommendationText}>{recommendation}</Text></View></View>
      <Pressable onPress={onPremium} style={[styles.premium, premiumUnlocked && styles.premiumActive]}><Text style={styles.premiumIcon}>{premiumUnlocked ? '✓' : '★'}</Text><View style={styles.premiumCopy}><Text style={styles.premiumTitle}>{premiumUnlocked ? (language === 'de' ? 'Premium ist aktiv' : 'Premium is active') : 'NavoKids Premium'}</Text><Text style={styles.premiumText}>{premiumUnlocked ? (language === 'de' ? 'Alle Lernstufen sind freigeschaltet.' : 'All learning stages are unlocked.') : (language === 'de' ? 'Alle Lerninseln und Stufen freischalten' : 'Unlock every learning island and stage')}</Text></View><Text style={styles.premiumArrow}>›</Text></Pressable>
      {profiles.length < 4 && <Pressable onPress={onAddProfile} style={styles.addProfile}><Text style={styles.addProfileText}>+ {language === 'de' ? 'Kinderprofil hinzufügen' : 'Add child profile'}</Text></Pressable>}
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
  profileStrip: { backgroundColor: colors.paper, borderRadius: 22, padding: 14, marginTop: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  profileInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 }, profileAvatar: { fontSize: 33 }, profileName: { color: colors.ink, fontSize: 17, fontWeight: '900' }, profileMeta: { color: colors.muted, fontSize: 11, fontWeight: '700', marginTop: 2 },
  smallButton: { backgroundColor: '#E3F5F1', borderRadius: 14, paddingHorizontal: 13, paddingVertical: 9 }, smallButtonText: { color: colors.tealDark, fontSize: 12, fontWeight: '900' },
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
  premium: { backgroundColor: '#FFF1BC', borderRadius: 24, padding: 17, marginTop: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }, premiumActive: { backgroundColor: '#DFF5E7' }, premiumIcon: { width: 39, height: 39, borderRadius: 14, backgroundColor: colors.yellow, color: '#FFF', textAlign: 'center', lineHeight: 39, fontSize: 22, fontWeight: '900' }, premiumCopy: { flex: 1 }, premiumTitle: { color: colors.ink, fontSize: 16, fontWeight: '900' }, premiumText: { color: colors.muted, fontSize: 12, lineHeight: 17, fontWeight: '600', marginTop: 2 }, premiumArrow: { color: colors.ink, fontSize: 32 },
  addProfile: { borderWidth: 2, borderStyle: 'dashed', borderColor: '#A8C5BF', borderRadius: 20, padding: 16, marginTop: 14, alignItems: 'center' }, addProfileText: { color: colors.tealDark, fontSize: 14, fontWeight: '900' },
  privacy: { backgroundColor: colors.paper, borderRadius: 24, padding: 18, marginTop: 14 },
  privacyTitle: { color: colors.ink, fontSize: 16, fontWeight: '900' },
  privacyText: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 5 },
});
