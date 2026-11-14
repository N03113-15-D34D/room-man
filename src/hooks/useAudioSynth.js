import { useRef, useState, useCallback, useEffect } from 'react';
import { triggerRetroTone } from '../utils/audioUtils';

export function useAudioSynth() {
  const audioCtxRef = useRef(null);
  const bgmRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayingBgm, setIsPlayingBgm] = useState(false);

  const initAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  useEffect(() => {
    const audio = new Audio('/audio/man.mp3');
    audio.loop = true;
    audio.volume = 0.45;
    bgmRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const startBgm = useCallback(() => {
    initAudioContext();
    if (bgmRef.current && !isPlayingBgm) {
      bgmRef.current
        .play()
        .then(() => setIsPlayingBgm(true))
        .catch(() => {});
    }
  }, [initAudioContext, isPlayingBgm]);

  const toggleMute = useCallback(() => {
    initAudioContext();
    setIsMuted((prev) => {
      const nextMuted = !prev;
      if (bgmRef.current) {
        bgmRef.current.muted = nextMuted;
        if (!nextMuted && !isPlayingBgm) {
          bgmRef.current
            .play()
            .then(() => setIsPlayingBgm(true))
            .catch(() => {});
        }
      }
      return nextMuted;
    });
  }, [initAudioContext, isPlayingBgm]);

  const playBlip = useCallback(
    (voice = 'narrator') => {
      if (isMuted) return;
      initAudioContext();
      const ctx = audioCtxRef.current;

      if (voice === 'man') {
        triggerRetroTone(ctx, { type: 'triangle', startFreq: 190 + Math.random() * 25, duration: 0.045, volume: 0.06 });
      } else if (voice === 'item') {
        triggerRetroTone(ctx, { type: 'square', startFreq: 520, endFreq: 780, duration: 0.08, volume: 0.06 });
      } else {
        triggerRetroTone(ctx, { type: 'square', startFreq: 320 + Math.random() * 20, duration: 0.045, volume: 0.06 });
      }
    },
    [isMuted, initAudioContext]
  );

  const playSelect = useCallback(() => {
    if (isMuted) return;
    initAudioContext();
    triggerRetroTone(audioCtxRef.current, { type: 'square', startFreq: 440, endFreq: 660, duration: 0.09, volume: 0.07 });
  }, [isMuted, initAudioContext]);

  return { isMuted, isPlayingBgm, startBgm, toggleMute, playBlip, playSelect };
}
