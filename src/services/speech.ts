import * as Speech from 'expo-speech';
import { Language } from '../types';

const languageCodes: Record<Language, string> = {
  de: 'de-DE',
  en: 'en-US',
};

export async function speak(text: string, language: Language, slower = false) {
  await Speech.stop();
  Speech.speak(text, {
    language: languageCodes[language],
    rate: slower ? 0.76 : 0.84,
    pitch: 1.04,
    volume: 1,
  });
}

export function stopSpeaking() {
  return Speech.stop();
}
