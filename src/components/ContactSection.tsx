import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { companyInfo, services } from '@/data/services';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = new FormData(e.currentTarget);
    const { error: insertError } = await supabase.from('nin_bookings').insert({
      full_name: form.get('name'),
      phone: form.get('phone'),
      preferred_date: new Date().toISOString().split('T')[0],
      service_type: form.get('service'),
      notes: form.get('message'),
    });
    setLoading(false);
    if (insertError) {
      setError('Something went wrong. Please call or WhatsApp us directly.');
      return;
    }
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24 bg-ink-950 camex-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">CAMEX / 07 — CONTACT</p>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight">
            Let's get it done.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-lg bg-white/5 group-hover:bg-brand-500/10 flex items-center justify-center text-ink-400 group-hover:text-brand-400 transition-colors flex-shrink-0">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-ink-600 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-white font-medium">{companyInfo.phoneDisplay}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-ink-400 flex-shrink-0">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-ink-600 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${companyInfo.email1}`} className="text-white font-medium block hover:text-brand-400 transition-colors">
                  {companyInfo.email1}
                </a>
                <a href={`mailto:${companyInfo.email2}`} className="text-ink-400 text-sm hover:text-brand-400 transition-colors">
                  {companyInfo.email2}
                </a>
              </div>
            </div>

            <a href={companyInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-lg bg-white/5 group-hover:bg-brand-500/10 flex items-center justify-center text-ink-400 group-hover:text-brand-400 transition-colors flex-shrink-0">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-ink-600 uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-medium leading-relaxed whitespace-pre-line">
                  {companyInfo.address}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-ink-400 flex-shrink-0">
                <Clock size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-ink-600 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-white font-medium">{companyInfo.hours}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-ink-900/50 border border-white/5 rounded-2xl p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 size={48} className="text-accent-green mb-4" />
                <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent</h3>
                <p className="text-ink-400 text-sm mb-6">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand-400 hover:text-brand-300 font-medium text-sm">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-ink-400 mb-1.5">Name</label>
                  <input
                    id="name" name="name" required
                    className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-ink-400 mb-1.5">Phone</label>
                  <input
                    id="phone" name="phone" required
                    className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="+234 ..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink-400 mb-1.5">Email</label>
                  <input
                    id="email" name="email" type="email"
                    className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-ink-400 mb-1.5">Service</label>
                  <select
                    id="service" name="service"
                    className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-ink-400 mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" rows={3}
                    className="w-full bg-ink-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-ink-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
