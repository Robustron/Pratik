'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { BootSequence } from '@/components/BootSequence';
import { NeuralCore } from '@/components/NeuralCore';
import { MemoryBanks } from '@/components/MemoryBanks';
import { ExecutionProtocols } from '@/components/ExecutionProtocols';
import { Education } from '@/components/Education';
import { Credentials } from '@/components/Credentials';
import { QueryInterface } from '@/components/QueryInterface';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 cursor-custom overflow-x-hidden">
      <CustomCursor />
      
      {/* Boot Sequence - Initial intro */}
      <BootSequence />

      {/* Neural Core - Hero section */}
      <NeuralCore />

      {/* Memory Banks - Skills and experience */}
      <MemoryBanks />

      {/* Execution Protocols - Projects */}
      <ExecutionProtocols />

      {/* Education */}
      <Education />

      {/* Credentials - Certifications and Achievements */}
      <Credentials />

      {/* Query Interface - Contact & Footer */}
      <QueryInterface />
    </main>
  );
}
