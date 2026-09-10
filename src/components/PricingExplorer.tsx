import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { services, serviceCategories, type Service, type ServiceCategory } from '@/data/services';

interface Props {
  onRequestService: (service: Service) => void;
}

function formatPrice(s: Service): string {
  if (s.priceMin === 0 && s.priceMax === 0) return 'Varies';
  if (s.priceMin === s.priceMax) return `₦${s.priceMin.toLocaleString()}`;
  return `₦${s.priceMin.toLocaleString()} – ₦${s.priceMax.toLocaleString()}`;
}

export function PricingExplorer({ onRequestService }: Props) {
  const [filter, setFilter] = useState<ServiceCategory | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let result = services;
    if (filter !== 'All') result = result.filter((s) => s.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [filter, query]);

  return (
    <section id="pricing" className="py-24 bg-ink-950 camex-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">CAMEX / 03 — PRICING</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight mb-2">
            Service Price Explorer
          </h2>
          <p className="text-ink-500 text-base">
            Search and filter all services. Estimated fees — government charges may vary.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-600" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            className="w-full bg-ink-900 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-ink-600 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === cat.id
                  ? 'bg-brand-500 text-white'
                  : 'bg-ink-900 text-ink-400 hover:text-white hover:bg-ink-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="border-t border-white/5">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 py-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-ink-600 uppercase">{s.category}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-base group-hover:text-brand-400 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-ink-500 text-sm mt-0.5 hidden sm:block">{s.description}</p>
                </div>
                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-right">
                    <p className="font-display font-semibold text-white text-sm whitespace-nowrap">
                      {formatPrice(s)}
                    </p>
                    <p className="text-xs text-ink-600">{s.turnaround}</p>
                  </div>
                  <button
                    onClick={() => onRequestService(s)}
                    className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium text-sm whitespace-nowrap"
                  >
                    Request
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="py-16 text-center text-ink-600">
              <p className="text-sm">No services found. Try a different search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
