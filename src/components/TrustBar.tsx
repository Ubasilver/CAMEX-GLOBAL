import { motion } from 'framer-motion';
import { trustItems } from '@/data/services';

export function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-ink-900/50 py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-ink-400">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
