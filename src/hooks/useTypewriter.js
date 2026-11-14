import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(text, speed = 32, onCharacter) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsDone(false);
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      const nextSlice = text.slice(0, index);
      setDisplayedText(nextSlice);

      const currentChar = text[index - 1];
      if (currentChar && currentChar !== ' ' && currentChar !== '*' && onCharacter) {
        onCharacter();
      }

      if (index >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onCharacter]);

  const skip = useCallback(() => {
    setDisplayedText(text);
    setIsDone(true);
  }, [text]);

  return { displayedText, isDone, skip };
}
