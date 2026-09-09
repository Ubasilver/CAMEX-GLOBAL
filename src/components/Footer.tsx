import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-olive">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="bg-olive px-6 py-8 md:px-10 md:col-span-2">
          <p className="text-cream text-4xl md:text-5xl font-bold leading-none tracking-wide-sm">
            CAMEX
          </p>
          <p className="text-cream text-xs tracking-ultra uppercase mt-3 opacity-70">
            Federal Registration Assistance
            <br />& Secure Digital Infrastructure
          </p>
        </div>
        <div className="bg-cream px-6 py-8 md:px-10 border-t md:border-t-0 md:border-l border-olive">
          <p className="text-olive text-xs tracking-ultra uppercase font-bold mb-4">
            Contact
          </p>
          <ul className="space-y-2 text-olive text-sm">
            <li className="flex items-center gap-2">
              <Phone size={12} /> +234 803 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={12} /> info@camexglobal.live
            </li>
          </ul>
        </div>
        <div className="bg-cream px-6 py-8 md:px-10 border-t md:border-t-0 md:border-l border-olive">
          <p className="text-olive text-xs tracking-ultra uppercase font-bold mb-4">
            Location
          </p>
          <ul className="space-y-2 text-olive text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={12} /> 14 Allen Avenue, Ikeja
            </li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="bg-olive px-6 py-3 md:px-10 border-t border-dark-line">
        <p className="text-cream text-xs tracking-wide-sm uppercase opacity-50">
          © 2026 Camex Global Concept. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
