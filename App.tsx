import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { ParentGate } from './src/components/ParentGate';
import { categoryById } from './src/data/learningContent';
import { GameScreen } from './src/screens/GameScreen';
import { ParentsScreen } from './src/screens/ParentsScreen';
import { StagesScreen } from './src/screens/StagesScreen';
import { WorldScreen } from './src/screens/WorldScreen';
import { colors } from './src/theme';
import { CategoryId, Language, Progress, Screen } from './src/types';

const STORAGE_KEY = 'navokids-progress-v1';
const initialProgress: Progress = {
  numbers: { completedQuestions: 0, stars: 0 },
  colors: { completedQuestions: 0, stars: 0 },
  animals: { completedQuestions: 0, stars: 0 },
  letters: { completedQuestions: 0, stars: 0 },
  words: { completedQuestions: 0, stars: 0 },
};

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'world' });
  const [language, setLanguage] = useState<Language>('de');
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [gateVisible, setGateVisible] = useState(false);
  const [gateTarget, setGateTarget] = useState<'parents' | 'premium'>('parents');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value) setProgress({ ...initialProgress, ...JSON.parse(value) });
    }).catch(() => undefined);
  }, []);

  const saveProgress = (next: Progress) => {
    setProgress(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => undefined);
  };

  const requestParents = () => { setGateTarget('parents'); setGateVisible(true); };
  const requestStage = (categoryId: CategoryId, stage: number) => {
    if (stage <= 2) setScreen({ name: 'game', categoryId, stage });
    else { setGateTarget('premium'); setGateVisible(true); }
  };

  const completeStage = (categoryId: CategoryId, stage: number, answered: number) => {
    const previous = progress[categoryId];
    const completedQuestions = Math.max(previous.completedQuestions, stage * answered);
    const stars = Math.max(previous.stars, stage * 3);
    saveProgress({ ...progress, [categoryId]: { completedQuestions, stars } });
    setScreen({ name: 'stages', categoryId });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      {screen.name === 'world' && <WorldScreen language={language} progress={progress} onLanguageChange={setLanguage} onCategoryPress={(categoryId) => setScreen({ name: 'stages', categoryId })} onParentsPress={requestParents} />}
      {screen.name === 'stages' && <StagesScreen category={categoryById(screen.categoryId)} language={language} completedQuestions={progress[screen.categoryId].completedQuestions} onBack={() => setScreen({ name: 'world' })} onStage={(stage) => requestStage(screen.categoryId, stage)} />}
      {screen.name === 'game' && <GameScreen category={categoryById(screen.categoryId)} stage={screen.stage} language={language} onBack={() => setScreen({ name: 'stages', categoryId: screen.categoryId })} onCompleted={(answered) => completeStage(screen.categoryId, screen.stage, answered)} />}
      {screen.name === 'parents' && <ParentsScreen language={language} progress={progress} onBack={() => setScreen({ name: 'world' })} />}
      <ParentGate visible={gateVisible} language={language} onCancel={() => setGateVisible(false)} onSuccess={() => {
        setGateVisible(false);
        if (gateTarget === 'parents') setScreen({ name: 'parents' });
        else Alert.alert(language === 'de' ? 'NavoKids Premium' : 'NavoKids Premium', language === 'de' ? 'Die Premium-Stufen werden über den geschützten Elternkauf freigeschaltet.' : 'Premium stages are unlocked through the protected parent purchase.');
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safeArea: { flex: 1, backgroundColor: colors.cream } });
