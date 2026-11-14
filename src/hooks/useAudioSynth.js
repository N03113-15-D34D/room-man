import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioSynth() {
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(false);
  const ctxRef = useRef(null);
  const bgmRef = useRef(null);

  useEffect(() => {
    mutedRef.current = muted;
    if (!bgmRef.current) return;
    if (muted) {
      bgmRef.current.pause();
    } else {
      bgmRef.current.play().catch(() => {});
    }
  }, [muted]);

  useEffect(() => {
    const audio = new Audio('/man.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    bgmRef.current = audio;

    const tryPlay = () => {
      if (!mutedRef.current && bgmRef.current && bgmRef.current.paused) {
        bgmRef.current.play().catch(() => {});
      }
    };

    tryPlay();
    window.addEventListener('keydown', tryPlay);
    window.addEventListener('pointerdown', tryPlay);

    return () => {
      window.removeEventListener('keydown', tryPlay);
      window.removeEventListener('pointerdown', tryPlay);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const playBlip = useCallback((freq = 440, duration = 0.05) => {
    if (mutedRef.current) return;
    try {
      if (!ctxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        ctxRef.current = new AudioCtx();
      }
      const ctx = ctxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignora bloqueo antes de interacción
    }
  }, []);

  const toggleMute = () => setMuted((prev) => !prev);

  return { muted, toggleMute, playBlip };
}
