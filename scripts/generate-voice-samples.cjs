const path = require('node:path');
const { synthesize } = require('./navi-tts.cjs');

const samples = {
  de: 'Hallo! Ich bin Navi. Komm, wir entdecken gemeinsam die Zahleninsel!',
  en: "Hello! I'm Navi. Come on, let's explore Numbers Island together!",
};

const voices = ['marin', 'cedar', 'coral'];

async function main() {
  for (const voice of voices) {
    for (const language of ['de', 'en']) {
      const outputPath = path.join(process.cwd(), 'voice-samples', `${voice}-${language}.aac`);
      process.stdout.write(`Generating ${voice} ${language}... `);
      await synthesize({
        apiKey: process.env.OPENAI_API_KEY,
        text: samples[language],
        language,
        voice,
        outputPath,
      });
      process.stdout.write('done\n');
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
