import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10">
      <div className="bg-white/40 backdrop-blur-md p-12 rounded-3xl shadow-xl max-w-2xl border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-rose)] to-[var(--accent-teal)]"></div>
        <h1 className="font-display text-5xl font-bold mb-6 tracking-tight text-[var(--ink)]">
          Foundation Template
        </h1>
        <p className="text-lg text-[var(--ink)] mb-10 opacity-80 leading-relaxed font-sans">
          This is a robust, clean starter foundation utilizing Next.js, 
          Tailwind CSS v4, and a beautiful custom theme inspired by previous projects. 
          Ready for your next big idea.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-label">
          <a
            href="#"
            className="px-6 py-3 bg-[var(--accent-gold)] text-[var(--ink)] font-semibold rounded-lg hover:bg-[var(--accent-rose)] hover:text-white transition-all duration-300 shadow-sm"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white/60 text-[var(--ink)] font-semibold rounded-lg hover:bg-white/80 transition-all duration-300 shadow-sm border border-[var(--ink)]/10"
          >
            View Components
          </a>
        </div>
      </div>
    </main>
  );
}
