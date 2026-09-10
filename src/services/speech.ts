import { AudioPlayer, createAudioPlayer, setAudioModeAsync, setIsAudioActiveAsync } from 'expo-audio';
import { naviVoiceAssets } from '../generated/naviVoiceManifest';
import { Language } from '../types';

let activePlayer: AudioPlayer | undefined;
let activeSubscription: { remove: () => void } | undefined;
let activeLoadTimeout: ReturnType<typeof setTimeout> | undefined;
let playbackRequest = 0;
let audioSessionPromise: Promise<void> | undefined;

function ensureAudioSession() {
  audioSessionPromise ??= (async () => {
    await setAudioModeAsync({
      allowsRecording: false,
      interruptionMode: 'doNotMix',
      playsInSilentMode: true,
      shouldPlayInBackground: false,
      shouldRouteThroughEarpiece: false,
    });
    await setIsAudioActiveAsync(true);
  })().catch((error) => {
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

  const player = createAudioPlayer(asset, { downloadFirst: true, updateInterval: 50 });
  activePlayer = player;
  player.volume = 1;

  return new Promise<boolean>((resolve) => {
    let playRequested = false;
    let confirmedPlaying = false;
    let resolved = false;

    const resolveOnce = (value: boolean) => {
      if (resolved) return;
      resolved = true;
      resolve(value);
    };

    const startWhenReady = () => {
      if (playRequested || activePlayer !== player || request !== playbackRequest) return;
      playRequested = true;
      if (activeLoadTimeout) clearTimeout(activeLoadTimeout);
      try {
        player.play();
      } catch {
        stopVoicePack();
        resolveOnce(false);
        return;
      }
      activeLoadTimeout = setTimeout(() => {
        if (confirmedPlaying || activePlayer !== player || request !== playbackRequest) return;
        stopVoicePack();
        resolveOnce(false);
      }, 1800);
    };

    activeSubscription = player.addListener('playbackStatusUpdate', (status) => {
      if (activePlayer !== player || request !== playbackRequest) return;
      if (status.error) {
        stopVoicePack();
        resolveOnce(false);
        return;
      }
      if (status.isLoaded) startWhenReady();
      if (status.playing) {
        confirmedPlaying = true;
        if (activeLoadTimeout) clearTimeout(activeLoadTimeout);
        activeLoadTimeout = undefined;
        resolveOnce(true);
      }
      if (status.didJustFinish) {
        resolveOnce(confirmedPlaying);
        stopVoicePack();
      }
    });

    activeLoadTimeout = setTimeout(() => {
      if (playRequested || activePlayer !== player) return;
      stopVoicePack();
      resolveOnce(false);
    }, 5000);

    if (player.isLoaded) startWhenReady();
  });
}

export async function speak(text: string, language: Language, slower = false, clipKey?: string) {
  const request = ++playbackRequest;
  stopVoicePack();
  if (request !== playbackRequest) return;

  const asset = clipKey ? naviVoiceAssets[language][clipKey] : undefined;
  if (asset) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        if (await playVoicePack(asset, request)) return;
      } catch {
        stopVoicePack();
      }
      if (request !== playbackRequest) return;
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
  }

  // Only the approved bundled Navi recordings may be played.
  // The release gate rejects missing clips before either platform is built.

}

export async function stopSpeaking() {
  playbackRequest += 1;
  stopVoicePack();
}
