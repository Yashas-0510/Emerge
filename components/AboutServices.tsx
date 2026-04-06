'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Flame, Zap, Waves, HeartPulse, Users, Award, Users2, Clock } from 'lucide-react';
import SectionReveal from './SectionReveal';

const services = [
  { icon: Dumbbell, title: 'Personal Training', desc: 'One-on-one sessions with certified trainers tailored to your specific goals, body type, and schedule.' },
  { icon: Flame, title: 'CrossFit', desc: 'High-intensity functional training. Build strength, endurance, and agility through varied workouts.' },
  { icon: Zap, title: 'Zumba', desc: 'Dance your way to fitness. Latin rhythms blended with cardio — workouts that don\'t feel like work.' },
  { icon: Waves, title: 'Aerobics', desc: 'Full-body sessions designed to improve cardiovascular health, flexibility, and overall stamina.' },
  { icon: HeartPulse, title: 'Personalized Plans', desc: 'Custom diet and workout plans crafted around your body type, goals, and lifestyle.' },
  { icon: Users, title: 'Group Classes', desc: 'Motivating group energy with expert guidance. Train with friends or find your new workout partners.' },
];

export default function AboutServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-40 overflow-hidden bg-black">
      {/* Ambient blobs */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: 'rgba(212,255,0,0.3)' }} />
            <span className="text-[10px] font-inter font-semibold tracking-[0.4em] uppercase text-white/30">
              About Emerge
            </span>
          </div>
        </SectionReveal>

        {/* About text block */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          {/* Image with parallax */}
          <motion.div style={{ y: imgY }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80"
                alt="Inside Emerge fitness studio"
                className="w-full object-cover aspect-[4/5]"
                style={{ filter: 'grayscale(30%) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Floating stat badge — frosted glass */}
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-6 py-5">
              <span className="font-bebas text-4xl text-[#d4ff00] text-glow-subtle block leading-none">520+</span>
              <span className="text-[9px] font-inter uppercase tracking-widest text-white/40 mt-1 block">Happy Members</span>
            </div>
          </motion.div>

          {/* Text */}
          <SectionReveal>
            <h2
              className="font-bebas leading-none text-white mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              More Than<br />A Gym.{' '}
              <span className="text-[#d4ff00] text-glow-subtle">A Transformation.</span>
            </h2>
            <div className="space-y-5 text-white/40 font-inter text-sm leading-relaxed">
              <p>
                Emerge Private Fitness Studio was built for one reason — to give Bangalore
                a fitness space that actually delivers. Located in the heart of Rajarajeshwari Nagar,
                we offer an intimate, judgment-free environment where serious training meets premium comfort.
              </p>
              <p>
                From personal training to high-energy Zumba and CrossFit, our certified trainers
                tailor every session to your goals. Whether you&apos;re starting out or pushing past
                plateaus, you&apos;ll find your edge here.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { icon: Award, num: '4.9★', label: 'Google Rating' },
                { icon: Users2, num: '520+', label: 'Active Members' },
                { icon: Clock, num: '5yr+', label: 'In Business' },
              ].map(({ icon: Icon, num, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <Icon className="w-4 h-4 text-[#d4ff00]/50" />
                  <span className="font-bebas text-3xl text-white">{num}</span>
                  <span className="text-[9px] font-inter uppercase tracking-widest text-white/30">{label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Programs label */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12" style={{ background: 'rgba(212,255,0,0.3)' }} />
            <span className="text-[10px] font-inter font-semibold tracking-[0.4em] uppercase text-white/30">
              What We Offer
            </span>
          </div>
          <h3
            className="font-bebas text-white mb-14"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
          >
            Programs Built<br />
            For <span className="text-[#d4ff00] text-glow-subtle">Results</span>
          </h3>
        </SectionReveal>

        {/* Services grid — frosted glass cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.07}>
              <div className="glass-card rounded-2xl p-8 h-full group transition-all duration-500">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 transition-colors"
                  style={{ background: 'rgba(212,255,0,0.06)', border: '1px solid rgba(212,255,0,0.1)' }}>
                  <service.icon className="w-5 h-5 text-[#d4ff00]/60" />
                </div>
                <h4 className="font-bebas text-xl text-white mb-3 tracking-wide">{service.title}</h4>
                <p className="font-inter text-xs text-white/35 leading-relaxed">{service.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
