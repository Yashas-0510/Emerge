'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
  const phone = '09606292814';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Emerge!%20I%27m%20interested%20in%20joining.`;

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Hook + WhatsApp */}
          <SectionReveal>
            <span className="text-white/40 font-inter font-semibold tracking-[0.2em] uppercase text-xs">Contact</span>
            <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3 mb-6 leading-tight">
              Ready to<br />
              <span className="text-[#d4ff00]">Transform?</span>
            </h2>
            <p className="text-white/50 font-inter text-sm leading-relaxed mb-10 max-w-sm">
              Your first session is on us. No commitments, no pressure — just come see
              what Emerge feels like. We&apos;ll take care of the rest.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4ff00] text-black font-inter font-bold text-sm uppercase tracking-[0.15em] rounded hover:bg-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </SectionReveal>

          {/* Right: Info */}
          <SectionReveal delay={0.15}>
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Rajarajeshwari Nagar, Bangalore',
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
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <p className="text-white/30 font-inter text-[10px] uppercase tracking-widest mb-1">{label}</p>
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
