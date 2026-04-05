'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Users, Zap, Waves, Flame, HeartPulse } from 'lucide-react';
import SectionReveal from './SectionReveal';

const services = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    desc: 'One-on-one sessions with certified trainers who design programs around your specific goals, body type, and schedule.',
  },
  {
    icon: Flame,
    title: 'CrossFit',
    desc: 'High-intensity functional training. Build strength, endurance, and agility through constantly varied workouts.',
  },
  {
    icon: Zap,
    title: 'Zumba',
    desc: 'Dance your way to fitness. Our Zumba classes blend Latin rhythms with cardio for a workout that doesn\'t feel like one.',
  },
  {
    icon: Waves,
    title: 'Aerobics',
    desc: 'Full-body aerobic sessions designed to improve cardiovascular health, flexibility, and overall stamina.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Plans',
    desc: 'Custom diet and workout plans crafted by our experts. Your transformation starts with a strategy.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'Motivating group energy with expert guidance. Train with friends or meet your new workout partners.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface relative">
      <div className="gradient-orb w-[400px] h-[400px] bg-accent top-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">What We Offer</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3">
            PROGRAMS BUILT FOR
            <span className="text-accent"> RESULTS</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#d4ff00' }}
                transition={{ duration: 0.3 }}
                className="bg-bg border border-white/10 rounded-xl p-8 h-full cursor-pointer group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-muted font-inter text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
