import { QUESTIONS_PER_STAGE, STAGES_PER_CATEGORY } from '../config/learning';
import { CategoryProgress, Progress } from '../types';

type StoredCategoryProgress = Partial<CategoryProgress> & Pick<CategoryProgress, 'completedQuestions' | 'stars'>;

const validStage = (stage: number) => Number.isInteger(stage) && stage >= 1 && stage <= STAGES_PER_CATEGORY;

export const normalizeCategoryProgress = (progress: StoredCategoryProgress): CategoryProgress => {
  const storedStages = Array.isArray(progress.completedStages)
    ? [...new Set(progress.completedStages.filter(validStage))].sort((a, b) => a - b)
    : Array.from(
      { length: Math.min(STAGES_PER_CATEGORY, Math.floor(Math.max(0, progress.completedQuestions) / QUESTIONS_PER_STAGE)) },
      (_, index) => index + 1,
    );
  const storedStageSet = new Set(storedStages);
  const completedStages: number[] = [];
  for (let stage = 1; stage <= STAGES_PER_CATEGORY && storedStageSet.has(stage); stage += 1) {
    completedStages.push(stage);
  }

  return {
    completedStages,
    completedQuestions: completedStages.length * QUESTIONS_PER_STAGE,
    stars: completedStages.length * 3,
  };
};

export const normalizeProgress = (progress: Progress): Progress => ({
  shapes: normalizeCategoryProgress(progress.shapes ?? { completedQuestions: 0, stars: 0, completedStages: [] }),
  numbers: normalizeCategoryProgress(progress.numbers),
  colors: normalizeCategoryProgress(progress.colors),
  animals: normalizeCategoryProgress(progress.animals),
  letters: normalizeCategoryProgress(progress.letters),
  words: normalizeCategoryProgress(progress.words),
});

export const isStageCompleted = (progress: CategoryProgress, stage: number) =>
  normalizeCategoryProgress(progress).completedStages.includes(stage);

export const isStageNextInSequence = (progress: CategoryProgress, stage: number) =>
  validStage(stage) && normalizeCategoryProgress(progress).completedStages.length >= stage - 1;

export const completeStageProgress = (progress: CategoryProgress, stage: number): CategoryProgress => {
  const normalized = normalizeCategoryProgress(progress);
  if (!validStage(stage) || !isStageNextInSequence(normalized, stage)) return normalized;
  return normalizeCategoryProgress({
    ...normalized,
    completedStages: [...normalized.completedStages, stage],
  });
};

export const createEmptyProgress = (): Progress => ({
  shapes: { completedQuestions: 0, stars: 0, completedStages: [] },
  numbers: { completedQuestions: 0, stars: 0, completedStages: [] },
  colors: { completedQuestions: 0, stars: 0, completedStages: [] },
  animals: { completedQuestions: 0, stars: 0, completedStages: [] },
  letters: { completedQuestions: 0, stars: 0, completedStages: [] },
  words: { completedQuestions: 0, stars: 0, completedStages: [] },
});

export const countStars = (progress: Progress) =>
  Object.values(progress).reduce((sum, item) => sum + item.stars, 0);

export const countCompletedQuestions = (progress: Progress) =>
  Object.values(progress).reduce((sum, item) => sum + item.completedQuestions, 0);
