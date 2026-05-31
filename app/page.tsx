'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { BootSequence } from '@/components/BootSequence';
import { NeuralCore } from '@/components/NeuralCore';
import { MemoryBanks } from '@/components/MemoryBanks';
import { ExecutionProtocols } from '@/components/ExecutionProtocols';
import { Education } from '@/components/Education';
import { Credentials } from '@/components/Credentials';
import { QueryInterface } from '@/components/QueryInterface';

import { useRef } from 'react';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <main 
      ref={mainRef}
      className="bg-slate-950 text-slate-100 cursor-custom overflow-x-hidden w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
    >
      <CustomCursor />
      
      {/* Boot Sequence - Initial intro */}
      <div className="snap-start snap-always w-full"><BootSequence /></div>

      {/* Neural Core - Hero section */}
      <div className="snap-start snap-always w-full"><NeuralCore /></div>

      {/* Memory Banks - Skills and experience */}
      <div className="snap-start snap-always w-full"><MemoryBanks /></div>

      {/* Execution Protocols - Projects */}
      <ExecutionProtocols />

      {/* Education */}
      <div className="snap-start snap-always w-full"><Education /></div>

      {/* Credentials - Certifications and Achievements */}
      <div className="snap-start snap-always w-full"><Credentials /></div>

      {/* Query Interface - Contact & Footer */}
      <div className="snap-start snap-always w-full"><QueryInterface /></div>
    </main>
  );
}
