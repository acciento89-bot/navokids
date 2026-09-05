import * as Speech from 'expo-speech';
import { Language } from '../types';

const languageCodes: Record<Language, string> = {
  de: 'de-DE',
  en: 'en-US',
};

const preferredNames: Record<Language, string[]> = {
  de: ['anna', 'petra', 'vicki', 'marie', 'katja'],
  en: ['samantha', 'ava', 'allison', 'zoe', 'serena'],
};

const selectedVoices: Partial<Record<Language, string>> = {};

async function naviVoice(language: Language) {
  if (selectedVoices[language]) return selectedVoices[language];
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const prefix = languageCodes[language].slice(0, 2).toLowerCase();
    const candidates = voices.filter((voice) => voice.language.toLowerCase().startsWith(prefix));
    const ranked = candidates.sort((a, b) => {
      const score = (voice: Speech.Voice) => {
        const value = `${voice.name} ${voice.identifier}`.toLowerCase();
        const preferredIndex = preferredNames[language].findIndex((name) => value.includes(name));
        return (voice.quality === Speech.VoiceQuality.Enhanced ? 100 : 0)
          + (value.includes('premium') || value.includes('neural') ? 80 : 0)
          + (preferredIndex >= 0 ? 40 - preferredIndex : 0)
          - (value.includes('compact') ? 20 : 0);
      };
      return score(b) - score(a);
    });
    selectedVoices[language] = ranked[0]?.identifier;
  } catch {
    selectedVoices[language] = undefined;
  }
  return selectedVoices[language];
}

export async function speak(text: string, language: Language, slower = false) {
  await Speech.stop();
  const voice = await naviVoice(language);
  Speech.speak(text, {
    language: languageCodes[language],
    voice,
    rate: slower ? 0.74 : 0.86,
    pitch: slower ? 1.12 : 1.16,
    volume: 1,
    useApplicationAudioSession: true,
  });
}

export function stopSpeaking() {
  return Speech.stop();
}
