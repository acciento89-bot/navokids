import { mkdtempSync, rmSync, existsSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
export function disk() {
  const directory = mkdtempSync(join(tmpdir(), 'navokids-practice-'));
  const path = (key) => join(directory, encodeURIComponent(key));
  const storage = { failBeforeReplace: false, failAfterReplace: false,
    async getItem(key) { return existsSync(path(key)) ? readFileSync(path(key), 'utf8') : null; },
    async setItem(key, value) { const file = path(key), temporary = `${file}.pending`; writeFileSync(temporary, value); if (this.failBeforeReplace) throw Error('Synthetic full disk before atomic replacement'); renameSync(temporary, file); if (this.failAfterReplace) throw Error('Synthetic lost acknowledgement'); }
  };
  return { storage, replace: (key, value) => writeFileSync(path(key), value), reopen: () => ({ getItem: storage.getItem.bind(storage), setItem: storage.setItem.bind(storage) }), cleanup: () => rmSync(directory, { recursive: true, force: true }) };
}
