import type { AppState } from '../types';
import type { PracticeStorage } from './repository.ts';
import { PracticeError } from './core.ts';
const PRIMARY = 'navokids-state-v2', LEGACY = 'navokids-progress-v1';
function object(value: unknown): value is Record<string, unknown> { return !!value && typeof value === 'object' && !Array.isArray(value); }
function decode(raw: string): AppState {
  const value: unknown = JSON.parse(raw);
  if (!object(value) || !Array.isArray(value.profiles) || typeof value.premiumUnlocked !== 'boolean' || !['de', 'en'].includes(String(value.language)) || !(value.activeProfileId === null || typeof value.activeProfileId === 'string') || !(value.progressSchemaVersion === undefined || value.progressSchemaVersion === 2)) throw new PracticeError('corrupt');
  const ids = new Set<string>();
  for (const profile of value.profiles) {
    if (!object(profile) || typeof profile.id !== 'string' || !profile.id || ids.has(profile.id) || typeof profile.nickname !== 'string' || typeof profile.avatar !== 'string' || !['discoverer', 'adventurer'].includes(String(profile.ageGroup)) || typeof profile.createdAt !== 'string' || !object(profile.progress)) throw new PracticeError('corrupt');
    ids.add(profile.id);
    for (const category of ['numbers', 'colors', 'animals', 'letters', 'words', 'shapes', 'nature', 'time']) {
      const progress = profile.progress[category];
      if (progress === undefined && ['shapes', 'nature', 'time'].includes(category)) continue;
      if (!object(progress) || typeof progress.completedQuestions !== 'number' || !Number.isFinite(progress.completedQuestions) || progress.completedQuestions < 0 || typeof progress.stars !== 'number' || !Number.isFinite(progress.stars) || progress.stars < 0 || !(progress.completedStages === undefined || Array.isArray(progress.completedStages) && progress.completedStages.every((stage) => typeof stage === 'number' && Number.isInteger(stage) && stage >= 1 && stage <= 30))) throw new PracticeError('corrupt');
    }
  }
  return value as unknown as AppState;
}
export async function readLegacyState(storage: PracticeStorage): Promise<{ state: AppState | null; legacy: string | null }> {
  const raw = await storage.getItem(PRIMARY);
  // Malformed primary never permits migration/fallback to hide the existing bytes.
  if (raw !== null) return { state: decode(raw), legacy: null };
  return { state: null, legacy: await storage.getItem(LEGACY) };
}
let tails = new WeakMap<PracticeStorage, Promise<unknown>>();
export function writeLegacyState(storage: PracticeStorage, input: AppState): Promise<void> {
  const bytes = JSON.stringify(input); decode(bytes);
  const work = (tails.get(storage) ?? Promise.resolve()).catch(() => undefined).then(async () => {
    const existing = await storage.getItem(PRIMARY); if (existing !== null) decode(existing);
    await storage.setItem(PRIMARY, bytes);
  });
  tails.set(storage, work); return work;
}
