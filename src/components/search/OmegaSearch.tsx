'use client'

import { useState } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OmegaSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-50 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center"
      >
        <Sparkles size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center pt-32 px-10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white uppercase tracking-widest text-sm"
            >
              Close
            </button>

            <div className="w-full max-w-4xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50" size={32} />
              <input 
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask the AI Fashion Engine..."
                className="w-full bg-white/5 border border-white/20 rounded-full py-6 pl-20 pr-10 text-2xl text-white placeholder-white/30 outline-none focus:border-white transition-colors font-serif"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-xs font-bold">
                ↵ Enter
              </div>
            </div>

            <div className="w-full max-w-4xl mt-12">
              <p className="text-white/50 uppercase tracking-widest text-xs mb-6">Suggested Queries</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Show emerging sustainable designers from Seoul",
                  "What is Nova Rae's latest campaign?",
                  "Analyze the influence of Maison Vertex",
                  "Summarize Paris Fashion Week trends 2026"
                ].map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => setQuery(q)}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white hover:text-black transition-colors text-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
