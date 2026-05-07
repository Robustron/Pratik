'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { BootSequence } from '@/components/BootSequence';
import { NeuralCore } from '@/components/NeuralCore';
import { MemoryBanks } from '@/components/MemoryBanks';
import { ExecutionProtocols } from '@/components/ExecutionProtocols';
import { QueryInterface } from '@/components/QueryInterface';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden cursor-custom">
      <CustomCursor />
      
      {/* Boot Sequence - Initial intro */}
      <BootSequence />

      {/* Neural Core - Hero section */}
      <NeuralCore />

      {/* Memory Banks - Skills and experience */}
      <MemoryBanks />

      {/* Execution Protocols - Projects */}
      <ExecutionProtocols />

      {/* Query Interface - Contact */}
      <QueryInterface />

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-8 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center text-slate-400 font-mono text-sm">
          <p>&copy; 2024 SENTIENT OS. All consciousness protocols reserved.</p>
        </div>
      </footer>
    </main>
  );
}
