const fs = require('node:fs/promises');
const path = require('node:path');

const endpoint = 'https://api.openai.com/v1/audio/speech';

const directions = {
  de: 'Sprich auf natürlichem Hochdeutsch als Navi, ein niedlicher, freundlicher roter Panda und neugieriger kleiner Abenteurer. Klinge warm, fröhlich und verspielt, aber nicht babyhaft oder schrill. Sprich langsam, sehr deutlich und ermutigend für Kinder von drei bis sieben Jahren. Nutze natürliche Betonung, kurze Pausen und ein freundliches Lächeln in der Stimme.',
  en: 'Speak in natural American English as Navi, a cute, friendly red panda and curious little explorer. Sound warm, cheerful, and playful, but never babyish or shrill. Speak slowly, very clearly, and encouragingly for children ages three to seven. Use natural emphasis, short pauses, and a friendly smile in the voice.',
};

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function synthesize({ apiKey, text, language, voice, outputPath }) {
  if (!apiKey) throw new Error('OPENAI_API_KEY is missing.');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  for (let attempt = 1; attempt <= 6; attempt += 1) {
    let response;
    try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini-tts',
        voice,
        input: text,
        instructions: directions[language],
        response_format: 'aac',
      }),
    });

    if (response.ok) {
      await fs.writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
      return;
    }

    } catch (error) {
      if (attempt === 6) throw error;
      await sleep(Math.min(30000, 1000 * 2 ** (attempt - 1)));
      continue;
    }

    const details = await response.text();
    if (attempt === 6 || (response.status < 500 && response.status !== 429)) {
      throw new Error(`OpenAI speech request failed (${response.status}): ${details}`);
    }
    const retryAfterSeconds = Number(response.headers.get('retry-after'));
    const retryDelay = Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
      ? retryAfterSeconds * 1000
      : Math.min(30000, 1000 * 2 ** (attempt - 1));
    await sleep(retryDelay);
  }
}

module.exports = { directions, synthesize };
