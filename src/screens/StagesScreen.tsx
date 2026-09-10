import { useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { t } from '../i18n';
import { FREE_STAGES_PER_CATEGORY, STAGES_PER_CATEGORY } from '../config/learning';
import { isStageCompleted, isStageNextInSequence } from '../data/progress';
import { colors, shadows } from '../theme';
import { CategoryProgress, Language, LearningCategory } from '../types';

export function StagesScreen({ category, language, progress, premiumUnlocked, onBack, onStage, focusStage }: { focusStage?: number; category: LearningCategory; language: Language; progress: CategoryProgress; premiumUnlocked: boolean; onBack: () => void; onStage: (stage: number) => void }) {
  const scroll = useRef<ScrollView>(null);
  const pathY = useRef<number | null>(null);
  const rowY = useRef<number | null>(null);
  const restored = useRef(false);
  const contentReady = useRef(false);
  const restorePosition = () => {
    if (!contentReady.current || restored.current || pathY.current === null || rowY.current === null) return;
    scroll.current?.scrollTo({ y: Math.max(0, pathY.current + rowY.current - 20), animated: false });
    restored.current = true;
  };
  return (
    <ScrollView ref={scroll} onContentSizeChange={(_, height) => { contentReady.current = height > 0; restorePosition(); }} contentContainerStyle={[styles.content, { backgroundColor: category.lightColor }]}>
      <View style={styles.header}>
        <Pressable onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>
        <View style={[styles.heroIcon, { backgroundColor: category.color }]}><Text style={styles.icon}>{category.icon}</Text></View>
        <Text style={styles.title}>{t(category.title, language)}</Text>
        <Text style={styles.subtitle}>{t(category.subtitle, language)}</Text>
      </View>
      <View style={styles.path} onLayout={(event) => { pathY.current = event.nativeEvent.layout.y; restorePosition(); }}>
        {Array.from({ length: STAGES_PER_CATEGORY }, (_, index) => index + 1).map((stage) => {
          const free = stage <= FREE_STAGES_PER_CATEGORY;
          const entitled = free || premiumUnlocked;
          const sequentiallyAvailable = isStageNextInSequence(progress, stage);
          const available = entitled && sequentiallyAvailable;
          const complete = isStageCompleted(progress, stage);
          return (
            <Pressable key={stage} onLayout={stage === focusStage ? (event) => { rowY.current = event.nativeEvent.layout.y; restorePosition(); } : undefined} disabled={!available && entitled} onPress={() => onStage(stage)} style={({ pressed }) => [styles.stage, !available && styles.lockedStage, pressed && styles.pressed]}>
              <View style={[styles.stageNumber, { backgroundColor: available ? category.color : '#AAB6B7' }]}><Text style={styles.stageNumberText}>{available ? stage : '🔒'}</Text></View>
              <View style={styles.stageCopy}>
                <Text style={styles.stageTitle}>{language === 'de' ? `Stufe ${stage}` : `Stage ${stage}`}</Text>
                <Text style={styles.stageSubtitle}>{complete
                  ? (language === 'de' ? 'Geschafft!' : 'Completed!')
                  : !entitled
                    ? 'NavoKids Premium'
                    : !sequentiallyAvailable
                      ? (language === 'de' ? 'Vorherige Stufe zuerst' : 'Complete the previous stage first')
                      : free
                        ? (language === 'de' ? 'Kostenlos spielen' : 'Play for free')
                        : (language === 'de' ? 'Neue Mission' : 'New mission')}</Text>
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
