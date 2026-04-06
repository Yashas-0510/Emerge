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
    <section id="membership" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Minimal single orb — lime only here */}
      <div className="gradient-orb w-[600px] h-[600px] bg-[#d4ff00] bottom-[-250px] right-[-200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-white/40 font-inter font-semibold tracking-[0.2em] uppercase text-xs">Pricing</span>
              <h2 className="font-bebas text-5xl md:text-6xl text-white mt-2">
                Choose Your <span className="text-[#d4ff00]">Path</span>
              </h2>
            </div>
            <p className="text-white/40 font-inter text-sm max-w-xs">
              No lock-in contracts. No hidden fees. Cancel anytime.
            </p>
          </div>
        </SectionReveal>

        {/* Horizontal scroll cards */}
        <div className="membership-scroll">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`pricing-card ${
                  plan.featured
                    ? 'bg-[#1a1a1a] border-2 border-[#d4ff00] relative'
                    : 'bg-[#111] border border-white/8'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#d4ff00] text-black font-inter font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-full">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bebas text-2xl text-white tracking-wide">{plan.name}</h3>
                  <p className="text-white/40 font-inter text-xs mt-1">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="font-bebas text-5xl text-white">{plan.price}</span>
                  <span className="text-white/40 font-inter text-xs">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? 'text-[#d4ff00]' : 'text-white/30'}`} />
                      <span className="text-gray-300 font-inter text-xs leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded font-inter font-semibold text-xs uppercase tracking-[0.15em] transition-colors ${
                    plan.featured
                      ? 'bg-[#d4ff00] text-black hover:bg-white'
                      : 'bg-white/8 text-white hover:bg-[#d4ff00] hover:text-black'
                  }`}
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
