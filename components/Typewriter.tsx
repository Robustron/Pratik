'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function Typewriter({
  text,
  speed = 15,
  delay = 0,
  className = '',
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
        timeoutId = setTimeout(type, speed);
      }
    };

    const initialDelay = setTimeout(type, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay, isInView, isMounted]);

  if (!isMounted) return <span className={className} />;

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <span className="animate-pulse">_</span>
    </span>
  );
}
