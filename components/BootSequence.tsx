'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function BootSequence() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '> SENTIENT_OS_v1.0 INITIALIZED';
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Terminal-style container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-cyan-500/50 rounded-lg p-8 bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-cyan-500/20"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-cyan-400 text-sm font-mono">BOOT_SEQUENCE</span>
          </div>

          {/* Typing animation text */}
          <div className="space-y-4">
            <motion.p
              className="font-mono text-lg text-cyan-300 glow-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {displayText}
              {!isComplete && <span className="animate-pulse">▊</span>}
            </motion.p>

            {/* Boot log lines that appear after main text */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2 text-cyan-400/70 text-sm font-mono"
              >
                <p>[✓] Memory cores activated</p>
                <p>[✓] Neural pathways synchronized</p>
                <p>[✓] Consciousness protocols loaded</p>
                <p className="text-cyan-300 glow-cyan">[✓] Ready for interaction</p>
              </motion.div>
            )}
          </div>

          {/* Blinking cursor */}
          {!isComplete && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="mt-4 w-2 h-6 bg-cyan-400"
            />
          )}
        </motion.div>

        {/* Scroll prompt */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.p
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 text-sm font-mono"
            >
              ↓ SCROLL TO EXPLORE ↓
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
