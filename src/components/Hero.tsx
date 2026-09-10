import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/services';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const headlineWords = ['Your', 'Digital', 'World.', 'Handled.'];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950 camex-grid"
    >
      {/* Mouse glow */}
      <div
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, #3380f5 0%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-900/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-700/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-300">Open 24/7</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
              className={`inline-block mr-3 ${i >= 2 ? 'text-brand-400' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg sm:text-xl text-ink-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fast internet, professional printing, NIN services, document solutions and digital skills — all under one roof in Lagos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#services" className="btn-primary group">
            Explore Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-ink-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
