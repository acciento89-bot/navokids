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
  label: string | LocalizedText;
  color?: string;
}

export interface Question {
  id: string;
  prompt: LocalizedText;
  visual: string;
  showNavi?: boolean;
  conceptKey?: string;
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
  questionsByAge: Record<AgeGroup, Question[]>;
}

export interface CategoryProgress {
  completedQuestions: number;
  stars: number;
  completedStages: number[];
}

export type Progress = Record<CategoryId, CategoryProgress>;

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
  reviewAccessGranted?: boolean;
  premiumLastVerifiedAt?: string;
  progressSchemaVersion?: 2;
  language: Language;
}
