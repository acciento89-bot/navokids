const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const platform = process.env.RELEASE_PLATFORM;
if (!['ios', 'android'].includes(platform)) throw new Error('Invalid release platform');
const version = JSON.parse(fs.readFileSync('app.json', 'utf8')).expo.version;
if (version !== '0.4.0') throw new Error('This release workflow expects 0.4.0');
const previous = JSON.parse(execFileSync('eas', ['build:list', '--platform', platform, '--limit', '20', '--json', '--non-interactive'], { encoding: 'utf8' }));
const existing = previous.find(b => b.appVersion === version && b.gitCommitHash === process.env.GITHUB_SHA && !['ERRORED', 'CANCELED'].includes(b.status));
let data;
if (existing) {
  data = [existing];
  console.log('Reusing the existing build for this release commit.');
} else {
  data = JSON.parse(execFileSync('eas', ['build', '--platform', platform, '--profile', 'production', '--non-interactive', '--no-wait', '--json'], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }));
}
fs.writeFileSync('build.json', JSON.stringify(data, null, 2));
for (const b of Array.isArray(data) ? data : [data]) console.log(JSON.stringify({ id: b.id, platform: b.platform, status: b.status, version: b.appVersion, build: b.appBuildVersion }));
