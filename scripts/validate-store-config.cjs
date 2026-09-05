const fs = require('node:fs');

const app = JSON.parse(fs.readFileSync('app.json', 'utf8')).expo;
const eas = JSON.parse(fs.readFileSync('eas.json', 'utf8'));
const products = fs.readFileSync('src/config/products.ts', 'utf8');

if (app.ios.bundleIdentifier !== app.android.package) throw new Error('iOS and Android app identifiers differ.');
if (!app.ios.buildNumber || !Number.isInteger(app.android.versionCode)) throw new Error('Native build versions are missing.');
for (const suffix of ['monthly', 'yearly', 'lifetime']) {
  const expected = `${app.ios.bundleIdentifier}.${suffix}`;
  if (!products.includes(`'${expected}'`)) throw new Error(`Missing store product: ${expected}`);
}
if (eas.build.preview.android.buildType !== 'apk') throw new Error('Preview profile must create an APK.');
if (eas.build.production.android.buildType !== 'app-bundle') throw new Error('Production profile must create an AAB.');
if (eas.submit.production.android.track !== 'internal') throw new Error('Android submission must target the internal track.');

const section = (markdown, heading) => {
  const match = markdown.match(new RegExp(`## ${heading}\\n\\n([^\\n]+)`));
  if (!match) throw new Error(`Missing store section: ${heading}`);
  return match[1].trim();
};
const listings = [
  { file: 'store/listing-de.md', subtitle: 'iOS-Untertitel', keywords: 'Schlüsselwörter iOS', short: 'Google-Play-Kurzbeschreibung' },
  { file: 'store/listing-en.md', subtitle: 'iOS subtitle', keywords: 'iOS keywords', short: 'Google Play short description' },
];
for (const listing of listings) {
  const markdown = fs.readFileSync(listing.file, 'utf8');
  const limits = [[listing.subtitle, 30], [listing.keywords, 100], [listing.short, 80]];
  for (const [heading, maximum] of limits) {
    const value = section(markdown, heading);
    if ([...value].length > maximum) throw new Error(`${listing.file} ${heading} exceeds ${maximum} characters.`);
  }
}

console.log('Validated native versions, product IDs, EAS profiles, and bilingual store metadata.');
