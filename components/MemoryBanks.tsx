'use client';

import { motion } from 'framer-motion';

const skills = [
  { label: 'LangChain', category: 'AI/ML' },
  { label: 'Gemini API', category: 'AI/ML' },
  { label: 'RAG Systems', category: 'AI/ML' },
  { label: 'Vector DB (FAISS, Pinecone)', category: 'AI/ML' },
  { label: 'TensorFlow', category: 'AI/ML' },
  { label: 'Python', category: 'Programming' },
  { label: 'JavaScript', category: 'Programming' },
  { label: 'TypeScript', category: 'Programming' },
  { label: 'SQL', category: 'Programming' },
  { label: 'FastAPI', category: 'Backend' },
  { label: 'Firebase', category: 'Backend' },
  { label: 'Supabase', category: 'Backend' },
  { label: 'MongoDB', category: 'Backend' },
  { label: 'AWS', category: 'Cloud' },
  { label: 'Docker', category: 'Cloud' },
  { label: 'React', category: 'Frontend' },
  { label: 'Vite', category: 'Frontend' },
  { label: 'Tailwind CSS', category: 'Frontend' },
  { label: 'Streamlit', category: 'Frontend' },
  { label: 'SHAP', category: 'Tools' },
  { label: 'OpenCV', category: 'Tools' },
  { label: 'YOLOv8', category: 'Tools' },
  { label: 'Git', category: 'Tools' },
  { label: 'Vercel', category: 'Tools' },
];

const experience = [
  {
    role: 'AI & Backend Developer Intern',
    company: 'IBM CSRBOX',
    period: 'July 2025 - Aug 2025',
    description: 'Led team of 8 developers building AI-powered textbook generation platform with RAG architecture using LangChain, Gemini API, and FAISS.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Profive Engineering',
    period: 'June 2025',
    description: 'Analyzed engineering datasets using Python and Pandas to derive operational insights and support material performance evaluation.',
  },
];

export function MemoryBanks() {
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

  const floatVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -20, 0],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  const hoverVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
    },
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">MEMORY BANKS</h2>
          <p className="text-slate-400 font-mono text-sm">Core competencies and operational history</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-magenta-400 mb-8">SKILLS</h3>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-3"
              variants={containerVariants}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  custom={i}
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={hoverVariants}
                  className="p-4 border border-cyan-500/30 rounded-lg backdrop-blur-sm cursor-pointer transition-all"
                >
                  <p className="text-cyan-300 font-mono text-xs font-semibold">{skill.label}</p>
                  <p className="text-slate-500 text-xs mt-1">{skill.category}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-magenta-400 mb-8">EXPERIENCE</h3>

            <motion.div className="space-y-4" variants={containerVariants}>
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="p-6 border-l-2 border-cyan-400 pl-6 hover:bg-cyan-400/5 transition-colors"
                >
                  <p className="text-cyan-300 font-mono font-semibold">{exp.role}</p>
                  <p className="text-slate-400 text-sm mt-1">{exp.company}</p>
                  <p className="text-slate-500 text-xs mt-1 font-mono">{exp.period}</p>
                  <p className="text-slate-400 text-sm mt-3">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
