const fs = require('node:fs');
const { execFileSync, spawnSync } = require('node:child_process');
const platform = process.env.RELEASE_PLATFORM;
if (!['ios','android'].includes(platform)) throw new Error('Invalid release platform');
const data = JSON.parse(fs.readFileSync('build.json','utf8'));
const builds = (Array.isArray(data) ? data : [data]).filter(b => b.platform.toLowerCase() === platform);
if (builds.length !== 1) throw new Error('Expected one exact build');
const id = builds[0].id;
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  let ready = false;
  for (let attempt=0; attempt<150; attempt++) {
    const build = JSON.parse(execFileSync('eas', ['build:view',id,'--json'], {encoding:'utf8',timeout:120000}));
    console.log(JSON.stringify({id,status:build.status,platform,version:build.appVersion,build:build.appBuildVersion}));
    if (build.appVersion !== '0.3.2') throw new Error('Unexpected version');
    if (['ERRORED','CANCELED'].includes(build.status)) throw new Error(`Build ${build.status}`);
    if (build.status === 'FINISHED') { ready = true; break; }
    await pause(30000);
  }
  if (!ready) throw new Error('Build wait timed out');
  const result = spawnSync('eas',['submit','--platform',platform,'--profile','production','--id',id,'--non-interactive','--wait'], {stdio:'inherit',timeout:30*60*1000});
  if (result.status !== 0) throw new Error(`Store upload failed: ${result.status}`);
  console.log(`STORE_UPLOAD_COMPLETE ${platform} ${id}`);
})().catch(error => { console.error(error.message); process.exitCode=1; });
