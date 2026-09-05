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
for (const category of categories) {
  if (category.questions.length !== 18) throw new Error(`${category.id}: expected 18 questions, found ${category.questions.length}`);
  for (const question of category.questions) {
    if (ids.has(question.id)) throw new Error(`Duplicate question id: ${question.id}`);
    ids.add(question.id);
    if (!question.prompt.de || !question.prompt.en || !question.success.de || !question.success.en || !question.hint.de || !question.hint.en) {
      throw new Error(`${question.id}: incomplete translation`);
    }
    if (question.answers.length !== 3) throw new Error(`${question.id}: expected exactly 3 answers`);
    if (!question.answers.some((answer) => answer.id === question.correctAnswerId)) throw new Error(`${question.id}: correct answer is missing`);
  }
}

console.log(`Validated ${ids.size} bilingual questions across ${categories.length} categories.`);
