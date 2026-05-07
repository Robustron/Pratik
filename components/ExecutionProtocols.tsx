'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Neural Network Dashboard',
    description: 'Real-time analytics platform with live data streaming',
    tech: ['React', 'WebSocket', 'PostgreSQL', 'Chart.js'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Quantum State Manager',
    description: 'Advanced state management system for distributed systems',
    tech: ['TypeScript', 'Node.js', 'Redis', 'gRPC'],
    color: 'from-magenta-500 to-purple-500',
  },
  {
    title: 'Consciousness Protocol API',
    description: 'RESTful API with machine learning integration',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    color: 'from-cyan-500 to-magenta-500',
  },
  {
    title: 'Memory Archive System',
    description: 'Distributed file storage with real-time sync',
    tech: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
    color: 'from-green-500 to-cyan-500',
  },
];

export function ExecutionProtocols() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
    },
  };

  const glitchTextVariants = {
    hover: {
      color: ['rgba(34, 211, 238, 1)', 'rgba(236, 72, 153, 1)', 'rgba(34, 211, 238, 1)'],
      textShadow: [
        '0 0 10px rgba(34, 211, 238, 0.8)',
        '0 0 20px rgba(236, 72, 153, 0.8)',
        '0 0 10px rgba(34, 211, 238, 0.8)',
      ],
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />

      <div className="absolute -left-40 top-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-magenta-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">EXECUTION PROTOCOLS</h2>
          <p className="text-slate-400 font-mono text-sm">Deployed systems and operational achievements</p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              variants={hoverVariants}
              className="group relative h-80 rounded-xl overflow-hidden border border-cyan-500/30 cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Card border glow on hover */}
              <motion.div
                className="absolute inset-0 border border-cyan-400/0 rounded-xl"
                whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Title */}
                <motion.div variants={glitchTextVariants}>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </motion.div>

                {/* Tech tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="px-3 py-1 text-xs font-mono bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
