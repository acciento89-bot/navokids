import { Progress } from '../types';

export const createEmptyProgress = (): Progress => ({
  numbers: { completedQuestions: 0, stars: 0 },
  colors: { completedQuestions: 0, stars: 0 },
  animals: { completedQuestions: 0, stars: 0 },
  letters: { completedQuestions: 0, stars: 0 },
  words: { completedQuestions: 0, stars: 0 },
});

export const countStars = (progress: Progress) =>
  Object.values(progress).reduce((sum, item) => sum + item.stars, 0);

export const countCompletedQuestions = (progress: Progress) =>
  Object.values(progress).reduce((sum, item) => sum + item.completedQuestions, 0);
