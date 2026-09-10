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
const animalPictures = /🐱|🐶|🐭|🐰|🦊|🐻|🦁|🐯|🐘|🦒|🦓|🐒|🐮|🐷|🐴|🐑|🐐|🐔|🦆|🦉|🐟|🐋|🐬|🦈|🐙|🦀|🐝|🦋|🐌|🐸|🐢|🐧|🦘|🐨|🐆|🦔/u;
const labelText = (answer) => typeof answer.label === 'string' ? answer.label : `${answer.label.de} ${answer.label.en}`;
const pictureCount = (value) => value.trim() ? value.trim().split(/\s+/u).length : 0;
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
      if (/[a-zäöüß]{2}/i.test(question.visual) && (!question.localizedVisual?.de || !question.localizedVisual?.en)) throw new Error(`${question.id}: word visual needs German and English translations`);
      if (question.localizedVisual && !question.prompt.en.includes(question.localizedVisual.en)) throw new Error(`${question.id}: English word visual must match the spoken task`);
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
      for (let stage = 0; stage < expectedStages; stage += 1) {
        const [sentence, pair, action] = questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
        if (!sentence.showNavi || !sentence.visual) throw new Error(`${sentence.id}: sentence task must show Navi with a picture clue`);
        if (!pair.visual) throw new Error(`${pair.id}: word-pair task is missing its picture clue`);
        if (action.visual) throw new Error(`${action.id}: action task must let the child choose between the two action pictures`);
        for (const question of [sentence, pair, action]) {
          if (question.answers.some((answer) => typeof answer.label !== 'string' || !answer.label.trim())) throw new Error(`${question.id}: missing discoverer word picture`);
        }
      }
    }
    if (category.id === 'words' && ageGroup === 'adventurer') {
      for (let stage = 0; stage < expectedStages; stage += 1) {
        const [sentence, group, compound] = questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
        if (sentence.visual) throw new Error(`${sentence.id}: sentence task should test listening and word comprehension without an answer picture`);
        if (!group.visual) throw new Error(`${group.id}: word-group task is missing its word clue`);
        if (!compound.visual.includes('+')) throw new Error(`${compound.id}: compound-word task is missing its two-part visual`);
        for (const question of [sentence, group, compound]) {
          if (question.answers.some((answer) => typeof answer.label === 'string' || !answer.label.de || !answer.label.en)) throw new Error(`${question.id}: adventurer word task must use written bilingual answer choices`);
        }
      }
    }
    if (category.id === 'words') {
      for (const question of questions) {
        const visiblePictures = [question.visual, ...question.answers.map(labelText)].join(' ');
        if (animalPictures.test(visiblePictures)) throw new Error(`${question.id}: word task duplicates the animal-picture curriculum`);
      }
    }
    if (category.id === 'letters') {
      if (ageGroup === 'adventurer') {
        questions.slice(0, 26).forEach((question, index) => {
          const expected = String.fromCharCode(65 + index);
          if (question.visual !== expected) throw new Error(`${question.id}: visual does not match capital ${expected}`);
        });
        questions.slice(26, 52).forEach((question, index) => {
          const capital = String.fromCharCode(65 + index);
          const expected = `${capital} · ${capital.toLowerCase()}`;
          if (question.visual !== expected) throw new Error(`${question.id}: visual does not match lowercase task for ${capital}`);
        });
      } else {
        for (let stage = 0; stage < expectedStages; stage += 1) {
          const [capital, lowercase, sound] = questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
          if (!capital.showNavi || !lowercase.showNavi) throw new Error(`letters/discoverer stage ${stage + 1}: Navi must visibly present the letter cards`);
          if (!capital.visual.includes(capital.correctAnswerId)) throw new Error(`${capital.id}: Navi's card does not show the correct capital letter`);
          if (!lowercase.visual.includes(lowercase.correctAnswerId)) throw new Error(`${lowercase.id}: Navi's card does not show the correct lowercase letter`);
          if (!sound.visual || sound.showNavi) throw new Error(`${sound.id}: initial-sound task must show one familiar object without the Navi card`);
        }
      }
    }
    for (let stage = 0; stage < expectedStages; stage += 1) {
      const stageQuestions = questions.slice(stage * questionsPerStage, (stage + 1) * questionsPerStage);
      if (new Set(stageQuestions.map((question) => question.id)).size !== questionsPerStage) throw new Error(`${category.id}/${ageGroup}: stage ${stage + 1} repeats a task`);
      if (category.id === 'numbers' && ageGroup === 'discoverer') {
        const [match, count, quantity] = stageQuestions;
        if (!match.showNavi || !quantity.showNavi) throw new Error(`numbers/discoverer stage ${stage + 1}: Navi must visibly present both number cards`);
        if (!match.visual.split(/\s+/u).includes(match.correctAnswerId)) throw new Error(`${match.id}: Navi's number does not match the correct answer`);
        if (pictureCount(count.visual) !== Number(count.correctAnswerId)) throw new Error(`${count.id}: visible object count does not match the correct answer`);
        if (quantity.visual !== String(stage % 5 + 1)) throw new Error(`${quantity.id}: Navi's displayed number does not match this stage`);
        const correctPicture = quantity.answers.find((answer) => answer.id === quantity.correctAnswerId);
        if (pictureCount(correctPicture.label) !== Number(quantity.visual)) throw new Error(`${quantity.id}: answer picture count does not match Navi's number`);
      }
      if (category.id === 'colors' && ageGroup === 'discoverer') {
        if (stageQuestions.some((question) => !question.conceptKey)) throw new Error(`colors/discoverer stage ${stage + 1}: missing color concept metadata`);
        if (new Set(stageQuestions.map((question) => question.conceptKey)).size !== questionsPerStage) throw new Error(`colors/discoverer stage ${stage + 1}: correct colors must rotate across all three tasks`);
      }
    }
    if (category.id === 'colors' && ageGroup === 'discoverer') {
      for (let index = 1; index < questions.length; index += 1) {
        if (questions[index - 1].conceptKey === questions[index].conceptKey) throw new Error(`${questions[index].id}: same correct color appears in two consecutive tasks`);
      }
    }
  }

  for (const signature of taskSignaturesByAge.discoverer) {
    if (taskSignaturesByAge.adventurer.has(signature)) throw new Error(`${category.id}: same task appears in both age groups: ${signature.split('\n')[0]}`);
  }
}

console.log(`Validated ${ids.size} age-specific bilingual questions across ${categories.length} categories.`);
