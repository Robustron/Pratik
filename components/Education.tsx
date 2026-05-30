'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'University of Mumbai',
    period: '2022 – 2026',
    status: 'Currently Pursuing',
    highlights: [
      'Focus on AI, ML, and Full-Stack Development',
      'Strong foundation in data structures and algorithms',
      'Active participation in hackathons and innovation competitions',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function Education() {
  return (
    <section className="min-h-screen py-20 px-6 w-full max-w-4xl mx-auto flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50 -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-magenta-500/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">EDUCATION</h2>
          <p className="text-slate-400 font-mono text-xs">Academic foundation and learning journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
              className="p-8 border-l-2 border-cyan-400 pl-8 bg-gradient-to-r from-cyan-500/5 to-magenta-500/5 rounded-r-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-magenta-500/10 transition-all"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold text-cyan-300 mb-2"
              >
                {edu.degree}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-magenta-300 font-semibold mb-1"
              >
                {edu.institution}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 text-sm text-slate-400 mb-6 font-mono"
              >
                <span>{edu.period}</span>
                <span className="text-cyan-400">{edu.status}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                {edu.highlights.map((highlight, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="text-slate-400 text-sm flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{highlight}</span>
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
