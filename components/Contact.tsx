'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-surface relative">
      <div className="gradient-orb w-[400px] h-[400px] bg-accent bottom-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">Contact</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3">
            START YOUR
            <span className="text-accent"> JOURNEY</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <SectionReveal>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg border border-accent rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-3">MESSAGE SENT!</h3>
                <p className="text-muted font-inter text-sm">
                  We&apos;ll get back to you within 2 hours. Keep an eye on your phone.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Rahul Sharma' },
                  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'rahul@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs text-accent uppercase tracking-wider font-inter mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white font-inter text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-accent uppercase tracking-wider font-inter mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="I want to join Emerge and need guidance on which plan suits me..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white font-inter text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-black font-inter font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors"
                >
                  Book Free Trial
                </button>
              </form>
            )}
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-white text-sm">Location</p>
                  <p className="text-muted font-inter text-sm mt-1">
                    Rajarajeshwari Nagar, Bangalore, Karnataka 560098
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-white text-sm">Phone</p>
                  <a href="tel:+919606292814" className="text-muted font-inter text-sm mt-1 hover:text-accent transition-colors">
                    +91 96062 92814
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-white text-sm">Timings</p>
                  <p className="text-muted font-inter text-sm mt-1">
                    Mon – Sat: 5:00 AM – 11:00 PM
                    <br />
                    Sunday: 6:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919606292814?text=Hi%2C%20I%27m%20interested%20in%20joining%20Emerge%20Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-5 py-4 hover:bg-[#25D366]/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-inter font-semibold text-white text-sm">WhatsApp Us</p>
                  <p className="text-[#25D366] font-inter text-xs">Quick reply guaranteed →</p>
                </div>
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
