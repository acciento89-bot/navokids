const assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const m={exports:{}};Function('module','exports',ts.transpileModule(fs.readFileSync('src/data/learningContent.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(m,m.exports);
const {categories}=m.exports;
assert.deepEqual(categories.map(c=>c.id),['numbers','colors','animals','letters','words','shapes','nature','time']);
const time=categories.find(c=>c.id==='time');
const minutes=t=>(t.hour%12)*60+t.minute;
const normalized=n=>((n%720)+720)%720;
for(const [age,questions] of Object.entries(time.questionsByAge))for(const q of questions){
 const e=q.timeExercise;
 if(e){
  const total=normalized(minutes(e.start)+e.minutes), expected=`${Math.floor(total/60)||12}:${String(total%60).padStart(2,'0')}`;
  assert.equal(q.correctAnswerId,expected,`${q.id}: independent time arithmetic`);
  if(e.kind==='read'||e.kind==='elapsed') assert.deepEqual(q.clock,e.start);
  else assert.ok(!q.clock,'Matching question must not show the answer clock as a clue');
  for(const a of q.answers){
   if(a.clock)assert.equal(a.id,`${a.clock.hour}:${String(a.clock.minute).padStart(2,'0')}`);
   if(e.kind!=='read')assert.ok(a.clock,'Clock choice needs rendered hands');
  }
 }else{
  const index=Number(q.correctAnswerId), pictures=q.visual.split(' → ');
  assert.equal(pictures.length,3);
  assert.equal(q.answers.find(a=>a.id===q.correctAnswerId).label,pictures[index]);
 }
 for(const c of [q.clock,...q.answers.map(a=>a.clock)].filter(Boolean)){
  assert.ok(Number.isInteger(c.hour)&&c.hour>=1&&c.hour<=12);
  assert.ok(Number.isInteger(c.minute)&&c.minute>=0&&c.minute<60);
  if(age==='discoverer')assert.equal(c.minute,0,'Younger track uses only full hours');
 }
}
const {spoken}=require('./generate-time.cjs');
assert.equal(spoken({hour:1,minute:30}).de,'halb zwei');
assert.equal(spoken({hour:1,minute:30}).en,'half past one');
assert.equal(spoken({hour:12,minute:45}).de,'Viertel vor eins');
assert.equal(spoken({hour:12,minute:0}).de,'zwölf Uhr');
// Inspect the same clock-angle function used by the native renderer.
const compiled=ts.transpileModule(fs.readFileSync('src/components/ClockFace.tsx','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const clock={exports:{}};Function('require','module','exports',compiled)(id=>id==='react-native'?{StyleSheet:{create:x=>x}}:{},clock,clock.exports);
assert.deepEqual(clock.exports.clockAngles({hour:1,minute:30}),{hour:45,minute:180});
assert.deepEqual(clock.exports.clockAngles({hour:12,minute:45}),{hour:22.5,minute:270});
assert.deepEqual(clock.exports.clockAngles({hour:6,minute:0}),{hour:180,minute:0});
for(const q of categories.find(c=>c.id==='shapes').questionsByAge.discoverer.filter((q,i)=>i%3===1)){
 assert.equal(q.prompt.de,'Welche Form gibt es nur einmal?');
 assert.equal(q.prompt.en,'Which shape appears only once?');
 const symbols=q.visual.split(' '),answer=q.answers.find(a=>a.id===q.correctAnswerId).label;
 assert.equal(symbols.filter(s=>s===answer).length,1);
 assert.equal(new Set(symbols).size,2);
}
const map=fs.readFileSync('src/screens/WorldScreen.tsx','utf8');
assert.ok(map.includes('adventure-map-eight-islands-v3.png'));
for(const id of ['shapes','nature','time'])assert.match(map,new RegExp(`${id}: \\{[^}]*panel: 0`));
console.log('Validated eight islands, exact clock hands and answers, time wraparound, age limits, bilingual half-hours, sequences and unambiguous unique-shape questions.');
