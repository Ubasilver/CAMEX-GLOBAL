import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services, type Service } from '@/data/services';

interface Props {
  onRequestService: (service: Service) => void;
}

function formatPrice(s: Service): string {
  if (s.priceMin === 0 && s.priceMax === 0) return 'Varies';
  if (s.priceMin === s.priceMax) return `${s.currency}${s.priceMin.toLocaleString()}`;
  return `${s.currency}${s.priceMin.toLocaleString()} – ${s.currency}${s.priceMax.toLocaleString()}`;
}

export function FeaturedServices({ onRequestService }: Props) {
  const featured = services.filter((s) => s.featured).slice(0, 6);

  return (
    <section className="py-24 bg-ink-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">CAMEX / 02 — POPULAR</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight">
            Popular Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {featured.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group bg-ink-900 hover:bg-ink-800 p-8 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-ink-600 uppercase tracking-wider">
                  {s.category}
                </span>
                <span className="font-mono text-xs text-ink-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-brand-400 transition-colors">
                {s.name}
              </h3>
              <p className="text-ink-500 text-sm mb-6 flex-1 leading-relaxed">{s.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-ink-600 mb-0.5">Estimated fee</p>
                  <p className="font-display font-semibold text-white text-sm">{formatPrice(s)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-600 mb-0.5">Turnaround</p>
                  <p className="text-sm text-ink-300">{s.turnaround}</p>
                </div>
              </div>
              <button
                onClick={() => onRequestService(s)}
                className="mt-6 inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-medium text-sm group/btn"
              >
                Request Service
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-600">
          Estimated service fees. Official government charges and process requirements may vary.
        </p>
      </div>
    </section>
  );
}
