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

      {/* Education */}
      <Education />

      {/* Credentials - Certifications and Achievements */}
      <Credentials />

      {/* Query Interface - Contact */}
      <QueryInterface />

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-cyan-300 font-bold mb-4">CONTACT</h3>
              <p className="text-slate-400 text-sm mb-2">📧 posj2004@gmail.com</p>
              <p className="text-slate-400 text-sm mb-2">📱 +91 8097081504</p>
              <p className="text-slate-400 text-sm">📍 Navi Mumbai, Maharashtra</p>
            </div>
            <div>
              <h3 className="text-magenta-300 font-bold mb-4">SOCIAL</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-magenta-400 hover:text-magenta-300 text-sm">GitHub</a>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 font-mono text-xs border-t border-slate-700 pt-8">
            <p>&copy; 2025 Pratik Jadhav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
