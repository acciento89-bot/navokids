const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { signature, sha256 } = require('./voice-index.cjs');
const index = JSON.parse(fs.readFileSync('src/generated/naviVoiceIndex.json', 'utf8'));
if (index.voice !== 'marin') throw new Error('Only Marin recordings are approved');
const compiled = ts.transpileModule(fs.readFileSync('src/data/learningContent.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const content = { exports: {} };
Function('module', 'exports', 'require', compiled)(content, content.exports, require);
const manifest = fs.readFileSync('src/generated/naviVoiceManifest.ts', 'utf8');
let count = 0;
for (const language of ['de', 'en']) {
  const keys = ['common.wrong'];
  const textByKey = { 'common.wrong': language === 'de' ? 'Fast! Versuch es noch einmal.' : 'Almost! Try again.' };
  for (const category of content.exports.categories) for (const questions of Object.values(category.questionsByAge)) for (const question of questions) for (const part of ['prompt', 'hint', 'success']) { const key = `question.${question.id}.${part}`; keys.push(key); textByKey[key] = question[part][language]; }
  for (const key of keys) {
    const file = `assets/audio/${language}/${key}.aac`;
    if (!fs.existsSync(file) || fs.statSync(file).size < 100) throw new Error(`Missing/empty recording: ${file}`);
    if (!manifest.includes(`"${key}": require("../../${file}")`)) throw new Error(`Recording not bundled: ${file}`);
    const entry = index.entries[`${language}/${key}`];
    if (entry?.signature !== signature(language, textByKey[key]) || entry.sha256 !== sha256(fs.readFileSync(file))) throw new Error(`Stale or changed recording: ${file}`);
    count++;
  }
}
if (/expo-speech|Speech\.speak/.test(fs.readFileSync('src/services/speech.ts', 'utf8'))) throw new Error('Device voice fallback is forbidden');
console.log(`Validated ${count} bundled Navi recordings across both languages; no device speech fallback.`);
