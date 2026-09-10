const crypto = require('node:crypto');
const { directions } = require('./navi-tts.cjs');
const model = 'gpt-4o-mini-tts';
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const signature = (language, text, voice = 'marin') => sha256(JSON.stringify([language, voice, model, directions[language], text]));
module.exports = { model, sha256, signature };
