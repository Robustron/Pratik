'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

const projects = [
  {
    title: 'ARCHON-7',
    category: 'AI / EdTech',
    description:
      'Architected an AI-driven adaptive learning platform integrating the Anthropic Claude API to dynamically generate personalized, multi-module curriculums. Features real-time markdown & diagram rendering, Supabase auth, Redis rate-limiting, and Razorpay subscription monetization.',
    tech: ['TypeScript', 'Claude API', 'Supabase', 'Redis', 'Razorpay', 'Vercel'],
    color: 'from-purple-500/20 to-cyan-500/20',
    accent: 'border-purple-400/40',
    accentText: 'text-purple-300',
    liveLink: 'https://archon-7.vercel.app/',
    githubLink: 'https://github.com/Robustron/ARCHON-7',
  },
  {
    title: 'ConnectHub',
    category: 'Full-Stack',
    description:
      'Engineered a full-stack hyperlocal marketplace & civic tracker using Next.js 15, TypeScript, and Leaflet Maps. Features a dual-mode service adapter bridging LocalStorage with cloud Supabase/PostgreSQL, real-time geolocation matching via Haversine formula, and instant messaging.',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Leaflet', 'PostgreSQL'],
    color: 'from-cyan-500/20 to-blue-500/20',
    accent: 'border-cyan-400/40',
    accentText: 'text-cyan-300',
    liveLink: 'https://connecthubb-alpha.vercel.app/',
    githubLink: 'https://github.com/Robustron/Connecthubb',
  },
  {
    title: 'ChronoX',
    category: 'Web3 / Marketplace',
    description:
      'Architected a full-stack realtime marketplace for tokenizing professional time with dual synchronized portals. Custom biometric simulation engine dynamically reprices time blocks, and a blockchain-ready asset layer mirrors booking slots to ERC-1155 payloads.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Framer Motion', 'ERC-1155'],
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'border-amber-400/40',
    accentText: 'text-amber-300',
    liveLink: 'https://chrono-x-cyan.vercel.app/',
    githubLink: 'https://github.com/Robustron/ChronoX',
  },
  {
    title: 'EventEase',
    category: 'Full-Stack',
    description:
      'Dual-portal event vendor marketplace using React, TypeScript, and Vite with Context API for role-based routing. Real-time Firestore sync with optimized client-side sorting, strict RBAC via Firestore Security Rules, and Google Gemini AI integration for intelligent input parsing.',
    tech: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'Vite'],
    color: 'from-cyan-500/20 to-teal-500/20',
    accent: 'border-cyan-400/40',
    accentText: 'text-cyan-300',
    liveLink: 'https://eventease-nine.vercel.app/',
    githubLink: 'https://github.com/Robustron/Eventease',
  },
  {
    title: 'UniAgriq Tech',
    category: 'AI / AgriTech',
    description:
      'AI-Powered Precision Agriculture Platform with a serverless data pipeline orchestrating NASA POWER, Sentinel-2, and Open-Meteo APIs. Integrates 15+ Anthropic Claude endpoints for yield modeling, OCR soil telemetry, and CV-based plant pathology. React-Leaflet GIS module with NDVI mapping.',
    tech: ['Next.js 16', 'Claude AI', 'Supabase', 'Redis', 'Leaflet', 'GeoJSON'],
    color: 'from-green-500/20 to-emerald-500/20',
    accent: 'border-green-400/40',
    accentText: 'text-green-300',
    liveLink: '',
    githubLink: '',
    restricted: true,
  },
  {
    title: 'UniAgriq Business',
    category: 'Marketplace',
    description:
      'Scalable two-sided agricultural marketplace with integrated social networking modules. Data-driven financial modeling with Razorpay payment processing, Supabase (PostgreSQL) backend with complex RBAC, and a centralized admin dashboard for platform moderation.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Razorpay', 'PostgreSQL'],
    color: 'from-emerald-500/20 to-cyan-500/20',
    accent: 'border-emerald-400/40',
    accentText: 'text-emerald-300',
    liveLink: '',
    githubLink: '',
    restricted: true,
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const num = String(index + 1).padStart(2, '0');

  return (
    <div ref={containerRef} className="h-[85vh] sticky-card-container">
      <motion.div
        style={{
          scale,
          top: `calc(80px + ${index * 28}px)`,
        }}
        className="sticky h-auto w-full origin-top"
      >
        <div
          className={`relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border-2 ${project.accent} bg-slate-950/90 backdrop-blur-md p-5 sm:p-7 md:p-9 overflow-hidden`}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 pointer-events-none`}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
              {/* Left: Number + Info */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span
                  className={`font-black leading-none tracking-tight ${project.accentText} opacity-50`}
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
                >
                  {num}
                </span>
                <div className="pt-1 sm:pt-2">
                  <p className="text-cyan-400/60 font-mono text-xs sm:text-sm uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3
                    className="font-bold text-cyan-200 tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex gap-3 flex-shrink-0">
                {project.restricted ? (
                  <span className="flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border-2 border-amber-400/40 text-amber-300 font-medium uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap">
                    <Lock className="w-3.5 h-3.5" />
                    NDA Protected
                  </span>
                ) : (
                  <>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border-2 border-cyan-400/40 text-cyan-300 font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-cyan-400/10 transition-colors whitespace-nowrap"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Project
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border-2 border-slate-400/30 text-slate-300 font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-slate-400/10 transition-colors whitespace-nowrap"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-slate-300/80 font-light leading-relaxed mb-6 sm:mb-8 max-w-4xl"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
            >
              {project.description}
            </p>

            {/* Restricted notice */}
            {project.restricted && (
              <div className="mb-6 sm:mb-8 px-4 py-3 rounded-xl border border-amber-400/20 bg-amber-400/5">
                <p className="text-amber-300/70 text-xs sm:text-sm font-mono">
                  ⚠ Due to ongoing commercialization and intellectual property considerations,
                  source code access is provided only after review and NDA execution.
                </p>
              </div>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono bg-cyan-400/8 border border-cyan-400/25 text-cyan-300/90 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExecutionProtocols() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute -left-40 top-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
            EXECUTION PROTOCOLS
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Deployed systems and operational achievements
          </p>
        </motion.div>

        {/* Sticky card stack */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
