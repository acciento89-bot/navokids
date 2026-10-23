import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ParentGate } from './src/components/ParentGate';
import { categories, categoryById } from './src/data/learningContent';
import { createEmptyProgress, completeStageProgress, isStageNextInSequence, normalizeProgress } from './src/data/progress';
import { GameScreen } from './src/screens/GameScreen';
import { ParentsScreen } from './src/screens/ParentsScreen';
import { PremiumScreen } from './src/screens/PremiumScreen';
import { ProfilePickerScreen } from './src/screens/ProfilePickerScreen';
import { ProfileSetupScreen } from './src/screens/ProfileSetupScreen';
import { StagesScreen } from './src/screens/StagesScreen';
import { WorldScreen } from './src/screens/WorldScreen';
import { colors } from './src/theme';
import { usePremiumStore } from './src/services/usePremiumStore';
import { AppState, CategoryId, ChildProfile, Language, Screen } from './src/types';
import { PracticePlanScreen } from './src/screens/PracticePlanScreen';
import { PracticeSessionScreen } from './src/screens/PracticeSessionScreen';
import { PracticeRepository } from './src/practice/repository';
import { createPracticePlan, startPracticeSession, submitPracticeAnswer, discardPracticeSession } from './src/practice/core';
import type { AnswerCommand, PracticeArchive, PracticePlan, PracticeSession, Selection } from './src/practice/core';
import { readLegacyState, writeLegacyState } from './src/practice/legacyStateGuard';
import { practiceCopy } from './src/practice/copy';

const initialState: AppState = { profiles: [], activeProfileId: null, premiumUnlocked: false, progressSchemaVersion: 2, language: 'de' };

export default function App() {
  return <SafeAreaProvider><AppContent /></SafeAreaProvider>;
}
function AppContent() {
  const insets = useSafeAreaInsets(), window = useWindowDimensions();
  const [loadAttempt, setLoadAttempt] = useState(0), [legacyReadError, setLegacyReadError] = useState(false), [legacyWriteError, setLegacyWriteError] = useState(false), [writeAttempt, setWriteAttempt] = useState(0);
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
    let active = true;
    setHydrated(false); setLegacyReadError(false);
    const load = async () => {
      try {
        const stored = await readLegacyState(AsyncStorage);
        if (!active) return;
        if (stored.state) {
          const parsed = stored.state;
          // Aggregate progress from older TestFlight builds cannot tell a real sequence
          // from the former "jump to stage 30" bug. Reset it once instead of preserving
          // false completions. Profiles, language, and Premium entitlement stay intact.
          const normalized: AppState = {
            ...parsed,
            progressSchemaVersion: 2,
            profiles: parsed.profiles.map((profile) => ({
              ...profile,
              progress: parsed.progressSchemaVersion === 2 ? normalizeProgress(profile.progress) : createEmptyProgress(),
            })),
          };
          setAppState(normalized);
          setScreen(parsed.profiles.length ? { name: 'profiles' } : { name: 'setup', mode: 'first' });
          return;
        }
        const legacy = stored.legacy;
        if (legacy) {
          const profile: ChildProfile = {
            id: 'first-explorer',
            nickname: 'Entdecker',
            avatar: '🦊',
            ageGroup: 'discoverer',
            progress: createEmptyProgress(),
            createdAt: new Date().toISOString(),
          };
          const migrated = { ...initialState, profiles: [profile], activeProfileId: profile.id };
          setAppState(migrated);
          setScreen({ name: 'world' });
          await writeLegacyState(AsyncStorage, migrated);
        }
      } catch { if (active) setLegacyReadError(true); }
      finally { if (active) setHydrated(true); }
    };
    void load();
    return () => { active = false; };
  }, [loadAttempt]);

  useEffect(() => {
    if (!hydrated || legacyReadError) return;
    let active = true;
    void writeLegacyState(AsyncStorage, appState).then(() => { if (active) setLegacyWriteError(false); }).catch(() => { if (active) setLegacyWriteError(true); });
    return () => { active = false; };
  }, [appState, hydrated, legacyReadError, writeAttempt]);

  const activeProfile = useMemo(
    () => appState.profiles.find((profile) => profile.id === appState.activeProfileId) ?? appState.profiles[0],
    [appState.activeProfileId, appState.profiles],
  );

  const activeID = activeProfile?.id;
  const activeIDRef = useRef(activeID); activeIDRef.current = activeID;
  const [practiceArchive, setPracticeArchive] = useState<PracticeArchive | null>(null), practiceRef = useRef<PracticeArchive | null>(null);
  const [practiceError, setPracticeError] = useState<string | null>(null), [practiceBlocked, setPracticeBlocked] = useState(false), [practiceBusy, setPracticeBusy] = useState(false), [practiceAttempt, setPracticeAttempt] = useState(0);
  const practiceBusyRef = useRef(false), practiceLoad = useRef(0);
  const [practiceSessionID, setPracticeSessionID] = useState<string | null>(null);
  const repository = useMemo(() => activeID ? new PracticeRepository(AsyncStorage, activeID) : null, [activeID]);
  const p = practiceCopy[appState.language];
  const publishPractice = (archive: PracticeArchive) => { practiceRef.current = archive; setPracticeArchive(archive); };
  useEffect(() => {
    const request = ++practiceLoad.current, id = activeID;
    practiceRef.current = null; setPracticeArchive(null); setPracticeError(null); setPracticeBlocked(false);
    if (!repository || !id || !hydrated || legacyReadError) return;
    void repository.load().then((archive) => {
      if (request !== practiceLoad.current || id !== activeIDRef.current) return;
      publishPractice(archive);
    }).catch((cause) => { if (request === practiceLoad.current && id === activeIDRef.current) { setPracticeError(cause instanceof Error && 'code' in cause && cause.code === 'uncertain' ? practiceCopy[appState.language].uncertain : practiceCopy[appState.language].loadError); setPracticeBlocked(true); } });
    return () => { practiceLoad.current++; };
  }, [repository, activeID, hydrated, legacyReadError, practiceAttempt]);
  const explainPractice = (cause: unknown) => {
    const code = cause && typeof cause === 'object' && 'code' in cause ? String(cause.code) : '';
    return code === 'uncertain' ? p.uncertain : code === 'unavailable' || code === 'identity' ? p.unavailable : code === 'capacity' ? p.capacity : code === 'conflict' ? p.conflict : code === 'invalid' ? p.invalid : p.saveError;
  };
  const persistPractice = async (change: (archive: PracticeArchive, at: string) => PracticeArchive): Promise<PracticeArchive | null> => {
    const current = practiceRef.current, id = activeID;
    if (!repository || !current || current.profileId !== id || practiceBusyRef.current || practiceBlocked || legacyReadError || legacyWriteError) return null;
    practiceBusyRef.current = true; setPracticeBusy(true); setPracticeError(null);
    try {
      const next = { ...change(current, new Date().toISOString()), revision: current.revision + 1 };
      const saved = await repository.save(next, current.revision);
      if (activeIDRef.current !== id) return null;
      publishPractice(saved); return saved;
    } catch (cause) { if (activeIDRef.current === id) { setPracticeError(explainPractice(cause)); if (cause instanceof Error && 'code' in cause && cause.code === 'uncertain') setPracticeBlocked(true); } return null; }
    finally { practiceBusyRef.current = false; setPracticeBusy(false); }
  };
  const savePracticePlan = async (input: { id: string; title: string; selections: Selection[] }) => !!await persistPractice((archive, at) => {
    if (!activeProfile) throw Error('missing profile');
    const plan = createPracticePlan(activeProfile, input, categories, at, appState.premiumUnlocked), previous = archive.plans.find((item) => item.id === input.id);
    return { ...archive, plans: previous ? archive.plans.map((item) => item.id === plan.id ? { ...plan, createdAt: previous.createdAt } : item) : [...archive.plans, plan] };
  });
  const startPractice = async (plan: PracticePlan) => {
    const id = `session-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    const saved = await persistPractice((archive, at) => {
      if (!activeProfile || archive.sessions.some((session) => !session.completedAt && !session.discardedAt)) throw Error('active session');
      const actualPlan = archive.plans.find((item) => item.id === plan.id); if (!actualPlan) throw Error('missing plan');
      const session = startPracticeSession(activeProfile, actualPlan, categories, at, appState.premiumUnlocked, id);
      return { ...archive, sessions: [...archive.sessions, session] };
    });
    if (saved) { setPracticeSessionID(id); setScreen({ name: 'practiceSession' }); }
  };
  const answerPractice = async (command: AnswerCommand) => {
    const saved = await persistPractice((archive, at) => {
      const session = archive.sessions.find((item) => item.id === command.sessionId);
      if (!session || !activeProfile) throw Error('missing session');
      const changed = submitPracticeAnswer(session, activeProfile, categories, command, at, appState.premiumUnlocked);
      return { ...archive, sessions: archive.sessions.map((item) => item.id === changed.id ? changed : item) };
    });
    return saved?.sessions.find((item) => item.id === command.sessionId) ?? null;
  };
  const discardPractice = async (session: PracticeSession) => { await persistPractice((archive, at) => {
    const actual = archive.sessions.find((item) => item.id === session.id); if (!actual || !activeID) throw Error('missing session');
    const changed = discardPracticeSession(actual, activeID, at);
    return { ...archive, sessions: archive.sessions.map((item) => item.id === changed.id ? changed : item) };
  }); };
  const resumePractice = (session: PracticeSession) => { if (session.profileId !== activeID) return; setPracticeSessionID(session.id); setScreen({ name: 'practiceSession' }); };
  const currentPractice = practiceArchive?.profileId === activeID ? practiceArchive : null;
  const activePractice = currentPractice?.sessions.find((session) => !session.completedAt && !session.discardedAt);
  const viewedSession = currentPractice?.sessions.find((session) => session.id === practiceSessionID);
  useEffect(() => {
    if (screen.name !== 'practiceSession' && screen.name !== 'practicePlans') return;
    const listener = BackHandler.addEventListener('hardwareBackPress', () => { if (screen.name === 'practiceSession') setScreen({ name: 'world' }); else setScreen({ name: 'parents' }); return true; });
    return () => listener.remove();
  }, [screen.name]);

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
    if (stage > 2 && !appState.premiumUnlocked) {
      requestGate('premium');
      return;
    }
    if (activeProfile && isStageNextInSequence(activeProfile.progress[categoryId], stage)) {
      setScreen({ name: 'game', categoryId, stage });
    }
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
            [categoryId]: completeStageProgress(previous, stage),
          },
        };
      }),
    }));
  };

  if (!hydrated) return <View style={styles.loading} />;
  if (legacyReadError) return <SafeAreaView style={styles.safeArea}><View style={styles.storageNotice}><Text style={styles.storageText}>{p.originalError}</Text><Pressable accessibilityRole="button" onPress={() => setLoadAttempt((value) => value + 1)} style={styles.retry}><Text>{p.retry}</Text></Pressable></View></SafeAreaView>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={[styles.appFrame, { maxWidth: Math.min(900, window.width - insets.left - insets.right) }]}>
        {legacyWriteError && <View style={styles.storageNotice}><Text style={styles.storageText}>{p.originalError}</Text><Pressable accessibilityRole="button" style={styles.retry} onPress={() => setWriteAttempt((value) => value + 1)}><Text>{p.retry}</Text></Pressable></View>}
        <View pointerEvents={legacyWriteError ? 'none' : 'auto'} style={styles.flex}>
        {screen.name === 'setup' && <ProfileSetupScreen language={appState.language} mode={screen.mode} onCancel={screen.mode === 'add' ? () => setScreen({ name: 'parents' }) : undefined} onSave={createProfile} />}
        {screen.name === 'profiles' && <ProfilePickerScreen language={appState.language} profiles={appState.profiles} onSelect={selectProfile} onAdd={() => requestGate('addProfile')} />}
        {screen.name === 'world' && activeProfile && <WorldScreen language={appState.language} profile={activeProfile} premiumUnlocked={appState.premiumUnlocked} onLanguageChange={setLanguage} onCategoryPress={(categoryId) => setScreen({ name: 'stages', categoryId })} onParentsPress={() => requestGate('parents')} onProfilePress={() => setScreen({ name: 'profiles' })} onPracticeContinue={activePractice ? () => resumePractice(activePractice) : undefined} />}
        {screen.name === 'stages' && activeProfile && <StagesScreen focusStage={screen.focusStage} category={categoryById(screen.categoryId)} language={appState.language} progress={activeProfile.progress[screen.categoryId]} premiumUnlocked={appState.premiumUnlocked} onBack={() => setScreen({ name: 'world' })} onStage={(stage) => requestStage(screen.categoryId, stage)} />}
        {screen.name === 'game' && activeProfile && <GameScreen key={`${activeProfile.id}:${screen.categoryId}:${screen.stage}`} onNextStage={() => requestStage(screen.categoryId, screen.stage + 1)} category={categoryById(screen.categoryId)} stage={screen.stage} language={appState.language} ageGroup={activeProfile.ageGroup} onBack={() => setScreen({ name: 'stages', categoryId: screen.categoryId, focusStage: screen.stage })} onCompleted={(answered) => completeStage(screen.categoryId, screen.stage, answered)} />}
        {screen.name === 'parents' && activeProfile && <ParentsScreen language={appState.language} progress={activeProfile.progress} profiles={appState.profiles} activeProfileId={activeProfile.id} premiumUnlocked={appState.premiumUnlocked} onBack={() => setScreen({ name: 'world' })} onAddProfile={() => setScreen({ name: 'setup', mode: 'add' })} onSwitchProfile={() => setScreen({ name: 'profiles' })} onPremium={() => !appState.premiumUnlocked && setScreen({ name: 'premium' })} onPractice={() => setScreen({ name: 'practicePlans' })} />}
        {screen.name === 'practicePlans' && activeProfile && <PracticePlanScreen key={activeProfile.id} profile={activeProfile} language={appState.language} premium={appState.premiumUnlocked} archive={currentPractice} error={practiceError} busy={practiceBusy} onRetry={() => setPracticeAttempt((value) => value + 1)} onBack={() => setScreen({ name: 'parents' })} onSave={savePracticePlan} onStart={startPractice} onContinue={resumePractice} onDiscard={discardPractice} />}
        {screen.name === 'practiceSession' && !viewedSession && <View style={styles.storageNotice}>
          <Text accessibilityRole={practiceError ? 'alert' : 'text'} style={styles.storageText}>{practiceError ?? p.loading}</Text>
          {practiceError && <Pressable accessibilityRole="button" style={styles.retry} onPress={() => setPracticeAttempt((value) => value + 1)}><Text>{p.retry}</Text></Pressable>}
          <Pressable accessibilityRole="button" style={styles.retry} onPress={() => setScreen({ name: 'world' })}><Text>{p.world}</Text></Pressable>
        </View>}
        {screen.name === 'practiceSession' && activeProfile && viewedSession && <PracticeSessionScreen key={`${activeProfile.id}:${viewedSession.id}`} profile={activeProfile} language={appState.language} premium={appState.premiumUnlocked} session={viewedSession} busy={practiceBusy} error={practiceError} onBack={() => setScreen({ name: 'world' })} onAnswer={answerPractice} onRetry={() => setPracticeAttempt((value) => value + 1)} />}
        {screen.name === 'premium' && <PremiumScreen language={appState.language} store={premiumStore} onBack={() => setScreen({ name: 'parents' })} onUnlocked={() => setScreen({ name: 'parents' })} />}
        </View>
      </View>
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
  safeArea: {
    flex: 1,
    backgroundColor: colors.cream,

  },
  flex: { flex: 1 }, storageNotice: { padding: 20, gap: 14, backgroundColor: '#FFF1D9' }, storageText: { color: colors.ink, fontSize: 16, lineHeight: 23 }, retry: { minHeight: 48, padding: 14, borderWidth: 1, borderColor: colors.teal, borderRadius: 14, justifyContent: 'center' },
  appFrame: { flex: 1, width: '100%', maxWidth: 900, alignSelf: 'center' },
  loading: { flex: 1, backgroundColor: colors.cream },
});
