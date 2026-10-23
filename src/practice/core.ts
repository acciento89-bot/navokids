import type { ChildProfile, AgeGroup, CategoryId, LearningCategory } from '../types';
import { FREE_STAGES_PER_CATEGORY, QUESTIONS_PER_STAGE, STAGES_PER_CATEGORY } from '../config/learning.ts';

export type Selection = { categoryId: CategoryId; stage: number };
export type PracticePlan = { id: string; profileId: string; title: string; ageGroup: AgeGroup; selections: Selection[]; createdAt: string; updatedAt: string };
export type PracticeQuestion = Selection & { questionId: string; contentSignature: string };
export type PracticeAnswer = { questionId: string; wrongAttempts: number; completedAt: string | null; lastAttemptId: string; lastAnswerId: string; lastExpectedRevision: number };
export type PracticeSession = { id: string; profileId: string; planId: string; planTitle: string; ageGroup: AgeGroup; startedAt: string; updatedAt: string; revision: number; questions: PracticeQuestion[]; answers: PracticeAnswer[]; completedAt: string | null; discardedAt: string | null };
export type PracticeArchive = { schemaVersion: 1; profileId: string; revision: number; plans: PracticePlan[]; sessions: PracticeSession[] };
export type AnswerCommand = { sessionId: string; profileId: string; questionId: string; expectedRevision: number; attemptId: string; answerId: string };
export const MAX_PRACTICE_BYTES = 2_000_000;
export class PracticeError extends Error {
  readonly code: 'invalid' | 'unavailable' | 'identity' | 'conflict' | 'capacity' | 'corrupt' | 'future' | 'uncertain';
  constructor(code: PracticeError['code']) { super(code); this.name = 'PracticeError'; this.code = code; }
}
function ensure(value: unknown, code: PracticeError['code'] = 'invalid'): asserts value { if (!value) throw new PracticeError(code); }
function object(value: unknown): value is Record<string, unknown> { return !!value && typeof value === 'object' && !Array.isArray(value); }
function keys(value: Record<string, unknown>, expected: string[]) { ensure(Object.keys(value).length === expected.length && expected.every((key) => Object.prototype.hasOwnProperty.call(value, key)), 'corrupt'); }
export function validPracticeID(value: unknown): asserts value is string { ensure(typeof value === 'string' && /^[a-zA-Z0-9_-]{3,120}$/.test(value), 'identity'); }
function title(value: unknown): asserts value is string { ensure(typeof value === 'string' && value.trim().length > 0 && value.length <= 80); }
function age(value: unknown): asserts value is AgeGroup { ensure(value === 'discoverer' || value === 'adventurer'); }
function count(value: unknown): asserts value is number { ensure(typeof value === 'number' && Number.isSafeInteger(value) && value >= 0); }
function timestamp(value: unknown): asserts value is string { ensure(typeof value === 'string' && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString() === value); }
const categoryIDs: CategoryId[] = ['numbers', 'colors', 'animals', 'letters', 'words', 'shapes', 'nature', 'time'];
function selection(value: unknown): asserts value is Selection {
  ensure(object(value)); keys(value, ['categoryId', 'stage']);
  ensure(categoryIDs.includes(value.categoryId as CategoryId) && typeof value.stage === 'number' && Number.isInteger(value.stage) && value.stage >= 1 && value.stage <= STAGES_PER_CATEGORY);
}
function eligible(profile: ChildProfile, choice: Selection, catalog: readonly LearningCategory[], premium: boolean) {
  validPracticeID(profile.id); age(profile.ageGroup); selection(choice);
  const category = catalog.find((item) => item.id === choice.categoryId);
  ensure(category, 'unavailable');
  const progress = profile.progress[choice.categoryId];
  ensure(progress && Array.isArray(progress.completedStages), 'unavailable');
  for (let stage = 1; stage < choice.stage; stage++) ensure(progress.completedStages.includes(stage), 'unavailable');
  ensure(choice.stage <= FREE_STAGES_PER_CATEGORY || premium, 'unavailable');
  const questions = category.questionsByAge[profile.ageGroup].slice((choice.stage - 1) * QUESTIONS_PER_STAGE, choice.stage * QUESTIONS_PER_STAGE);
  ensure(questions.length === QUESTIONS_PER_STAGE, 'unavailable');
  return questions;
}
function validatePlan(value: unknown): asserts value is PracticePlan {
  ensure(object(value)); keys(value, ['id', 'profileId', 'title', 'ageGroup', 'selections', 'createdAt', 'updatedAt']);
  validPracticeID(value.id); validPracticeID(value.profileId); title(value.title); age(value.ageGroup); timestamp(value.createdAt); timestamp(value.updatedAt); ensure(value.updatedAt >= value.createdAt);
  ensure(Array.isArray(value.selections) && value.selections.length >= 1 && value.selections.length <= 4);
  value.selections.forEach(selection);
  ensure(new Set(value.selections.map((item) => `${item.categoryId}:${item.stage}`)).size === value.selections.length);
}
export function createPracticePlan(profile: ChildProfile, input: { id: string; title: string; selections: Selection[] }, catalog: readonly LearningCategory[], at: string, premium: boolean): PracticePlan {
  timestamp(at); title(input.title);
  const plan: PracticePlan = { id: input.id, profileId: profile.id, title: input.title.trim(), ageGroup: profile.ageGroup, selections: input.selections.map((item) => ({ ...item })), createdAt: at, updatedAt: at };
  validatePlan(plan); plan.selections.forEach((choice) => eligible(profile, choice, catalog, premium)); return plan;
}
function validateSession(value: unknown): asserts value is PracticeSession {
  ensure(object(value)); keys(value, ['id', 'profileId', 'planId', 'planTitle', 'ageGroup', 'startedAt', 'updatedAt', 'revision', 'questions', 'answers', 'completedAt', 'discardedAt']);
  validPracticeID(value.id); validPracticeID(value.profileId); validPracticeID(value.planId); title(value.planTitle); age(value.ageGroup); timestamp(value.startedAt); timestamp(value.updatedAt); count(value.revision); ensure(value.updatedAt >= value.startedAt);
  ensure(Array.isArray(value.questions) && value.questions.length >= QUESTIONS_PER_STAGE && value.questions.length <= 4 * QUESTIONS_PER_STAGE && value.questions.length % QUESTIONS_PER_STAGE === 0);
  for (const raw of value.questions) {
    ensure(object(raw)); keys(raw, ['categoryId', 'stage', 'questionId', 'contentSignature']);
    ensure(typeof raw.contentSignature === 'string' && raw.contentSignature.length > 0 && raw.contentSignature.length <= 20000);
    selection({ categoryId: raw.categoryId, stage: raw.stage }); validPracticeID(raw.questionId);
  }
  ensure(new Set(value.questions.map((item) => item.questionId)).size === value.questions.length);
  ensure(Array.isArray(value.answers) && value.answers.length <= value.questions.length);
  let lastTime = value.startedAt;
  for (let index = 0; index < value.answers.length; index++) {
    const answer: unknown = value.answers[index]; ensure(object(answer)); keys(answer, ['questionId', 'wrongAttempts', 'completedAt', 'lastAttemptId', 'lastAnswerId', 'lastExpectedRevision']);
    ensure(answer.questionId === value.questions[index]?.questionId); count(answer.wrongAttempts); validPracticeID(answer.lastAttemptId);
    ensure(typeof answer.lastAnswerId === 'string' && answer.lastAnswerId.length > 0 && answer.lastAnswerId.length <= 200); count(answer.lastExpectedRevision); ensure(answer.lastExpectedRevision < value.revision);
    if (answer.completedAt === null) ensure(index === value.answers.length - 1 && answer.wrongAttempts > 0);
    else { timestamp(answer.completedAt); ensure(answer.completedAt >= lastTime && answer.completedAt <= value.updatedAt); lastTime = answer.completedAt; }
  }
  const completed = value.answers.length === value.questions.length && value.answers.every((item) => item.completedAt !== null);
  if (completed) { timestamp(value.completedAt); ensure(value.completedAt === lastTime && value.discardedAt === null); }
  else ensure(value.completedAt === null);
  if (value.discardedAt !== null) { timestamp(value.discardedAt); ensure(value.discardedAt === value.updatedAt && value.discardedAt >= value.startedAt && !completed); }
  ensure(new Set(value.answers.map((item) => item.lastAttemptId)).size === value.answers.length);
}
export function startPracticeSession(profile: ChildProfile, plan: PracticePlan, catalog: readonly LearningCategory[], at: string, premium: boolean, id: string): PracticeSession {
  validatePlan(plan); timestamp(at); ensure(profile.id === plan.profileId && profile.ageGroup === plan.ageGroup, 'identity');
  const questions = plan.selections.flatMap((choice) => eligible(profile, choice, catalog, premium).map((item) => ({ ...choice, questionId: item.id, contentSignature: JSON.stringify(item) })));
  const session: PracticeSession = { id, profileId: profile.id, planId: plan.id, planTitle: plan.title, ageGroup: profile.ageGroup, startedAt: at, updatedAt: at, revision: 0, questions, answers: [], completedAt: null, discardedAt: null };
  validateSession(session); return session;
}
export function submitPracticeAnswer(session: PracticeSession, profile: ChildProfile, catalog: readonly LearningCategory[], command: AnswerCommand, at: string, premium: boolean): PracticeSession {
  validateSession(session); timestamp(at); validPracticeID(command.attemptId);
  ensure(session.profileId === profile.id && command.profileId === profile.id && session.id === command.sessionId && session.ageGroup === profile.ageGroup, 'identity');
  ensure(at >= session.updatedAt);
  const last = session.answers.at(-1);
  // Retry only an exact last command; preserve the original successful timestamp.
  if (last?.lastAttemptId === command.attemptId) {
    ensure(last.questionId === command.questionId && last.lastAnswerId === command.answerId && last.lastExpectedRevision === command.expectedRevision, 'conflict');
    return session;
  }
  ensure(session.completedAt === null && session.discardedAt === null && command.expectedRevision === session.revision, 'conflict');
  const index = session.answers.filter((item) => item.completedAt !== null).length, ref = session.questions[index]; ensure(ref && ref.questionId === command.questionId, 'conflict');
  const question = eligible(profile, { categoryId: ref.categoryId, stage: ref.stage }, catalog, premium).find((item) => item.id === ref.questionId); ensure(question && JSON.stringify(question) === ref.contentSignature, 'unavailable');
  ensure(question.answers.some((answer) => answer.id === command.answerId));
  const correct = command.answerId === question.correctAnswerId, previous = session.answers[index];
  const answer: PracticeAnswer = { questionId: ref.questionId, wrongAttempts: (previous?.wrongAttempts ?? 0) + (correct ? 0 : 1), completedAt: correct ? at : null, lastAttemptId: command.attemptId, lastAnswerId: command.answerId, lastExpectedRevision: session.revision };
  const next: PracticeSession = { ...session, revision: session.revision + 1, updatedAt: at, answers: [...session.answers.slice(0, index), answer], completedAt: correct && index === session.questions.length - 1 ? at : null };
  validateSession(next); return next;
}
export function discardPracticeSession(session: PracticeSession, profileId: string, at: string): PracticeSession {
  validateSession(session); timestamp(at); ensure(session.profileId === profileId, 'identity'); ensure(!session.completedAt && !session.discardedAt && at >= session.updatedAt);
  const next = { ...session, discardedAt: at, updatedAt: at, revision: session.revision + 1 }; validateSession(next); return next;
}
export function practiceRecap(sessions: readonly PracticeSession[], expectedProfileId: string) {
  validPracticeID(expectedProfileId);
  let completedSessions = 0, completedQuestions = 0, firstTry = 0, withHelp = 0;
  const dayCounts = new Map<string, number>(), categories: Partial<Record<CategoryId, number>> = {};
  for (const session of sessions) {
    validateSession(session); ensure(session.profileId === expectedProfileId, 'identity'); if (session.completedAt) completedSessions++;
    session.answers.forEach((answer, index) => {
      if (!answer.completedAt) return;
      const ref = session.questions[index]; ensure(ref);
      completedQuestions++; if (answer.wrongAttempts === 0) firstTry++; else withHelp++;
      const day = answer.completedAt.slice(0, 10); dayCounts.set(day, (dayCounts.get(day) ?? 0) + 1); categories[ref.categoryId] = (categories[ref.categoryId] ?? 0) + 1;
    });
  }
  return { completedSessions, completedQuestions, firstTry, withHelp, days: [...dayCounts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([date, count]) => ({ date, completedQuestions: count })), categories };
}
export function validatePracticeArchive(value: unknown, expectedProfileId: string): asserts value is PracticeArchive {
  ensure(object(value), 'corrupt'); keys(value, ['schemaVersion', 'profileId', 'revision', 'plans', 'sessions']); ensure(value.schemaVersion === 1, 'future');
  validPracticeID(value.profileId); ensure(value.profileId === expectedProfileId, 'identity'); count(value.revision);
  ensure(Array.isArray(value.plans) && value.plans.length <= 20 && Array.isArray(value.sessions) && value.sessions.length <= 100, 'capacity');
  value.plans.forEach(validatePlan); value.sessions.forEach(validateSession);
  ensure(value.plans.every((plan) => plan.profileId === expectedProfileId) && value.sessions.every((session) => session.profileId === expectedProfileId), 'identity');
  ensure(new Set(value.plans.map((item) => item.id)).size === value.plans.length && new Set(value.sessions.map((item) => item.id)).size === value.sessions.length, 'corrupt');
  ensure(value.sessions.filter((session) => !session.completedAt && !session.discardedAt).length <= 1, 'conflict');
}
export function practiceBytes(raw: string): number { let bytes = 0; for (const char of raw) { const value = char.codePointAt(0)!; bytes += value <= 127 ? 1 : value <= 2047 ? 2 : value <= 65535 ? 3 : 4; } return bytes; }
export function encodePracticeArchive(value: PracticeArchive): string { validatePracticeArchive(value, value.profileId); const raw = JSON.stringify(value); ensure(practiceBytes(raw) <= MAX_PRACTICE_BYTES, 'capacity'); return raw; }
export function decodePracticeArchive(raw: string, expectedProfileId: string): PracticeArchive { ensure(practiceBytes(raw) <= MAX_PRACTICE_BYTES, 'capacity'); const value: unknown = JSON.parse(raw); validatePracticeArchive(value, expectedProfileId); return value; }
