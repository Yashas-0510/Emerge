'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
      'Everything in Starter',
      'Unlimited gym access (24/7)',
      '2 Personal Training sessions/month',
      'Custom workout plan',
      'Monthly progress tracking',
      'Free nutritional guidance',
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
    <section id="membership" className="py-32 bg-bg relative overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] bg-accent bottom-[-300px] right-[-200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">Pricing</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3">
            CHOOSE YOUR
            <span className="text-accent"> PATH</span>
          </h2>
          <p className="text-muted font-inter mt-4 max-w-xl mx-auto">
            No lock-in contracts. No hidden fees. Cancel anytime.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.featured
                    ? 'bg-surface border-2 border-accent'
                    : 'bg-surface border border-white/10'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black font-inter font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bebas text-2xl text-white tracking-wide">{plan.name}</h3>
                  <p className="text-muted font-inter text-sm mt-1">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="font-bebas text-5xl text-white">{plan.price}</span>
                  <span className="text-muted font-inter text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded font-inter font-semibold text-sm uppercase tracking-wider transition-colors ${
                    plan.featured
                      ? 'bg-accent text-black hover:bg-white'
                      : 'bg-white/10 text-white hover:bg-accent hover:text-black'
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
