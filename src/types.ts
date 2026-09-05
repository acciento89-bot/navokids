export type Language = 'de' | 'en';

export type CategoryId = 'numbers' | 'colors' | 'animals' | 'letters' | 'words';

export type Screen =
  | { name: 'setup'; mode: 'first' | 'add' }
  | { name: 'profiles' }
  | { name: 'world' }
  | { name: 'stages'; categoryId: CategoryId }
  | { name: 'game'; categoryId: CategoryId; stage: number }
  | { name: 'parents' }
  | { name: 'premium' };

export interface LocalizedText {
  de: string;
  en: string;
}

export interface Answer {
  id: string;
  label: string;
  color?: string;
}

export interface Question {
  id: string;
  prompt: LocalizedText;
  visual: string;
  answers: Answer[];
  correctAnswerId: string;
  success: LocalizedText;
  hint: LocalizedText;
}

export interface LearningCategory {
  id: CategoryId;
  title: LocalizedText;
  subtitle: LocalizedText;
  icon: string;
  color: string;
  lightColor: string;
  questions: Question[];
}

export type Progress = Record<CategoryId, { completedQuestions: number; stars: number }>;

export type AgeGroup = 'discoverer' | 'adventurer';

export interface ChildProfile {
  id: string;
  nickname: string;
  avatar: string;
  ageGroup: AgeGroup;
  progress: Progress;
  createdAt: string;
}

export interface AppState {
  profiles: ChildProfile[];
  activeProfileId: string | null;
  premiumUnlocked: boolean;
  language: Language;
}
