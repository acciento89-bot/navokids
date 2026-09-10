// One-time recovery of the complete audio checkpoint from run 34535768932.
// That run completed every generation and failed only in the subsequent cleanup.
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const {signature,sha256,model}=require('./voice-index.cjs');
const source=fs.readFileSync('src/data/learningContent.ts');
const expected=process.env.EXPECTED_CONTENT_SHA;
if(!expected||sha256(source)!==expected)throw new Error('Recovery content differs from the completed generation run');
const m={exports:{}};Function('module','exports',ts.transpileModule(source.toString(),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(m,m.exports);
const index={voice:'marin',model,entries:{}};
for(const language of ['de','en']){
 const entries=[['common.wrong',language==='de'?'Fast! Versuch es noch einmal.':'Almost! Try again.']];
 for(const c of m.exports.categories)for(const qs of Object.values(c.questionsByAge))for(const q of qs)for(const part of ['prompt','success','hint'])entries.push([`question.${q.id}.${part}`,q[part][language]]);
 for(const [key,text]of entries){
  const relative=`assets/audio/${language}/${key}.aac`,data=fs.readFileSync(path.join('voice-checkpoint',relative));
  if(data.length<100||data[0]!==0xff||(data[1]&0xf0)!==0xf0)throw new Error(`Incomplete AAC checkpoint: ${relative}`);
  fs.mkdirSync(path.dirname(relative),{recursive:true});fs.writeFileSync(relative,data);
  index.entries[`${language}/${key}`]={signature:signature(language,text),sha256:sha256(data)};
 }
}
fs.writeFileSync('src/generated/naviVoiceIndex.json',JSON.stringify(index,null,2)+'\n');
console.log(`Recovered ${Object.keys(index.entries).length} completed recordings from the matching content checkpoint.`);
