'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { VideoBackground } from './VideoBackground';

const projects = [
  {
    title: 'ARCHON-7',
    category: 'AI / EdTech',
    description:
      'Architected an AI-driven adaptive learning platform integrating the Anthropic Claude API to dynamically generate personalized, multi-module curriculums. Features real-time markdown & diagram rendering, Supabase auth, Redis rate-limiting, and Razorpay subscription monetization.',
    tech: ['TypeScript', 'Claude API', 'Supabase', 'Redis', 'Razorpay', 'Vercel'],
    color: 'from-purple-500/10 to-cyan-500/10',
    accent: 'border-purple-500/30',
    accentText: 'text-purple-300',
    liveLink: 'https://archon-7.vercel.app/',
    githubLink: 'https://github.com/Robustron/ARCHON-7',
    mockup: '/archon_aesthetic.png',
  },
  {
    title: 'ConnectHub',
    category: 'Full-Stack',
    description:
      'Engineered a full-stack hyperlocal marketplace & civic tracker using Next.js 15, TypeScript, and Leaflet Maps. Features a dual-mode service adapter bridging LocalStorage with cloud Supabase/PostgreSQL, real-time geolocation matching via Haversine formula, and instant messaging.',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Leaflet', 'PostgreSQL'],
    color: 'from-cyan-500/10 to-blue-500/10',
    accent: 'border-cyan-500/30',
    accentText: 'text-cyan-300',
    liveLink: 'https://connecthubb-alpha.vercel.app/',
    githubLink: 'https://github.com/Robustron/Connecthubb',
    mockup: '/connecthub_aesthetic.png',
  },
  {
    title: 'ChronoX',
    category: 'Web3 / Marketplace',
    description:
      'Architected a full-stack realtime marketplace for tokenizing professional time with dual synchronized portals. Custom biometric simulation engine dynamically reprices time blocks, and a blockchain-ready asset layer mirrors booking slots to ERC-1155 payloads.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Framer Motion', 'ERC-1155'],
    color: 'from-amber-500/10 to-orange-500/10',
    accent: 'border-amber-500/30',
    accentText: 'text-amber-300',
    liveLink: 'https://chrono-x-cyan.vercel.app/',
    githubLink: 'https://github.com/Robustron/ChronoX',
    mockup: '/chronox_aesthetic.png',
  },
  {
    title: 'EventEase',
    category: 'Full-Stack',
    description:
      'Dual-portal event vendor marketplace using React, TypeScript, and Vite with Context API for role-based routing. Real-time Firestore sync with optimized client-side sorting, strict RBAC via Firestore Security Rules, and Google Gemini AI integration for intelligent input parsing.',
    tech: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'Vite'],
    color: 'from-cyan-500/10 to-teal-500/10',
    accent: 'border-cyan-500/30',
    accentText: 'text-cyan-300',
    liveLink: 'https://eventease-nine.vercel.app/',
    githubLink: 'https://github.com/Robustron/Eventease',
    mockup: '/eventease_aesthetic.png',
  },
  {
    title: 'UniAgriq Tech',
    category: 'AI / AgriTech',
    description:
      'AI-Powered Precision Agriculture Platform with a serverless data pipeline orchestrating NASA POWER, Sentinel-2, and Open-Meteo APIs. Integrates 15+ Anthropic Claude endpoints for yield modeling, OCR soil telemetry, and CV-based plant pathology. React-Leaflet GIS module with NDVI mapping.',
    tech: ['Next.js 16', 'Claude AI', 'Supabase', 'Redis', 'Leaflet', 'GeoJSON'],
    color: 'from-green-500/10 to-emerald-500/10',
    accent: 'border-green-500/30',
    accentText: 'text-green-300',
    liveLink: '',
    githubLink: '',
    restricted: true,
    mockup: '/uniagriq_tech_aesthetic.png',
  },
  {
    title: 'UniAgriq Business',
    category: 'Marketplace',
    description:
      'Scalable two-sided agricultural marketplace with integrated social networking modules. Data-driven financial modeling with Razorpay payment processing, Supabase (PostgreSQL) backend with complex RBAC, and a centralized admin dashboard for platform moderation.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Razorpay', 'PostgreSQL'],
    color: 'from-emerald-500/10 to-cyan-500/10',
    accent: 'border-emerald-500/30',
    accentText: 'text-emerald-300',
    liveLink: '',
    githubLink: '',
    restricted: true,
    mockup: '/uniagriq_business_aesthetic.png',
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
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="w-full h-full max-w-6xl mx-auto">
      <div className={`relative w-full h-full rounded-[32px] border border-white/10 ${project.accent} bg-slate-950/85 backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-stretch justify-between gap-4 md:gap-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10`}>
        {/* Background gradient details */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 pointer-events-none`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Left Column - Details */}
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            {/* Header info */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl md:text-4xl font-black font-mono tracking-tight text-slate-500/40 select-none">
                {num}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 bg-cyan-500/5 border border-cyan-500/20 px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 gradient-text-3d leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 font-light text-[13px] md:text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Restricted payload notice */}
            {project.restricted && (
              <div className="mb-4 px-3 py-2 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-2">
                <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-amber-300/80 text-[11px] font-mono leading-relaxed">
                  NDA Protected: Source code and yield model blueprints are restricted.
                </p>
              </div>
            )}
          </div>

          <div>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] font-mono bg-slate-900/60 border border-slate-800 text-slate-400 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              {project.restricted ? (
                <span className="px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-[11px] font-semibold tracking-wider uppercase font-mono flex items-center gap-2">
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
                      className="btn-glow-violet px-4 py-2 flex items-center justify-center gap-2 text-white text-[11px] font-semibold tracking-wider uppercase font-mono select-none"
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
                      className="px-4 py-2 rounded-full border border-slate-700 bg-slate-950 text-slate-300 text-[11px] font-semibold tracking-wider uppercase font-mono hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 select-none"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Classy Thematic Photo */}
        <div className="flex-1 min-h-[180px] md:min-h-[250px] lg:min-h-0 flex items-center justify-center relative overflow-hidden rounded-[20px] border border-slate-800/80 shadow-2xl z-10">
          <img
            src={project.mockup}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 select-none"
          />
        </div>
      </div>
    </div>
  );
}

export function ExecutionProtocols() {
  const vid1 = "https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8";
  const vid2 = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  return (
    <>
      {/* Slide 1: Title + First Project */}
      <div id="projects" className="snap-start snap-always h-[100dvh] w-full flex flex-col items-center justify-center pt-8 pb-4 px-4 sm:px-6 relative z-10 overflow-hidden">
        <VideoBackground url={vid1} />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
            EXECUTION PROTOCOLS
          </h2>
          <p className="text-slate-400 font-mono text-[11px]">
            Deployed systems and operational achievements
          </p>
        </motion.div>

        {/* First Project Card */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-[70vh]"
        >
          <ProjectCard project={projects[0]} index={0} totalCards={projects.length} />
        </motion.div>
      </div>

      {/* Remaining Projects: Centered Slides */}
      {projects.slice(1).map((project, i) => {
        const videoUrl = (i + 1) % 2 === 0 ? vid1 : vid2;
        return (
          <div key={project.title} className="snap-start snap-always h-[100dvh] w-full flex items-center justify-center px-4 sm:px-6 relative z-10 overflow-hidden">
            <VideoBackground url={videoUrl} />

            <motion.div
              initial={{ opacity: 0, x: ((i + 1) % 2 === 0) ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full h-[75vh]"
            >
              <ProjectCard project={project} index={i + 1} totalCards={projects.length} />
            </motion.div>
          </div>
        );
      })}
    </>
  );
}
