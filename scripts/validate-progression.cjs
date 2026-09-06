const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync('src/data/progress.ts', 'utf8');
const javascript = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const sandbox = {
  exports: {},
  module: { exports: {} },
  require: (id) => id.includes('config/learning')
    ? { QUESTIONS_PER_STAGE: 3, STAGES_PER_CATEGORY: 30 }
    : {},
};
sandbox.module.exports = sandbox.exports;
vm.runInNewContext(javascript, sandbox);

const { completeStageProgress, isStageCompleted, isStageNextInSequence } = sandbox.exports;
const empty = { completedQuestions: 0, stars: 0, completedStages: [] };
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const skippedToThirty = completeStageProgress(empty, 30);
assert(skippedToThirty.completedStages.length === 0, 'Stage 30 must not complete before stages 1–29');
assert(skippedToThirty.completedQuestions === 0, 'Skipping ahead must not increase progress');

const skippedToTwo = completeStageProgress(empty, 2);
assert(skippedToTwo.completedStages.length === 0, 'Stage 2 must not complete before stage 1');

const afterOne = completeStageProgress(empty, 1);
assert(isStageCompleted(afterOne, 1), 'Stage 1 must be recorded explicitly');
assert(!isStageCompleted(afterOne, 2), 'Completing stage 1 must not complete stage 2');
assert(afterOne.completedQuestions === 3 && afterOne.stars === 3, 'One completed stage must award exactly its own progress');

const replayedOne = completeStageProgress(afterOne, 1);
assert(replayedOne.completedStages.length === 1, 'Replaying a stage must not duplicate progress');

const afterTwo = completeStageProgress(afterOne, 2);
assert(afterTwo.completedStages.join(',') === '1,2', 'Stage 2 must unlock after stage 1');
assert(!isStageNextInSequence(afterTwo, 30), 'Stage 30 must remain locked until stage 29 is complete');

const malformedJump = { completedQuestions: 3, stars: 3, completedStages: [29] };
assert(!isStageNextInSequence(malformedJump, 30), 'A malformed stage-29 record must not unlock stage 30 without stages 1–28');
assert(completeStageProgress(malformedJump, 30).completedStages.length === 0, 'Completing stage 30 must require every earlier stage');

console.log('Validated strict sequential stage progression and isolated completion state.');
