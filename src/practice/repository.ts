import { decodePracticeArchive, encodePracticeArchive, PracticeError, validPracticeID } from './core.ts';
import type { PracticeArchive } from './core.ts';
export interface PracticeStorage { getItem(key: string): Promise<string | null>; setItem(key: string, value: string): Promise<void> }
// Native AsyncStorage may update its cache even when the disk write rejects.
// Never treat a cached read as proof of durability after a rejected write.
const uncertain = new WeakMap<PracticeStorage, Set<string>>();
const queues = new WeakMap<PracticeStorage, Map<string, Promise<unknown>>>();
export function practiceStorageKey(profileId: string): string { validPracticeID(profileId); return `navokids-practice-v1:${profileId}`; }
export class PracticeRepository {
  private readonly storage: PracticeStorage;
  readonly profileId: string;
  constructor(storage: PracticeStorage, profileId: string) { validPracticeID(profileId); this.storage = storage; this.profileId = profileId; }
  async load(): Promise<PracticeArchive> {
    if (uncertain.get(this.storage)?.has(this.profileId)) throw new PracticeError('uncertain');
    const raw = await this.storage.getItem(practiceStorageKey(this.profileId));
    return raw === null ? { schemaVersion: 1, profileId: this.profileId, revision: 0, plans: [], sessions: [] } : decodePracticeArchive(raw, this.profileId);
  }
  save(input: PracticeArchive, expectedRevision: number): Promise<PracticeArchive> {
    // Capture a verified immutable snapshot before any asynchronous queue wait.
    const bytes = encodePracticeArchive(input), next = decodePracticeArchive(bytes, this.profileId);
    let profiles = queues.get(this.storage); if (!profiles) { profiles = new Map(); queues.set(this.storage, profiles); }
    const previous = profiles.get(this.profileId) ?? Promise.resolve();
    const work = previous.catch(() => undefined).then(async () => {
      const current = await this.load();
      if (current.revision !== expectedRevision || next.revision !== expectedRevision + 1) throw new PracticeError('conflict');
      const key = practiceStorageKey(this.profileId);
      try { await this.storage.setItem(key, bytes); }
      catch {
        let profiles = uncertain.get(this.storage);
        if (!profiles) { profiles = new Set(); uncertain.set(this.storage, profiles); }
        profiles.add(this.profileId);
        throw new PracticeError('uncertain');
      }
      if (await this.storage.getItem(key) !== bytes) {
        let profiles = uncertain.get(this.storage);
        if (!profiles) { profiles = new Set(); uncertain.set(this.storage, profiles); }
        profiles.add(this.profileId);
        throw new PracticeError('uncertain');
      }
      return next;
    });
    profiles.set(this.profileId, work); return work;
  }
}
