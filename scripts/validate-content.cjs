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
const ageGroups = ['discoverer', 'adventurer'];
for (const category of categories) {
  const expectedQuestions = expectedStages * questionsPerStage;
  const taskSignaturesByAge = {};
  for (const ageGroup of ageGroups) {
    const questions = category.questionsByAge?.[ageGroup];
    if (!questions) throw new Error(`${category.id}: missing ${ageGroup} learning track`);
    if (questions.length !== expectedQuestions) throw new Error(`${category.id}/${ageGroup}: expected ${expectedQuestions} questions, found ${questions.length}`);
    const germanPrompts = new Set();
    const englishPrompts = new Set();
    const taskSignatures = new Set();
    taskSignaturesByAge[ageGroup] = taskSignatures;
    const expectedAnswers = ageGroup === 'discoverer' ? 2 : 3;

    for (const question of questions) {
      if (ids.has(question.id)) throw new Error(`Duplicate question id: ${question.id}`);
      ids.add(question.id);
      if (!question.prompt.de || !question.prompt.en || !question.success.de || !question.success.en || !question.hint.de || !question.hint.en) {
        throw new Error(`${question.id}: incomplete translation`);
      }
      if (germanPrompts.has(question.prompt.de)) throw new Error(`${category.id}/${ageGroup}: repeated German task: ${question.prompt.de}`);
      if (englishPrompts.has(question.prompt.en)) throw new Error(`${category.id}/${ageGroup}: repeated English task: ${question.prompt.en}`);
      germanPrompts.add(question.prompt.de);
      englishPrompts.add(question.prompt.en);
      taskSignatures.add(`${question.prompt.de}\n${question.visual}`);
      if (question.answers.length !== expectedAnswers) throw new Error(`${question.id}: expected exactly ${expectedAnswers} answers for ${ageGroup}`);
      if (new Set(question.answers.map((answer) => answer.id)).size !== question.answers.length) throw new Error(`${question.id}: duplicate answer choices`);
      if (!question.answers.some((answer) => answer.id === question.correctAnswerId)) throw new Error(`${question.id}: correct answer is missing`);
      if (['🔎 🐾', '🧭 🌍', '🔠', '🔡'].includes(question.visual)) throw new Error(`${question.id}: unrelated placeholder visual`);

      if (ageGroup === 'discoverer' && category.id === 'numbers') {
        const visibleText = [question.prompt.de, question.prompt.en, question.visual, question.success.de, question.success.en, question.hint.de, question.hint.en, ...question.answers.map((answer) => typeof answer.label === 'string' ? answer.label : '')].join(' ');
        if (/[+−=]/.test(visibleText)) throw new Error(`${question.id}: discoverer number task contains formal arithmetic`);
        if ((visibleText.match(/\b\d+\b/g) ?? []).some((value) => Number(value) > 5)) throw new Error(`${question.id}: discoverer number task exceeds five`);
      }
    }

    if (category.id === 'animals') {
      for (const question of questions) {
        if (question.visual !== '') throw new Error(`${question.id}: animal clue must use the answer pictures, not a separate unrelated visual`);
        if (question.answers.some((answer) => typeof answer.label !== 'string' || !answer.label.trim())) throw new Error(`${question.id}: missing animal answer picture`);
      }
    }
    if (category.id === 'words' && ageGroup === 'discoverer') {
      for (const question of questions) {
        if (question.visual !== '') throw new Error(`${question.id}: discoverer word task must place both matching pictures in the answers`);
        if (question.answers.some((answer) => typeof answer.label !== 'string' || !answer.label.trim())) throw new Error(`${question.id}: missing discoverer word picture`);
      }
    }
    if (category.id === 'letters') {
      questions.slice(0, 26).forEach((question, index) => {
        const expected = String.fromCharCode(65 + index);
        if (question.visual !== expected) throw new Error(`${question.id}: visual does not match capital ${expected}`);
      });
      questions.slice(26, 52).forEach((question, index) => {
        const capital = String.fromCharCode(65 + index);
        const expected = ageGroup === 'discoverer' ? capital : `${capital} · ${capital.toLowerCase()}`;
        if (question.visual !== expected) throw new Error(`${question.id}: visual does not match lowercase task for ${capital}`);
      });
    }
    for (let stage = 0; stage < expectedStages; stage += 1) {
      const stageQuestions = questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
      if (new Set(stageQuestions.map((question) => question.id)).size !== questionsPerStage) throw new Error(`${category.id}/${ageGroup}: stage ${stage + 1} repeats a task`);
    }
  }

  for (const signature of taskSignaturesByAge.discoverer) {
    if (taskSignaturesByAge.adventurer.has(signature)) throw new Error(`${category.id}: same task appears in both age groups: ${signature.split('\n')[0]}`);
  }
}

console.log(`Validated ${ids.size} age-specific bilingual questions across ${categories.length} categories.`);
