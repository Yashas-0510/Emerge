'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
  const phone = '09606292814';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Emerge!%20I%27m%20interested%20in%20joining.`;

  return (
    <section id="contact" className="relative py-40 overflow-hidden bg-black">
      {/* Ambient blobs */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Hook */}
          <SectionReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: 'rgba(212,255,0,0.3)' }} />
              <span className="text-[10px] font-inter font-semibold tracking-[0.4em] uppercase text-white/30">
                Contact
              </span>
            </div>

            <h2
              className="font-bebas leading-none text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Ready to<br />
              <span className="text-[#d4ff00] text-glow">Transform?</span>
            </h2>

            <p className="text-white/40 font-inter text-sm leading-relaxed mb-12 max-w-sm">
              Your first session is on us. No commitments, no pressure — just come see
              what Emerge feels like. We&apos;ll take care of the rest.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </SectionReveal>

          {/* Right: Info cards */}
          <SectionReveal delay={0.15}>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Rajarajeshwari Nagar,\nBangalore',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 96062 92814',
                },
                {
                  icon: Clock,
                  label: 'Hours',
                  value: 'Mon–Sat: 5:30 AM – 10:30 PM\nSun: 6:00 AM – 1:00 PM',
                },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-6 flex items-start gap-5"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(212,255,0,0.08)', border: '1px solid rgba(212,255,0,0.12)' }}
                  >
                    <Icon className="w-4 h-4 text-[#d4ff00]/60" />
                  </div>
                  <div>
                    <p className="text-[9px] font-inter uppercase tracking-widest text-white/25 mb-1.5">{label}</p>
                    <p className="text-white font-inter text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
