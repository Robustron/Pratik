'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none mix-blend-screen"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none mix-blend-screen"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="w-6 h-6 border border-cyan-400/60 rounded-full shadow-lg shadow-cyan-500/30" />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed pointer-events-none mix-blend-screen"
        animate={{ x: mousePosition.x - 18, y: mousePosition.y - 18 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="w-9 h-9 border border-cyan-400/30 rounded-full" />
      </motion.div>
    </>
  );
}
