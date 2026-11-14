import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 30, onChar) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setIsDone(false);
    if (!text) return;

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      setDisplayed(text.slice(0, idx));
      if (onChar && text[idx - 1] !== ' ') onChar();
      if (idx >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onChar]);

  const skip = () => {
    setDisplayed(text);
    setIsDone(true);
  };

  return { displayed, isDone, skip };
}
