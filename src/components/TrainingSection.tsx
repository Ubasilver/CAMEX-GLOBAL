import { motion } from 'framer-motion';
import { Palette, Code, FileText, Monitor, Keyboard, ArrowRight } from 'lucide-react';
import { trainingAreas, companyInfo, buildWhatsAppLink } from '@/data/services';

const iconMap: Record<string, typeof Palette> = {
  palette: Palette,
  code: Code,
  file: FileText,
  monitor: Monitor,
  keyboard: Keyboard,
};

export function TrainingSection() {
  return (
    <section id="training" className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-800/15 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">CAMEX / 05 — TRAINING</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight mb-4">
            Learn skills that
            <br />
            move you forward.
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl">
            Beginner-friendly training in a professional environment. Practical learning with real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainingAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative border border-white/5 rounded-xl p-8 hover:border-brand-500/30 transition-colors duration-300 bg-ink-900/50"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">{area.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{area.desc}</p>
                <span className="absolute top-6 right-6 font-mono text-xs text-ink-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={buildWhatsAppLink('Gooday sir, I am interested in digital skills training at CAMEX.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Start Learning
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
