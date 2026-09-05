import * as Speech from 'expo-speech';
import { AudioPlayer, createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { naviVoiceAssets } from '../generated/naviVoiceManifest';
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
let activePlayer: AudioPlayer | undefined;
let activeSubscription: { remove: () => void } | undefined;
let activeLoadTimeout: ReturnType<typeof setTimeout> | undefined;
let playbackRequest = 0;
let audioSessionPromise: Promise<void> | undefined;

function ensureAudioSession() {
  audioSessionPromise ??= setAudioModeAsync({
    allowsRecording: false,
    interruptionMode: 'doNotMix',
    playsInSilentMode: true,
    shouldPlayInBackground: false,
    shouldRouteThroughEarpiece: false,
  }).catch((error) => {
    audioSessionPromise = undefined;
    throw error;
  });
  return audioSessionPromise;
}

function stopVoicePack() {
  if (activeLoadTimeout) clearTimeout(activeLoadTimeout);
  activeLoadTimeout = undefined;
  activeSubscription?.remove();
  activeSubscription = undefined;
  activePlayer?.pause();
  activePlayer?.remove();
  activePlayer = undefined;
}

async function playVoicePack(asset: number, request: number) {
  await ensureAudioSession();
  if (request !== playbackRequest) return false;

  const player = createAudioPlayer(asset, { downloadFirst: true, updateInterval: 100 });
  activePlayer = player;
  player.volume = 1;

  return new Promise<boolean>((resolve) => {
    let started = false;
    let resolved = false;

    const resolveOnce = (value: boolean) => {
      if (resolved) return;
      resolved = true;
      resolve(value);
    };

    const startWhenReady = () => {
      if (started || activePlayer !== player || request !== playbackRequest) return;
      started = true;
      if (activeLoadTimeout) clearTimeout(activeLoadTimeout);
      activeLoadTimeout = undefined;
      player.play();
      resolveOnce(true);
    };

    activeSubscription = player.addListener('playbackStatusUpdate', (status) => {
      if (activePlayer !== player || request !== playbackRequest) return;
      if (status.error) {
        stopVoicePack();
        resolveOnce(false);
        return;
      }
      if (status.isLoaded) startWhenReady();
      if (status.didJustFinish) stopVoicePack();
    });

    activeLoadTimeout = setTimeout(() => {
      if (started || activePlayer !== player) return;
      stopVoicePack();
      resolveOnce(false);
    }, 5000);

    if (player.isLoaded) startWhenReady();
  });
}

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

export async function speak(text: string, language: Language, slower = false, clipKey?: string) {
  const request = ++playbackRequest;
  stopVoicePack();
  await Speech.stop();
  if (request !== playbackRequest) return;

  const asset = clipKey ? naviVoiceAssets[language][clipKey] : undefined;
  if (asset) {
    try {
      if (await playVoicePack(asset, request)) return;
    } catch {
      stopVoicePack();
    }
  }

  const voice = await naviVoice(language);
  if (request !== playbackRequest) return;
  Speech.speak(text, {
    language: languageCodes[language],
    voice,
    rate: slower ? 0.74 : 0.86,
    pitch: slower ? 1.12 : 1.16,
    volume: 1,
    useApplicationAudioSession: true,
  });
}

export async function stopSpeaking() {
  playbackRequest += 1;
  stopVoicePack();
  await Speech.stop();
}
