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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text content - left side */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <motion.h1
            variants={glitchVariants}
            animate="animate"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-cyan-300 tracking-tight"
          >
            PRATIK
            <br />
            JADHAV
          </motion.h1>

          <p className="text-cyan-400 font-mono text-sm md:text-base mb-6">
            AI Engineer | Full-Stack Developer
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-slate-300 mb-8 font-light leading-relaxed max-w-lg"
          >
            Co-Founder and Tech Lead specializing in AI, full-stack development, and startup execution. Built and deployed production-grade AI platforms, leading product strategy, user research, and go-to-market initiatives. Passionate about transforming innovative ideas into scalable, secure, and impactful solutions.
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-2 mb-8 text-sm font-mono text-slate-400"
          >
            <p>posj2004@gmail.com</p>
            <p>+91 8097081504</p>
            <p>Navi Mumbai, Maharashtra</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 mb-10"
          >
            <a
              href="https://www.linkedin.com/in/pratik-jadhav-394500212"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-cyan-400/50 text-cyan-300 font-mono text-sm rounded hover:bg-cyan-400/10 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Robustron"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-magenta-400/50 text-magenta-300 font-mono text-sm rounded hover:bg-magenta-400/10 transition-colors"
            >
              GitHub
            </a>
          </motion.div>

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

        {/* Rotating rings - right side */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[400px]">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Ring 1 - Cyan */}
            <motion.div
              className="absolute w-full h-full rounded-full border border-cyan-500/40"
              custom={0}
              variants={ringVariants}
              animate="animate"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
            </motion.div>

            {/* Ring 2 - Magenta */}
            <motion.div
              className="absolute w-4/5 h-4/5 rounded-full border border-magenta-500/30"
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

            {/* Center core / Photo Space */}
            <motion.div
              className="absolute w-3/5 h-3/5 rounded-full border-2 border-cyan-400/50 flex items-center justify-center overflow-hidden bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              animate={{ boxShadow: ['0 0 30px rgba(34,211,238,0.2)', '0 0 50px rgba(34,211,238,0.4)', '0 0 30px rgba(34,211,238,0.2)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0,transparent_70%)]" />
              {/* Replace the src below with your actual photo path (e.g., '/profile.jpg') */}
              <img 
                src="/pratik.png" 
                alt="Pratik Jadhav" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute flex flex-col items-center justify-center text-cyan-400/30 font-mono text-[10px] uppercase tracking-widest -z-10">
                <span>[Photo]</span>
                <span>Space</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
