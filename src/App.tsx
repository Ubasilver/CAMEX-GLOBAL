import { useState } from 'react';
import {
  Printer, FileText, Wifi, ShieldCheck, MapPin, Clock,
  Phone, Mail, ArrowRight, Menu, X, CheckCircle2, Users, Award, Briefcase,
} from 'lucide-react';
import { OrderForm } from '@/components/OrderForm';

const services = [
  {
    icon: ShieldCheck,
    title: 'NIN Support',
    desc: 'Enrollment tracking, data correction, and fast-track scheduling for your National Identification Number.',
    tag: 'Registration · Correction · Verification',
    image: 'https://images.pexels.com/photos/32081457/pexels-photo-32081457.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Printer,
    title: 'Premium Printing',
    desc: 'Sharp colour and mono printing for official documents, ID slip reprints, and high-resolution output.',
    tag: 'A4 / A3 · Colour / Mono · Same-day',
    image: 'https://images.pexels.com/photos/17235421/pexels-photo-17235421.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: FileText,
    title: 'Document Processing',
    desc: 'Scanning, PDF conversion, form completion, and secure digital delivery to email or drive.',
    tag: 'PDF / JPEG · Scan to email · Fast turnaround',
    image: 'https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Wifi,
    title: 'Secure Network Terminals',
    desc: 'Private workstations with reliable connections for sensitive online tasks and government portals.',
    tag: 'Private booths · Secure browsing · Assisted access',
    image: 'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

const stats = [
  { icon: Users, value: '5,000+', label: 'Clients Served' },
  { icon: CheckCircle2, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '8+', label: 'Years of Service' },
  { icon: Briefcase, value: '6', label: 'Core Services' },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#order', label: 'Book Now' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="brand">
            <ShieldCheck size={26} />
            <span className="brand-name">CAMEX GLOBAL</span>
          </a>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Federal Registration & Digital Services</p>
          <h1 className="hero-title">
            NIN Support.<br />
            <span className="hero-accent">Express Services.</span>
          </h1>
          <p className="hero-subtitle">
            Move through registration, correction, and verification with a team that understands the process.
            Plus premium printing, document processing, and secure network terminals — all under one roof.
          </p>
          <div className="hero-actions">
            <a href="#order" className="btn-primary">
              Book a Slot <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-ghost">View Services</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-inner">
          <div className="about-text">
            <p className="section-label">About Camex</p>
            <h2 className="section-title">Your Trusted Digital Partner</h2>
            <p className="about-desc">
              Camex Global Concept is your go-to hub for digital solutions in Ikeja, Lagos.
              From NIN registration and corrections to high-quality printing, scanning, design,
              and secure internet access — we do it all, and we do it well.
            </p>
            <ul className="about-list">
              <li><CheckCircle2 size={18} /> Fast, reliable, and professional service</li>
              <li><CheckCircle2 size={18} /> Experienced team for government portal assistance</li>
              <li><CheckCircle2 size={18} /> Modern equipment and private workstations</li>
            </ul>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <s.icon size={24} strokeWidth={1.5} />
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-head">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-image">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="service-icon">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="order" className="order">
        <div className="order-inner">
          <div className="order-info">
            <p className="section-label">Schedule Assistance</p>
            <h2 className="section-title">Book a Slot</h2>
            <p className="order-desc">
              Tell us what you need and when you'd like to come in. A Camex representative
              will contact you to confirm your appointment.
            </p>
            <div className="info-list">
              <div className="info-item">
                <Clock size={16} />
                <span>Mon–Sat · 08:00–18:00 WAT</span>
              </div>
              <div className="info-item">
                <MapPin size={16} />
                <span>14 Allen Avenue, Ikeja, Lagos</span>
              </div>
            </div>
          </div>
          <div className="order-form-wrap">
            <OrderForm />
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            <a href="tel:+2348030000000" className="contact-item">
              <Phone size={20} />
              <span className="contact-label">Call Us</span>
              <span className="contact-value">+234 803 000 0000</span>
            </a>
            <a href="mailto:info@camexglobal.live" className="contact-item">
              <Mail size={20} />
              <span className="contact-label">Email Us</span>
              <span className="contact-value">info@camexglobal.live</span>
            </a>
            <a
              href="https://maps.google.com/?q=14+Allen+Avenue+Ikeja+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin size={20} />
              <span className="contact-label">Visit Us</span>
              <span className="contact-value">14 Allen Avenue, Ikeja, Lagos</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <ShieldCheck size={20} />
            <span>CAMEX GLOBAL CONCEPT</span>
          </div>
          <p>&copy; 2026 Camex Global Concept. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
