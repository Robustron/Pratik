'use client';

import { motion } from 'framer-motion';

export function NeuralCore() {
  const ringVariants = {
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: 'linear',
      },
    }),
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const glitchVariants = {
    animate: {
      textShadow: [
        '0 0 20px rgba(34, 211, 238, 0.5)',
        '0 0 30px rgba(236, 72, 153, 0.3)',
        '0 0 20px rgba(34, 211, 238, 0.5)',
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Rotating rings - centered */}
        <div className="relative w-96 h-96 flex items-center justify-center">
          {/* Ring 1 - Cyan */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-cyan-500/40"
            custom={0}
            variants={ringVariants}
            animate="animate"
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
          </motion.div>

          {/* Ring 2 - Magenta */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-magenta-500/30"
            custom={1}
            variants={ringVariants}
            animate="animate"
            style={{ borderColor: 'rgba(236, 72, 153, 0.3)' }}
          >
            <div
              className="absolute top-0 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2"
              style={{ backgroundColor: 'rgb(236, 72, 153)' }}
            />
          </motion.div>

          {/* Ring 3 - Cyan inner */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-cyan-400/50"
            custom={2}
            variants={ringVariants}
            animate="animate"
          >
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full transform -translate-x-1/2" />
          </motion.div>

          {/* Center core */}
          <motion.div
            className="relative w-12 h-12 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full blur-lg opacity-60" />
            <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-full shadow-lg shadow-cyan-400/50" />
          </motion.div>
        </div>

        {/* Text content - positioned absolutely on the right */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-md pr-20"
        >
          <motion.h1
            variants={glitchVariants}
            animate="animate"
            className="text-5xl md:text-6xl font-bold mb-6 text-cyan-300"
          >
            SENTIENT
            <br />
            OS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-300 mb-8 font-light"
          >
            Advanced digital consciousness. Crafting intelligent systems through full-stack development.
          </motion.p>

          {/* Call to action button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-cyan-400 text-cyan-300 font-mono text-sm rounded hover:bg-cyan-400/10 transition-colors"
          >
            EXPLORE SYSTEMS →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
