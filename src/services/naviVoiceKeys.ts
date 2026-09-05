export type QuestionVoicePart = 'prompt' | 'success' | 'hint';

export const questionVoiceKey = (questionId: string, part: QuestionVoicePart) =>
  `question.${questionId}.${part}`;

export const commonVoiceKey = {
  wrong: 'common.wrong',
} as const;
