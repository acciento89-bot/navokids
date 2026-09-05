import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { t } from '../i18n';
import { colors, shadows } from '../theme';
import { Language, LearningCategory } from '../types';

export function StagesScreen({ category, language, completedQuestions, premiumUnlocked, onBack, onStage }: { category: LearningCategory; language: Language; completedQuestions: number; premiumUnlocked: boolean; onBack: () => void; onStage: (stage: number) => void }) {
  return (
    <ScrollView contentContainerStyle={[styles.content, { backgroundColor: category.lightColor }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>
        <View style={[styles.heroIcon, { backgroundColor: category.color }]}><Text style={styles.icon}>{category.icon}</Text></View>
        <Text style={styles.title}>{t(category.title, language)}</Text>
        <Text style={styles.subtitle}>{t(category.subtitle, language)}</Text>
      </View>
      <View style={styles.path}>
        {[1, 2, 3, 4, 5, 6].map((stage) => {
          const free = stage <= 2;
          const available = free || premiumUnlocked;
          const complete = completedQuestions >= stage * 3;
          return (
            <Pressable key={stage} onPress={() => onStage(stage)} style={({ pressed }) => [styles.stage, !available && styles.lockedStage, pressed && styles.pressed]}>
              <View style={[styles.stageNumber, { backgroundColor: available ? category.color : '#AAB6B7' }]}><Text style={styles.stageNumberText}>{available ? stage : '🔒'}</Text></View>
              <View style={styles.stageCopy}>
                <Text style={styles.stageTitle}>{language === 'de' ? `Stufe ${stage}` : `Stage ${stage}`}</Text>
                <Text style={styles.stageSubtitle}>{complete ? (language === 'de' ? 'Geschafft!' : 'Completed!') : free ? (language === 'de' ? 'Kostenlos spielen' : 'Play for free') : premiumUnlocked ? (language === 'de' ? 'Freigeschaltet' : 'Unlocked') : 'NavoKids Premium'}</Text>
              </View>
              <Text style={styles.stars}>{complete ? '⭐⭐⭐' : available ? '☆ ☆ ☆' : ''}</Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { minHeight: '100%', padding: 20, paddingBottom: 50 },
  header: { alignItems: 'center', paddingTop: 8 },
  back: { position: 'absolute', left: 0, top: 4, width: 48, height: 48, borderRadius: 18, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  backText: { color: colors.ink, fontSize: 40, lineHeight: 40 },
  heroIcon: { width: 88, height: 88, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  icon: { color: '#FFF', fontSize: 30, fontWeight: '900' },
  title: { color: colors.ink, fontSize: 30, fontWeight: '900', marginTop: 14 },
  subtitle: { color: colors.muted, fontSize: 16, fontWeight: '600', textAlign: 'center', marginTop: 5 },
  path: { gap: 14, marginTop: 28 },
  stage: { backgroundColor: colors.paper, borderRadius: 24, padding: 15, flexDirection: 'row', alignItems: 'center', ...shadows.card },
  lockedStage: { opacity: 0.72 },
  stageNumber: { width: 58, height: 58, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  stageNumberText: { color: '#FFF', fontSize: 22, fontWeight: '900' },
  stageCopy: { flex: 1, marginLeft: 15 },
  stageTitle: { color: colors.ink, fontSize: 18, fontWeight: '900' },
  stageSubtitle: { color: colors.muted, fontSize: 13, fontWeight: '700', marginTop: 3 },
  stars: { color: colors.yellow, fontSize: 17 },
  pressed: { transform: [{ scale: 0.98 }] },
});
