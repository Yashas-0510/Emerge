'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import SectionReveal from './SectionReveal';

const plans = [
  {
    name: 'Starter',
    price: '₹1,500',
    period: '/month',
    desc: 'Perfect for beginners ready to commit.',
    features: [
      'Gym access (6 AM – 10 PM)',
      'Locker facility',
      'Basic fitness assessment',
      'Access to group classes',
      'Free WiFi',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '₹3,500',
    period: '/month',
    desc: 'Our most popular plan for serious trainees.',
    features: [
      'Unlimited gym access (24/7)',
      '2 Personal Training sessions/month',
      'Custom workout plan',
      'Monthly progress tracking',
      'Free nutritional guidance',
      'Access to all group classes',
    ],
    cta: 'Join Pro',
    featured: true,
  },
  {
    name: 'Elite',
    price: '₹8,000',
    period: '/month',
    desc: 'Maximum results with maximum support.',
    features: [
      'Everything in Pro',
      '8 Personal Training sessions/month',
      'Advanced body composition analysis',
      'Weekly trainer check-ins',
      'Priority booking',
      'Exclusive Elite lounge access',
    ],
    cta: 'Go Elite',
    featured: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-40 overflow-hidden bg-black">
      {/* Ambient blobs */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: 'rgba(212,255,0,0.3)' }} />
            <span className="text-[10px] font-inter font-semibold tracking-[0.4em] uppercase text-white/30">
              Pricing
            </span>
          </div>
        </SectionReveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <SectionReveal>
            <h2
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Choose Your{' '}
              <span className="text-[#d4ff00] text-glow-subtle">Path</span>
            </h2>
          </SectionReveal>
          <SectionReveal>
            <p className="text-white/30 font-inter text-xs max-w-xs">
              No lock-in contracts. No hidden fees. Cancel anytime.
            </p>
          </SectionReveal>
        </div>

        {/* Horizontal scroll cards */}
        <div className="membership-scroll">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`pricing-card ${
                  plan.featured
                    ? 'glass-card border border-[#d4ff00]/30'
                    : 'glass-card'
                }`}
                style={plan.featured ? { boxShadow: '0 0 60px rgba(212,255,0,0.08)' } : {}}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#d4ff00] text-black font-inter font-bold text-[10px] uppercase tracking-[0.1em] px-4 py-1.5 rounded-full whitespace-nowrap">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">{plan.name}</h3>
                  <p className="text-white/30 font-inter text-xs">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <span className="font-bebas text-6xl text-white">{plan.price}</span>
                  <span className="text-white/30 font-inter text-xs ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3.5 mb-12 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? 'text-[#d4ff00]' : 'text-white/25'}`}
                      />
                      <span className="text-white/50 font-inter text-xs leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={plan.featured ? 'btn-primary block text-center' : 'btn-ghost block text-center'}
                >
                  {plan.cta}
                </a>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
