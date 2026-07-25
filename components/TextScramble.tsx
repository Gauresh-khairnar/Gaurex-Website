import { useState, useEffect, useRef } from 'react';

const CHARS = '01#$&%*!<>{}[]_+-=/\\?~^';

export default function TextScramble({ text, className = '' }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const isIntersecting = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isIntersecting.current) {
        isIntersecting.current = true;
        scramble();
      }
    }, { threshold: 0.2 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [text]);

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <span
      ref={elementRef}
      className={className}
      onMouseEnter={scramble}
      style={{ cursor: 'default' }}
    >
      {displayText}
    </span>
  );
}
