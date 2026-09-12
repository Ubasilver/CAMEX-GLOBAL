import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { companyInfo } from '@/data/services';

const socialLinks = [
  { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  { icon: Twitter, href: companyInfo.social.x, label: 'X' },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
];

const quickLinks = [
  { href: '#services', label: 'Services' },
  { href: '#nin', label: 'NIN Services' },
  { href: '#training', label: 'Training' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/camex-logo.png" alt="CAMEX GLOBAL" className="h-10 w-auto" />
            </div>
            <p className="text-ink-500 text-sm max-w-xs leading-relaxed mb-6">
              Internet, printing and digital services made easy.
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              <span className="text-xs font-mono uppercase tracking-wider text-ink-400">Open 24/7</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-600 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-600 mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${companyInfo.phone}`} className="text-ink-400 hover:text-white text-sm transition-colors block">
                  {companyInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email1}`} className="text-ink-400 hover:text-white text-sm transition-colors block">
                  {companyInfo.email1}
                </a>
              </li>
              <li className="text-ink-400 text-sm leading-relaxed">
                {companyInfo.addressShort}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-600">© CAMEX GLOBAL. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500/10 flex items-center justify-center text-ink-400 hover:text-brand-400 transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
