import { Language, LocalizedText } from './types';

export const t = (text: LocalizedText, language: Language) => text[language];

export const copy = {
  greeting: { de: 'Hallo! Bereit für ein Abenteuer?', en: 'Hello! Ready for an adventure?' },
  chooseIsland: { de: 'Wähle deine Lerninsel', en: 'Choose your learning island' },
  stars: { de: 'Sterne', en: 'Stars' },
  parentArea: { de: 'Elternbereich', en: 'Parent area' },
  free: { de: 'Kostenlos', en: 'Free' },
  stage: { de: 'Stufe', en: 'Stage' },
  locked: { de: 'Premium', en: 'Premium' },
  listenAgain: { de: 'Noch einmal anhören', en: 'Listen again' },
  next: { de: 'Weiter', en: 'Next' },
  finish: { de: 'Zur Lernwelt', en: 'Back to the world' },
  wrong: { de: 'Fast! Versuch es noch einmal.', en: 'Almost! Try again.' },
  parentGate: {
    de: 'Nur für Erwachsene: Welche Antwort ist richtig?',
    en: 'For grown-ups: Which answer is correct?',
  },
  dashboardIntro: {
    de: 'Hier siehst du, was dein Kind bereits entdeckt hat.',
    en: 'Here you can see what your child has already explored.',
  },
  weeklyProgress: { de: 'Lernfortschritt', en: 'Learning progress' },
  language: { de: 'Sprache', en: 'Language' },
} satisfies Record<string, LocalizedText>;
