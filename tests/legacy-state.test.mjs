import test from 'node:test';
import assert from 'node:assert/strict';
import { readLegacyState, writeLegacyState } from '../src/practice/legacyStateGuard.ts';
import { profile, at } from './support/catalog.mjs';
import { disk } from './support/disk.mjs';
const original = () => ({ profiles: [profile()], activeProfileId: 'child-qa-one', premiumUnlocked: true, premiumLastVerifiedAt: at(), progressSchemaVersion: 2, language: 'en' });

test('existing primary profiles progress language and premium roundtrip exactly; legacy bytes are never changed', async () => {
  const fixture = disk();
  try {
    const state = original(); state.profiles[0].progress.numbers = { completedQuestions: 3, stars: 3, completedStages: [1] };
    const bytes = JSON.stringify(state);
    await fixture.storage.setItem('navokids-state-v2', bytes); await fixture.storage.setItem('navokids-progress-v1', 'legacy retain exact bytes');
    assert.deepEqual((await readLegacyState(fixture.storage)).state, state);
    await writeLegacyState(fixture.storage, state);
    assert.equal(await fixture.storage.getItem('navokids-state-v2'), bytes);
    assert.equal(await fixture.storage.getItem('navokids-progress-v1'), 'legacy retain exact bytes');
  } finally { fixture.cleanup(); }
});

test('malformed primary never falls back to legacy or permits empty initial-state overwrite', async () => {
  const fixture = disk();
  try {
    await fixture.storage.setItem('navokids-progress-v1', 'old legacy untouched');
    for (const bytes of ['{broken', '{"profiles":"wrong"}', JSON.stringify({ ...original(), profiles: [{ ...profile(), ageGroup: 'future-mode' }] })]) {
      fixture.replace('navokids-state-v2', bytes);
      await assert.rejects(readLegacyState(fixture.storage));
      await assert.rejects(writeLegacyState(fixture.storage, { profiles: [], activeProfileId: null, premiumUnlocked: false, language: 'de', progressSchemaVersion: 2 }));
      assert.equal(await fixture.storage.getItem('navokids-state-v2'), bytes);
      assert.equal(await fixture.storage.getItem('navokids-progress-v1'), 'old legacy untouched');
    }
  } finally { fixture.cleanup(); }
});

test('external legacy-state corruption after a successful load blocks later autosave without byte replacement', async () => {
  const fixture = disk();
  try {
    await fixture.storage.setItem('navokids-state-v2', JSON.stringify(original())); await readLegacyState(fixture.storage);
    fixture.replace('navokids-state-v2', '{externally broken');
    await assert.rejects(writeLegacyState(fixture.storage, original()));
    assert.equal(await fixture.storage.getItem('navokids-state-v2'), '{externally broken');
  } finally { fixture.cleanup(); }
});
