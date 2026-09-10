const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const compiled = ts.transpileModule(fs.readFileSync('src/data/learningContent.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const content = { exports: {} };
Function('module', 'exports', 'require', compiled)(content, content.exports, require);
const manifest = fs.readFileSync('src/generated/naviVoiceManifest.ts', 'utf8');
let count = 0;
for (const language of ['de', 'en']) {
  const keys = ['common.wrong'];
  for (const category of content.exports.categories) for (const questions of Object.values(category.questionsByAge)) for (const question of questions) for (const part of ['prompt', 'hint', 'success']) keys.push(`question.${question.id}.${part}`);
  for (const key of keys) {
    const file = `assets/audio/${language}/${key}.aac`;
    if (!fs.existsSync(file) || fs.statSync(file).size < 100) throw new Error(`Missing/empty recording: ${file}`);
    if (!manifest.includes(`"${key}": require("../../${file}")`)) throw new Error(`Recording not bundled: ${file}`);
    count++;
  }
}
if (/expo-speech|Speech\.speak/.test(fs.readFileSync('src/services/speech.ts', 'utf8'))) throw new Error('Device voice fallback is forbidden');
console.log(`Validated ${count} bundled Navi recordings across both languages; no device speech fallback.`);
