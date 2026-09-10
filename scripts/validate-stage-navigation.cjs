const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { create, act } = require('react-test-renderer');
global.IS_REACT_ACT_ENVIRONMENT = true;
const cache = new Map();
const native = { Image: 'Image', ImageBackground: 'ImageBackground', Text: 'Text', View: 'View', Pressable: 'Pressable', ScrollView: 'ScrollView', StyleSheet: { create: x => x }, Platform: { OS: 'ios' } };
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} }; cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
  const localRequire = id => {
    if (id === 'react-native') return native;
    if (id.endsWith('/services/speech')) return { speak() {}, stopSpeaking() {} };
    if ((/\.(png|jpg)$/.test(id))) return 1;
    if (!id.startsWith('.')) return require(id);
    const base = path.resolve(path.dirname(file), id);
    return load(['.ts', '.tsx'].map(ext => base + ext).find(fs.existsSync));
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const { GameScreen } = load('src/screens/GameScreen.tsx');
const { WorldScreen } = load('src/screens/WorldScreen.tsx');
const { StagesScreen } = load('src/screens/StagesScreen.tsx');
const { categories } = load('src/data/learningContent.ts');
const { createEmptyProgress } = load('src/data/progress.ts');
const text = tree => JSON.stringify(tree.toJSON());
(async () => {
  for (const platform of ['ios', 'android']) {
    native.Platform.OS = platform;
    for (const language of ['de', 'en']) {
      let completed = 0, next = 0, back = 0, tree;
      const category = categories.find(c => c.id === 'words');
      const props = { category, stage: 1, language, ageGroup: 'adventurer', onCompleted: n => { assert.equal(n, 3); completed++; }, onNextStage: () => next++, onBack: () => back++ };
      await act(() => { tree = create(React.createElement(GameScreen, { ...props, key: 'stage-1' })); });
      for (let index = 0; index < 3; index++) {
        const q = category.questionsByAge.adventurer[index];
        if (index === 1) {
          const visual = tree.root.findAllByType('Text').find(n => n.props.children === (language === 'en' ? 'Cheese' : 'Käse'));
          assert.ok(visual, `${platform}/${language}: localized word card`);
        }
        const answers = tree.root.findAllByType('Pressable').filter(n => typeof n.props.disabled === 'boolean');
        await act(() => answers[q.answers.findIndex(a => a.id === q.correctAnswerId)].props.onPress());
        const buttons = tree.root.findAllByType('Pressable');
        await act(() => buttons[buttons.length - 1].props.onPress());
      }
      assert.equal(completed, 1); assert.equal(back, 0);
      const actions = tree.root.findAllByType('Pressable');
      assert.equal(actions.length, 2);
      await act(() => actions[0].props.onPress()); assert.equal(next, 1);
      await act(() => actions[1].props.onPress()); assert.equal(back, 1);
      await act(() => tree.update(React.createElement(GameScreen, { ...props, stage: 2, key: 'stage-2' })));
      assert.ok(tree.root.findAllByType('Text').some(n => Array.isArray(n.props.children) && n.props.children.join('') === '1/3'), 'Next stage starts at its first question');
      assert.ok(!text(tree).includes(language === 'en' ? 'Stage 1 complete!' : 'Stufe 1 geschafft!'));
      await act(() => tree.unmount());
      await act(() => { tree = create(React.createElement(GameScreen, { ...props, stage: 30 })); });
      for (const q of category.questionsByAge.adventurer.slice(87, 90)) {
        const answers = tree.root.findAllByType('Pressable').filter(n => typeof n.props.disabled === 'boolean');
        await act(() => answers[q.answers.findIndex(a => a.id === q.correctAnswerId)].props.onPress());
        const buttons = tree.root.findAllByType('Pressable');
        await act(() => buttons[buttons.length - 1].props.onPress());
      }
      assert.equal(tree.root.findAllByType('Pressable').length, 1, 'No stage 31 action');
      await act(() => tree.unmount());
    }
    for (const language of ['de', 'en']) {
      let world;
      await act(() => { world = create(React.createElement(WorldScreen, { language, profile: { nickname: 'Alex', avatar: '🦊', progress: createEmptyProgress() }, premiumUnlocked: false, onLanguageChange() {}, onCategoryPress() {}, onParentsPress() {}, onProfilePress() {} })); });
      assert.equal(world.root.findAllByType('ImageBackground').length, 2, 'Two illustrated panels make eight actual islands');
      const islandButtons = world.root.findAllByType('Pressable').filter(n => n.props.accessibilityHint);
      assert.equal(islandButtons.length, 8);
      for (const id of ['shapes', 'nature', 'time']) assert.ok(islandButtons.some(n => n.props.accessibilityLabel.startsWith(categories.find(c => c.id === id).title[language])));
      await act(() => world.unmount());
      for (const [id, age, stage] of [['shapes','discoverer',1], ['nature','discoverer',30], ['nature','adventurer',30], ['time','discoverer',12], ['time','discoverer',20], ['time','adventurer',7], ['time','adventurer',15], ['time','adventurer',23], ['time','adventurer',30]]) {
        let tree, done = 0; const scrolls = [];
        const category = categories.find(c => c.id === id);
        await act(() => { tree = create(React.createElement(GameScreen, { category, stage, ageGroup: age, language, onCompleted: () => done++, onNextStage() {}, onBack() {} }), { createNodeMock: element => element.type === 'ScrollView' ? { scrollTo: p => scrolls.push(p) } : null }); });
        for (const q of category.questionsByAge[age].slice((stage-1)*3, stage*3)) {
          const answers = tree.root.findAllByType('Pressable').filter(n => typeof n.props.disabled === 'boolean');
          assert.equal(answers.length, age === 'discoverer' ? 2 : 3);
          await act(() => answers[q.answers.findIndex(a => a.id === q.correctAnswerId)].props.onPress());
          const buttons = tree.root.findAllByType('Pressable');
          await act(() => buttons[buttons.length-1].props.onPress());
        }
        assert.equal(done, 1);
        assert.ok(scrolls.length >= 3, 'New questions return to the top after scrolling');
        await act(() => tree.unmount());
      }
    }
    let tree; const positions = [];
    await act(() => { tree = create(React.createElement(StagesScreen, { category: categories[0], language: 'en', progress: createEmptyProgress().numbers, premiumUnlocked: false, focusStage: 20, onBack() {}, onStage() {} }), { createNodeMock: element => element.type === 'ScrollView' ? { scrollTo: p => positions.push(p) } : null }); });
    const row = tree.root.findAllByType('Pressable').find(n => n.props.onLayout);
    const layout = tree.root.findAllByType('View').find(n => n.props.onLayout);
    await act(() => row.props.onLayout({ nativeEvent: { layout: { y: 1900 } } }));
    await act(() => layout.props.onLayout({ nativeEvent: { layout: { y: 220 } } }));
    assert.equal(positions.length, 0, 'Wait for scroll content before restoring');
    await act(() => tree.root.findByType('ScrollView').props.onContentSizeChange(390, 3400));
    assert.deepEqual(positions, [{ y: 2100, animated: false }]);
    await act(() => tree.root.findByType('ScrollView').props.onContentSizeChange(390, 3400));
    assert.equal(positions.length, 1, 'Do not override subsequent manual scrolling');
    await act(() => tree.unmount());
  }
  console.log('Validated stage completion, next-stage reset, final stage, bilingual cards and layout-driven scroll restoration for both platform branches.');
})().catch(error => { console.error(error); process.exitCode = 1; });
