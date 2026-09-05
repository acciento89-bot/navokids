import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ParentGate } from './src/components/ParentGate';
import { categoryById } from './src/data/learningContent';
import { QUESTIONS_PER_STAGE } from './src/config/learning';
import { createEmptyProgress } from './src/data/progress';
import { GameScreen } from './src/screens/GameScreen';
import { ParentsScreen } from './src/screens/ParentsScreen';
import { PremiumScreen } from './src/screens/PremiumScreen';
import { ProfilePickerScreen } from './src/screens/ProfilePickerScreen';
import { ProfileSetupScreen } from './src/screens/ProfileSetupScreen';
import { StagesScreen } from './src/screens/StagesScreen';
import { WorldScreen } from './src/screens/WorldScreen';
import { colors } from './src/theme';
import { usePremiumStore } from './src/services/usePremiumStore';
import { AppState, CategoryId, ChildProfile, Language, Progress, Screen } from './src/types';

const STORAGE_KEY = 'navokids-state-v2';
const LEGACY_STORAGE_KEY = 'navokids-progress-v1';
const initialState: AppState = { profiles: [], activeProfileId: null, premiumUnlocked: false, language: 'de' };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'setup', mode: 'first' });
  const [appState, setAppState] = useState<AppState>(initialState);
  const [hydrated, setHydrated] = useState(false);
  const [gateVisible, setGateVisible] = useState(false);
  const [gateTarget, setGateTarget] = useState<'parents' | 'premium' | 'addProfile'>('parents');

  const reconcilePremium = useCallback((premiumUnlocked: boolean, premiumLastVerifiedAt: string) => {
    if (!hydrated) return;
    setAppState((current) => ({ ...current, premiumUnlocked, premiumLastVerifiedAt }));
  }, [hydrated]);
  const premiumStore = usePremiumStore(reconcilePremium);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as AppState;
          setAppState(parsed);
          setScreen(parsed.profiles.length ? { name: 'profiles' } : { name: 'setup', mode: 'first' });
          return;
        }
        const legacy = await AsyncStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          const profile: ChildProfile = {
            id: 'first-explorer',
            nickname: 'Entdecker',
            avatar: '🦊',
            ageGroup: 'discoverer',
            progress: JSON.parse(legacy) as Progress,
            createdAt: new Date().toISOString(),
          };
          const migrated = { ...initialState, profiles: [profile], activeProfileId: profile.id };
          setAppState(migrated);
          setScreen({ name: 'world' });
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        }
      } finally {
        setHydrated(true);
      }
    };
    load().catch(() => setHydrated(true));
  }, []);

  useEffect(() => {
    if (hydrated) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(appState)).catch(() => undefined);
  }, [appState, hydrated]);

  const activeProfile = useMemo(
    () => appState.profiles.find((profile) => profile.id === appState.activeProfileId) ?? appState.profiles[0],
    [appState.activeProfileId, appState.profiles],
  );

  const createProfile = (data: Omit<ChildProfile, 'id' | 'progress' | 'createdAt'>) => {
    const profile: ChildProfile = { ...data, id: `child-${Date.now()}`, progress: createEmptyProgress(), createdAt: new Date().toISOString() };
    setAppState((current) => ({ ...current, profiles: [...current.profiles, profile], activeProfileId: profile.id }));
    setScreen({ name: 'world' });
  };

  const selectProfile = (id: string) => {
    setAppState((current) => ({ ...current, activeProfileId: id }));
    setScreen({ name: 'world' });
  };

  const setLanguage = (language: Language) => setAppState((current) => ({ ...current, language }));

  const requestGate = (target: typeof gateTarget) => {
    setGateTarget(target);
    setGateVisible(true);
  };

  const requestStage = (categoryId: CategoryId, stage: number) => {
    if (stage <= 2 || appState.premiumUnlocked) setScreen({ name: 'game', categoryId, stage });
    else requestGate('premium');
  };

  const completeStage = (categoryId: CategoryId, stage: number, answered: number) => {
    if (!activeProfile) return;
    setAppState((current) => ({
      ...current,
      profiles: current.profiles.map((profile) => {
        if (profile.id !== activeProfile.id) return profile;
        const previous = profile.progress[categoryId];
        return {
          ...profile,
          progress: {
            ...profile.progress,
            [categoryId]: {
              completedQuestions: Math.max(previous.completedQuestions, stage * QUESTIONS_PER_STAGE),
              stars: Math.max(previous.stars, stage * 3),
            },
          },
        };
      }),
    }));
    setScreen({ name: 'stages', categoryId });
  };

  if (!hydrated) return <View style={styles.loading} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      {screen.name === 'setup' && <ProfileSetupScreen language={appState.language} mode={screen.mode} onCancel={screen.mode === 'add' ? () => setScreen({ name: 'parents' }) : undefined} onSave={createProfile} />}
      {screen.name === 'profiles' && <ProfilePickerScreen language={appState.language} profiles={appState.profiles} onSelect={selectProfile} onAdd={() => requestGate('addProfile')} />}
      {screen.name === 'world' && activeProfile && <WorldScreen language={appState.language} profile={activeProfile} onLanguageChange={setLanguage} onCategoryPress={(categoryId) => setScreen({ name: 'stages', categoryId })} onParentsPress={() => requestGate('parents')} onProfilePress={() => setScreen({ name: 'profiles' })} />}
      {screen.name === 'stages' && activeProfile && <StagesScreen category={categoryById(screen.categoryId)} language={appState.language} completedQuestions={activeProfile.progress[screen.categoryId].completedQuestions} premiumUnlocked={appState.premiumUnlocked} onBack={() => setScreen({ name: 'world' })} onStage={(stage) => requestStage(screen.categoryId, stage)} />}
      {screen.name === 'game' && activeProfile && <GameScreen category={categoryById(screen.categoryId)} stage={screen.stage} language={appState.language} ageGroup={activeProfile.ageGroup} onBack={() => setScreen({ name: 'stages', categoryId: screen.categoryId })} onCompleted={(answered) => completeStage(screen.categoryId, screen.stage, answered)} />}
      {screen.name === 'parents' && activeProfile && <ParentsScreen language={appState.language} progress={activeProfile.progress} profiles={appState.profiles} activeProfileId={activeProfile.id} premiumUnlocked={appState.premiumUnlocked} onBack={() => setScreen({ name: 'world' })} onAddProfile={() => setScreen({ name: 'setup', mode: 'add' })} onSwitchProfile={() => setScreen({ name: 'profiles' })} onPremium={() => !appState.premiumUnlocked && setScreen({ name: 'premium' })} />}
      {screen.name === 'premium' && <PremiumScreen language={appState.language} store={premiumStore} onBack={() => setScreen({ name: 'parents' })} onUnlocked={() => setScreen({ name: 'parents' })} />}
      <ParentGate visible={gateVisible} language={appState.language} onCancel={() => setGateVisible(false)} onSuccess={() => {
        setGateVisible(false);
        if (gateTarget === 'parents') setScreen({ name: 'parents' });
        else if (gateTarget === 'premium') setScreen({ name: 'premium' });
        else setScreen({ name: 'setup', mode: 'add' });
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.cream },
  loading: { flex: 1, backgroundColor: colors.cream },
});
