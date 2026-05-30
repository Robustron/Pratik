'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export function QueryInterface() {
  const [messages, setMessages] = useState<string[]>([
    '> INITIALIZING CONTACT PROTOCOL...',
    '[✓] Awaiting user input',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value.trim()) {
      const userInput = inputRef.current.value;
      setMessages([...messages, `> ${userInput}`]);
      inputRef.current.value = '';

      // Processing message
      setTimeout(() => {
        setMessages((prev) => [...prev, '[✓] Message received, initiating transmission...']);
      }, 300);

      try {
        // We use Web3Forms which is free and sends directly to your email without a backend
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            // Get your free access key from https://web3forms.com/
            access_key: 'aa883d8d-570b-4d1c-b0bf-a0fe31c56891', 
            name: 'Robustron Portfolio Terminal',
            email: 'posj2004@gmail.com',
            message: userInput,
          }),
        });

        if (response.ok) {
          setTimeout(() => {
            setMessages((prev) => [...prev, '[✓] Transmission successful. Message sent to device.']);
          }, 1000);
        } else {
          setTimeout(() => {
            setMessages((prev) => [...prev, '[X] Transmission failed. Check access key.']);
          }, 1000);
        }
      } catch (error) {
        setTimeout(() => {
          setMessages((prev) => [...prev, '[X] Network error during transmission.']);
        }, 1000);
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 w-full max-w-6xl mx-auto flex flex-col justify-between relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center my-12">
        {/* Section title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">QUERY INTERFACE</h2>
          <p className="text-slate-400 font-mono text-xs">Establish communication protocol</p>
        </motion.div>

        {/* Terminal container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-cyan-500/50 rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-cyan-500/20"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border-b border-cyan-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-cyan-400 text-sm font-mono">CONTACT_TERMINAL</span>
          </div>

          {/* Terminal content */}
          <div className="h-60 overflow-y-auto p-6 space-y-2 font-mono text-sm">
            {/* Messages */}
            {messages.map((message, i) => (
              <motion.p
                key={i}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
                className={`${
                  message.startsWith('>')
                    ? 'text-cyan-300 glow-cyan'
                    : message.startsWith('[X]')
                    ? 'text-red-400/90'
                    : 'text-cyan-400/70'
                }`}
              >
                {message}
              </motion.p>
            ))}

            {/* Animated cursor at end */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-cyan-400"
            >
              ▊
            </motion.span>
          </div>

          {/* Terminal footer - Input form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-cyan-500/30 bg-slate-800/50 p-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-cyan-300 font-mono">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter message..."
                className="flex-1 bg-transparent text-cyan-300 placeholder-cyan-400/40 outline-none font-mono text-sm"
              />
            </div>
          </form>
        </motion.div>
      </div>

      {/* Embedded Footer */}
      <footer className="w-full border-t border-slate-800/40 pt-8 pb-4 z-10 text-center text-slate-500 font-mono text-xs">
        <p>&copy; 2026 Pratik Jadhav. All rights reserved.</p>
      </footer>
    </section>
  );
}
