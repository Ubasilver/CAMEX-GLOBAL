import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/services';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ink-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">CAMEX / 06 — ABOUT</p>
            <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight mb-6 leading-tight">
              Local roots.
              <br />
              Digital ambition.
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed mb-6">
              CAMEX provides accessible digital, printing, documentation and technology services
              to individuals, students, job seekers, entrepreneurs and businesses in Lagos.
            </p>
            <p className="text-ink-500 text-base leading-relaxed mb-8">
              From NIN registration to professional printing, from document formatting to digital
              skills training — we handle the details so you can focus on what matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-sm text-ink-300">
                <MapPin size={18} className="text-brand-400 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-300">
                <Clock size={18} className="text-brand-400 flex-shrink-0" />
                <span>Open 24/7</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-ink-950 camex-grid relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin size={36} className="text-brand-400" strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-xs text-ink-600 uppercase tracking-wider mb-2">
                    CAMEX HQ
                  </p>
                  <p className="text-white font-medium text-sm max-w-xs mx-auto leading-relaxed">
                    {companyInfo.addressShort}
                  </p>
                  <a
                    href={companyInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 text-sm font-medium"
                  >
                    Get Directions
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              {/* Decorative grid lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
