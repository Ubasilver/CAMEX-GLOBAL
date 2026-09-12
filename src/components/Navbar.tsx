import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/services';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#training', label: 'Training' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/camex-logo.png" alt="CAMEX GLOBAL" className="h-8 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 hover:border-accent-green/50 hover:text-accent-green flex items-center justify-center text-ink-300 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden bg-ink-950"
          >
            <div className="flex items-center justify-between h-16 px-5">
              <img src="/camex-logo.png" alt="CAMEX GLOBAL" className="h-7 w-auto" />
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white p-1">
                <X size={24} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col px-5 pt-8 gap-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-2xl font-display font-semibold text-white py-3 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="btn-whatsapp mt-6 w-full justify-center"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="btn-primary mt-3 w-full justify-center"
              >
                Get Started
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
