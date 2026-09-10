import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ninCategories, services, companyInfo, buildWhatsAppLink } from '@/data/services';

export function NINSection() {
  return (
    <section id="nin" className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 camex-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-900/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">CAMEX / 04 — IDENTITY</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight mb-4">
            Need help with your NIN?
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl leading-relaxed">
            From fresh enrolment to corrections and updates, get professional assistance with your NIN-related services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ninCategories.map((cat, ci) => {
            const catServices = services.filter((s) => cat.items.includes(s.name));
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="border border-white/5 rounded-xl p-6 bg-ink-950/50"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-brand-400">0{ci + 1}</span>
                  <h3 className="font-display font-semibold text-white text-lg">{cat.label}</h3>
                </div>
                <ul className="space-y-3">
                  {catServices.map((s) => (
                    <li key={s.name} className="flex flex-col gap-1 pb-3 border-b border-white/5 last:border-0">
                      <span className="text-sm text-ink-200 font-medium">{s.name}</span>
                      <div className="flex items-center gap-3 text-xs text-ink-600">
                        <span>
                          {s.priceMin === 0 && s.priceMax === 0
                            ? 'Fee varies'
                            : `₦${s.priceMin.toLocaleString()} – ₦${s.priceMax.toLocaleString()}`}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-ink-700" />
                        <span>{s.turnaround}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href={buildWhatsAppLink('Gooday sir, I need help with my NIN services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Explore NIN Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-ink-600 max-w-md">
            CAMEX provides assistance and application support. We are not a government agency. Official government charges and process requirements may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
