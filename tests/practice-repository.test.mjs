import test from 'node:test';
import assert from 'node:assert/strict';
import { PracticeRepository, practiceStorageKey } from '../src/practice/repository.ts';
import { createPracticePlan } from '../src/practice/core.ts';
import { catalog, profile, planInput, at, emptyArchive } from './support/catalog.mjs';
import { disk } from './support/disk.mjs';
const saved = () => ({ ...emptyArchive(), revision: 1, plans: [createPracticePlan(profile(), planInput(), catalog, at(), false)] });

test('real disk cold reopen preserves isolated plans and untouched original progress and other profile bytes', async () => {
  const fixture = disk();
  try {
    const { storage } = fixture, repo = new PracticeRepository(storage, 'child-qa-one');
    await storage.setItem('navokids-state-v2', '{"original":"profiles progress premium retain exact"}');
    await storage.setItem('navokids-progress-v1', '{"old":"untouched"}');
    assert.deepEqual(await repo.load(), emptyArchive());
    await repo.save(saved(), 0);
    assert.deepEqual(await new PracticeRepository(fixture.reopen(), 'child-qa-one').load(), saved());
    assert.deepEqual(await new PracticeRepository(storage, 'child-other').load(), emptyArchive('child-other'));
    assert.equal(await storage.getItem('navokids-state-v2'), '{"original":"profiles progress premium retain exact"}');
    assert.equal(await storage.getItem('navokids-progress-v1'), '{"old":"untouched"}');
  } finally { fixture.cleanup(); }
});

test('rejected replacement requires cold recovery even when the native receipt was lost', async () => {
  const fixture = disk();
  try {
    const { storage } = fixture, repo = new PracticeRepository(storage, 'child-qa-one');
    await repo.save(saved(), 0);
    const key = practiceStorageKey('child-qa-one'), previous = await storage.getItem(key);
    const next = { ...saved(), revision: 2 };
    storage.failBeforeReplace = true;
    await assert.rejects(repo.save(next, 1), (cause) => cause.code === 'uncertain');
    assert.equal(await storage.getItem(key), previous);
    await assert.rejects(repo.load(), (cause) => cause.code === 'uncertain');
    const reopened = fixture.reopen(), cold = new PracticeRepository(reopened, 'child-qa-one');
    assert.deepEqual(await cold.load(), saved());
    storage.failBeforeReplace = false; storage.failAfterReplace = true;
    await assert.rejects(cold.save(next, 1), (cause) => cause.code === 'uncertain');
    await assert.rejects(cold.load(), (cause) => cause.code === 'uncertain');
    assert.deepEqual(await new PracticeRepository(fixture.reopen(), 'child-qa-one').load(), next);
  } finally { fixture.cleanup(); }
});

test('corrupt future trailing foreign external replacement after load is never overwritten by save', async () => {
  const fixture = disk();
  try {
    const repo = new PracticeRepository(fixture.storage, 'child-qa-one'), key = practiceStorageKey('child-qa-one');
    await repo.save(saved(), 0); assert.deepEqual(await repo.load(), saved());
    for (const bytes of ['{broken', JSON.stringify({ ...saved(), schemaVersion: 9 }), JSON.stringify(saved()) + ' trailing', JSON.stringify({ ...saved(), profileId: 'child-other' })]) {
      fixture.replace(key, bytes);
      await assert.rejects(repo.load()); await assert.rejects(repo.save({ ...saved(), revision: 2 }, 1));
      assert.equal(await fixture.storage.getItem(key), bytes);
    }
  } finally { fixture.cleanup(); }
});

test('shared profile queue rejects a stale concurrent save rather than replacing a newer plan', async () => {
  const fixture = disk();
  try {
    const first = new PracticeRepository(fixture.storage, 'child-qa-one'), second = new PracticeRepository(fixture.storage, 'child-qa-one');
    const one = saved(), two = { ...saved(), plans: [{ ...saved().plans[0], title: 'Different stale title' }] };
    const results = await Promise.allSettled([first.save(one, 0), second.save(two, 0)]);
    assert.equal(results.filter((result) => result.status === 'fulfilled').length, 1);
    assert.deepEqual(await first.load(), one);
  } finally { fixture.cleanup(); }
});

test('native-style cache after failed disk write never counts as success and requires cold recovery', async () => {
  const fixture = disk();
  try {
    const durable = fixture.storage, cache = new Map();
    let fail = false;
    const nativeCached = {
      async getItem(key) { return cache.has(key) ? cache.get(key) : durable.getItem(key); },
      async setItem(key, value) { cache.set(key, value); if (fail) throw Error('native disk write failed after cache update'); await durable.setItem(key, value); },
    };
    const repo = new PracticeRepository(nativeCached, 'child-qa-one');
    await repo.save(saved(), 0); fail = true;
    const next = { ...saved(), revision: 2 };
    await assert.rejects(repo.save(next, 1), (cause) => cause.code === 'uncertain');
    assert.deepEqual(JSON.parse(await durable.getItem(practiceStorageKey('child-qa-one'))), saved());
    await assert.rejects(repo.load(), (cause) => cause.code === 'uncertain');
    await assert.rejects(new PracticeRepository(nativeCached, 'child-qa-one').load(), (cause) => cause.code === 'uncertain');
    await assert.rejects(repo.save(next, 1), (cause) => cause.code === 'uncertain');
    const cold = new PracticeRepository(fixture.reopen(), 'child-qa-one');
    assert.deepEqual(await cold.load(), saved());
    await cold.save(next, 1); assert.deepEqual(await cold.load(), next);
  } finally { fixture.cleanup(); }
});
