import test from 'node:test';
import assert from 'node:assert/strict';
import { createPracticePlan, startPracticeSession, submitPracticeAnswer, practiceRecap, discardPracticeSession, encodePracticeArchive, decodePracticeArchive } from '../src/practice/core.ts';
import { catalog, profile, planInput, at, question, command, emptyArchive } from './support/catalog.mjs';

test('actual eight-island catalog builds ordered age-specific reusable mix without legacy progress changes', () => {
  assert.equal(catalog.length, 8);
  for (const category of catalog) for (const age of ['discoverer', 'adventurer']) assert.equal(category.questionsByAge[age].length, 90);
  const child = profile(); const before = JSON.stringify(child);
  const plan = createPracticePlan(child, planInput(), catalog, at(), false);
  const session = startPracticeSession(child, plan, catalog, at(), false, 'session-qa-one');
  assert.equal(session.profileId, child.id); assert.equal(session.ageGroup, 'discoverer');
  assert.equal(session.questions.length, 6);
  assert.deepEqual(session.questions.map((ref) => ref.categoryId), ['numbers', 'numbers', 'numbers', 'colors', 'colors', 'colors']);
  assert.deepEqual(session.questions.slice(0, 3).map((ref) => ref.questionId), catalog.find((item) => item.id === 'numbers').questionsByAge.discoverer.slice(0, 3).map((item) => item.id));
  const older = profile('child-older', 'adventurer');
  const otherPlan = createPracticePlan(older, planInput('plan-older'), catalog, at(), false);
  const olderSession = startPracticeSession(older, otherPlan, catalog, at(), false, 'session-older');
  assert.deepEqual(olderSession.questions.slice(0, 3).map((ref) => ref.questionId), catalog.find((item) => item.id === 'numbers').questionsByAge.adventurer.slice(0, 3).map((item) => item.id));
  assert.equal(JSON.stringify(child), before);
});

test('curation and start both enforce stage sequence and existing free-stage premium boundaries', () => {
  const child = profile();
  const input = (stage) => ({ id: 'plan-stage', title: 'Practice', selections: [{ categoryId: 'numbers', stage }] });
  assert.throws(() => createPracticePlan(child, input(2), catalog, at(), false));
  assert.throws(() => createPracticePlan(child, input(30), catalog, at(), true));
  child.progress.numbers = { completedQuestions: 6, stars: 6, completedStages: [1, 2] };
  const free = createPracticePlan(child, input(2), catalog, at(), false);
  assert.equal(startPracticeSession(child, free, catalog, at(), false, 'session-free').questions.length, 3);
  assert.throws(() => createPracticePlan(child, input(3), catalog, at(), false));
  const paid = createPracticePlan(child, input(3), catalog, at(), true);
  assert.throws(() => startPracticeSession(child, paid, catalog, at(), false, 'session-revoked'));
  const session = startPracticeSession(child, paid, catalog, at(), true, 'session-paid');
  assert.throws(() => submitPracticeAnswer(session, child, catalog, command(session, question(session, 0).correctAnswerId), at(21, 1), false));
  const regressed = profile();
  assert.throws(() => startPracticeSession(regressed, paid, catalog, at(), true, 'session-jump'));
});

test('wrong answers persist help, correct answer advances once and late or foreign callbacks cannot advance', () => {
  const child = profile(), untouched = JSON.stringify(child);
  const plan = createPracticePlan(child, planInput(), catalog, at(), false);
  let session = startPracticeSession(child, plan, catalog, at(), false, 'session-answers');
  const first = question(session, 0), wrong = first.answers.find((answer) => answer.id !== first.correctAnswerId).id;
  const wrongCommand = command(session, wrong, 'attempt-wrong');
  session = submitPracticeAnswer(session, child, catalog, wrongCommand, at(21, 1), false);
  assert.equal(session.answers[0].wrongAttempts, 1); assert.equal(session.answers[0].completedAt, null);
  assert.deepEqual(submitPracticeAnswer(session, child, catalog, wrongCommand, at(21, 2), false), session);
  assert.throws(() => submitPracticeAnswer(session, child, catalog, { ...wrongCommand, answerId: first.correctAnswerId }, at(21, 2), false));
  const correctCommand = command(session, first.correctAnswerId, 'attempt-correct');
  const before = JSON.stringify(session);
  const advanced = submitPracticeAnswer(session, child, catalog, correctCommand, at(21, 3), false);
  assert.equal(JSON.stringify(session), before); assert.equal(advanced.answers[0].wrongAttempts, 1); assert.equal(advanced.answers[0].completedAt, at(21, 3));
  assert.deepEqual(submitPracticeAnswer(advanced, child, catalog, correctCommand, at(21, 4), false), advanced);
  for (const stale of [{ ...correctCommand, attemptId: 'stale-other' }, { ...command(advanced, question(advanced, 1).correctAnswerId), profileId: 'child-other' }, { ...command(advanced, question(advanced, 1).correctAnswerId), sessionId: 'session-other' }, { ...command(advanced, question(advanced, 1).correctAnswerId), answerId: 'not-an-answer' }]) assert.throws(() => submitPracticeAnswer(advanced, child, catalog, stale, at(21, 4), false));
  assert.throws(() => submitPracticeAnswer(advanced, profile('child-other'), catalog, command(advanced, question(advanced, 1).correctAnswerId), at(21, 4), false));
  assert.throws(() => submitPracticeAnswer(advanced, { ...child, ageGroup: 'adventurer' }, catalog, command(advanced, question(advanced, 1).correctAnswerId), at(21, 4), false));
  const revisedCatalog = structuredClone(catalog); revisedCatalog.find((item) => item.id === advanced.questions[1].categoryId).questionsByAge[advanced.ageGroup].find((item) => item.id === advanced.questions[1].questionId).prompt.de += ' changed';
  assert.throws(() => submitPracticeAnswer(advanced, child, revisedCatalog, command(advanced, question(advanced, 1).correctAnswerId), at(21, 4), false));
  assert.equal(JSON.stringify(child), untouched);
});

function finish(child, plan, day, id, withHelp = false) {
  let session = startPracticeSession(child, plan, catalog, at(day), false, id);
  let second = 1;
  if (withHelp) { const first = question(session, 0); session = submitPracticeAnswer(session, child, catalog, command(session, first.answers.find((a) => a.id !== first.correctAnswerId).id), at(day, second++), false); }
  while (!session.completedAt) {
    const index = session.answers.filter((answer) => answer.completedAt !== null).length;
    session = submitPracticeAnswer(session, child, catalog, command(session, question(session, index).correctAnswerId), at(day, second++), false);
  }
  return session;
}
test('multi-day recap counts observed first-try and helped practice, not old stars or fabricated mastery', () => {
  const child = profile(), plan = createPracticePlan(child, planInput(), catalog, at(), false);
  const first = finish(child, plan, 21, 'session-day-one', true), second = finish(child, plan, 22, 'session-day-two');
  const recap = practiceRecap([first, second], child.id);
  assert.equal(recap.completedSessions, 2); assert.equal(recap.completedQuestions, 12); assert.equal(recap.firstTry, 11); assert.equal(recap.withHelp, 1);
  assert.deepEqual(recap.days.map((day) => [day.date, day.completedQuestions]), [['2026-10-21', 6], ['2026-10-22', 6]]);
  assert.equal(recap.categories.numbers, 6); assert.equal(recap.categories.colors, 6);
  assert.equal(child.progress.numbers.completedQuestions, 0); assert.equal(child.progress.numbers.stars, 0);
  assert.throws(() => practiceRecap([first, { ...second, profileId: 'child-other' }], child.id));
});

test('archive rejects future malformed duplicate and foreign data; plans reject invalid selections and names', () => {
  const child = profile(), plan = createPracticePlan(child, planInput(), catalog, at(), false);
  const archive = { ...emptyArchive(), revision: 1, plans: [plan], sessions: [finish(child, plan, 21, 'session-roundtrip')] };
  const bytes = encodePracticeArchive(archive);
  assert.deepEqual(decodePracticeArchive(bytes, child.id), archive);
  for (const bad of [{ ...archive, schemaVersion: 2 }, { ...archive, profileId: 'child-other' }, { ...archive, plans: [plan, plan] }, { ...archive, sessions: [archive.sessions[0], archive.sessions[0]] }, { ...archive, sessions: [{ ...archive.sessions[0], profileId: 'child-other' }] }, { ...archive, plans: Array(21).fill(plan) }]) assert.throws(() => decodePracticeArchive(JSON.stringify(bad), child.id));
  for (const raw of ['{bad', bytes + ' trailing', JSON.stringify({ ...archive, extraFutureData: true })]) assert.throws(() => decodePracticeArchive(raw, child.id));
  for (const input of [{ ...planInput(), title: ' ' }, { ...planInput(), selections: [] }, { ...planInput(), selections: Array(5).fill({ categoryId: 'numbers', stage: 1 }) }, { ...planInput(), selections: [{ categoryId: 'unknown', stage: 1 }] }, { ...planInput(), selections: [{ categoryId: 'numbers', stage: 1.5 }] }]) assert.throws(() => createPracticePlan(child, input, catalog, at(), false));
});

// Abandonment is explicit parent action; it retains the unfinished session and cannot create false completion.
test('explicit discard retains answers and archive rejects two active sessions for the same profile', () => {
  const child = profile(), plan = createPracticePlan(child, planInput(), catalog, at(), false);
  const first = startPracticeSession(child, plan, catalog, at(), false, 'session-abandon-one');
  const second = startPracticeSession(child, plan, catalog, at(), false, 'session-abandon-two');
  assert.throws(() => encodePracticeArchive({ ...emptyArchive(), revision: 1, plans: [plan], sessions: [first, second] }));
  const discarded = discardPracticeSession(first, child.id, at(21, 1));
  assert.equal(discarded.discardedAt, at(21, 1)); assert.equal(discarded.completedAt, null);
  assert.equal(practiceRecap([discarded], child.id).completedQuestions, 0);
  assert.throws(() => submitPracticeAnswer(discarded, child, catalog, command(discarded, question(discarded, 0).correctAnswerId), at(21, 2), false));
  assert.doesNotThrow(() => encodePracticeArchive({ ...emptyArchive(), revision: 1, plans: [plan], sessions: [discarded, second] }));
});
