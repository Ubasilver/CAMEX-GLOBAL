import { motion } from 'framer-motion';
import { Wifi, Printer, FileText, ShieldCheck, Brush, BookOpen, ArrowRight } from 'lucide-react';
import { serviceExplorerCategories } from '@/data/services';

const iconMap: Record<string, typeof Wifi> = {
  wifi: Wifi,
  printer: Printer,
  file: FileText,
  shield: ShieldCheck,
  brush: Brush,
  book: BookOpen,
};

export function ServicesExplorer() {
  return (
    <section id="services" className="py-24 bg-ink-950 camex-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">CAMEX / 01 — SERVICES</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Everything you need.
            <br />
            <span className="text-ink-500">One trusted place.</span>
          </h2>
        </motion.div>

        <div className="border-t border-white/5">
          {serviceExplorerCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.a
                key={cat.num}
                href="#pricing"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex items-center gap-6 py-7 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
              >
                <span className="font-mono text-sm text-ink-600 group-hover:text-brand-400 transition-colors w-12">
                  {cat.num}
                </span>
                <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-brand-500/10 flex items-center justify-center text-ink-400 group-hover:text-brand-400 transition-all duration-300 flex-shrink-0">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl group-hover:text-brand-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-ink-500 text-sm sm:text-base mt-1">{cat.desc}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-ink-600 group-hover:text-brand-400 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0"
                />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10">
          <a href="#pricing" className="text-brand-400 hover:text-brand-300 font-medium text-sm inline-flex items-center gap-1 group">
            View all services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
