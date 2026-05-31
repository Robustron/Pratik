'use client';

import { motion } from 'framer-motion';
import { VideoBackground } from './VideoBackground';

const certifications = [
  { title: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services' },
  { title: 'Google Data Analytics', issuer: 'Google' },
  { title: 'Google AI Essentials', issuer: 'Google' },
  { title: 'Google Prompt Engineering', issuer: 'Google' },
  { title: 'GrowthSchool GenAI Specialist', issuer: 'GrowthSchool' },
  { title: 'AI Entrepreneurship Certification', issuer: 'GrowthSchool' },
];

const achievements = [
  { title: 'AIR 7 — Smart India Hackathon 2025', description: 'National level AI hackathon achievement' },
  { title: 'AIR 4 — All India Maths Science Talent Search Examination', description: 'Top all-India ranking in competitive examination' },
  { title: '2nd Place — Insignia Idea Event', description: 'Innovation competition achievement' },
  { title: '3rd Place — Ideathon, KJ Somaiya College', description: 'College-level ideation competition' },
  { title: 'College Chess Winner 1st place (1764)', description: 'Champion in college chess tournament' },
  { title: 'Winner — College Debate Competition', description: 'Debate championship victory' },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
    backgroundColor: 'rgba(34, 211, 238, 0.05)',
  },
};

export function Credentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen py-10 px-6 w-full max-w-6xl mx-auto flex flex-col justify-center relative overflow-hidden"
    >
      <VideoBackground url="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />

      <div className="relative z-10 w-full mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">CREDENTIALS</h2>
          <p className="text-slate-400 font-mono text-xs">Certifications, achievements, and recognition</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-magenta-400 mb-8">CERTIFICATIONS</h3>
            <motion.div className="space-y-4" variants={containerVariants}>
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover="hover"
                  variants={hoverVariants}
                  className="p-5 border border-cyan-500/30 rounded-lg backdrop-blur-sm cursor-pointer transition-all"
                >
                  <p className="text-cyan-300 font-semibold text-sm">{cert.title}</p>
                  <p className="text-slate-500 text-xs mt-2 font-mono">{cert.issuer}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-magenta-400 mb-8">ACHIEVEMENTS</h3>
            <motion.div className="space-y-4" variants={containerVariants}>
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover="hover"
                  variants={hoverVariants}
                  className="p-5 border border-magenta-500/30 rounded-lg backdrop-blur-sm cursor-pointer transition-all"
                >
                  <p className="text-magenta-300 font-semibold text-sm">{achievement.title}</p>
                  <p className="text-slate-500 text-xs mt-2">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
