const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync('src/data/learningContent.ts', 'utf8');
const javascript = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const sandbox = { exports: {}, module: { exports: {} }, require: () => ({}) };
sandbox.module.exports = sandbox.exports;
vm.runInNewContext(javascript, sandbox);

const { categories } = sandbox.exports;
const ids = new Set();
const expectedStages = 30;
const questionsPerStage = 3;
for (const category of categories) {
  const expectedQuestions = expectedStages * questionsPerStage;
  if (category.questions.length !== expectedQuestions) throw new Error(`${category.id}: expected ${expectedQuestions} questions, found ${category.questions.length}`);
  const germanPrompts = new Set();
  const englishPrompts = new Set();
  for (const question of category.questions) {
    if (ids.has(question.id)) throw new Error(`Duplicate question id: ${question.id}`);
    ids.add(question.id);
    if (!question.prompt.de || !question.prompt.en || !question.success.de || !question.success.en || !question.hint.de || !question.hint.en) {
      throw new Error(`${question.id}: incomplete translation`);
    }
    if (germanPrompts.has(question.prompt.de)) throw new Error(`${category.id}: repeated German task: ${question.prompt.de}`);
    if (englishPrompts.has(question.prompt.en)) throw new Error(`${category.id}: repeated English task: ${question.prompt.en}`);
    germanPrompts.add(question.prompt.de);
    englishPrompts.add(question.prompt.en);
    if (question.answers.length !== 3) throw new Error(`${question.id}: expected exactly 3 answers`);
    if (new Set(question.answers.map((answer) => answer.id)).size !== question.answers.length) throw new Error(`${question.id}: duplicate answer choices`);
    if (!question.answers.some((answer) => answer.id === question.correctAnswerId)) throw new Error(`${question.id}: correct answer is missing`);
    if (['🔎 🐾', '🧭 🌍', '🔠', '🔡'].includes(question.visual)) throw new Error(`${question.id}: unrelated placeholder visual`);
  }

  if (category.id === 'animals') {
    for (const question of category.questions) {
      if (question.visual !== '') throw new Error(`${question.id}: animal clue must use the answer pictures, not a separate unrelated visual`);
      if (question.answers.some((answer) => typeof answer.label !== 'string' || !answer.label.trim())) throw new Error(`${question.id}: missing animal answer picture`);
    }
  }
  if (category.id === 'letters') {
    category.questions.slice(0, 26).forEach((question, index) => {
      const expected = String.fromCharCode(65 + index);
      if (question.visual !== expected) throw new Error(`${question.id}: visual does not match capital ${expected}`);
    });
    category.questions.slice(26, 52).forEach((question, index) => {
      const capital = String.fromCharCode(65 + index);
      if (question.visual !== `${capital} · ${capital.toLowerCase()}`) throw new Error(`${question.id}: visual does not match lowercase ${capital.toLowerCase()}`);
    });
  }
  for (let stage = 0; stage < expectedStages; stage += 1) {
    const stageQuestions = category.questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
    if (new Set(stageQuestions.map((question) => question.id)).size !== questionsPerStage) throw new Error(`${category.id}: stage ${stage + 1} repeats a task`);
  }
}

console.log(`Validated ${ids.size} bilingual questions across ${categories.length} categories.`);
