'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Users, Zap, Waves, Flame, HeartPulse, Award, Clock, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal';

const services = [
  { icon: Dumbbell, title: 'Personal Training', desc: 'One-on-one with certified trainers tailored to your goals.' },
  { icon: Flame, title: 'CrossFit', desc: 'High-intensity functional training for strength and endurance.' },
  { icon: Zap, title: 'Zumba', desc: 'Dance cardio that makes working out feel like a party.' },
  { icon: Waves, title: 'Aerobics', desc: 'Full-body sessions to boost cardiovascular health and stamina.' },
  { icon: HeartPulse, title: 'Personalized Plans', desc: 'Custom diet and workout plans crafted around your body.' },
  { icon: Users, title: 'Group Classes', desc: 'Motivating group energy with expert guidance.' },
];

export default function AboutServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden bg-bg">
      {/* Single accent orb — restrained */}
      <div className="gradient-orb w-[500px] h-[500px] bg-[#d4ff00] bottom-[-200px] right-[-150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top: About text + image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* Image with parallax */}
          <motion.div style={{ y: imgY }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80"
                alt="Inside Emerge fitness studio"
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Single lime accent — stat badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#d4ff00] text-black p-5 rounded-xl text-center">
              <span className="font-bebas text-4xl block leading-none">520+</span>
              <span className="text-[10px] font-inter uppercase tracking-wider mt-0.5 block">Happy Members</span>
            </div>
          </motion.div>

          {/* Text */}
          <SectionReveal>
            <span className="text-white/50 font-inter font-semibold tracking-[0.2em] uppercase text-xs">About Emerge</span>
            <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3 mb-6 leading-tight">
              MORE THAN A GYM.<br />
              <span className="text-[#d4ff00]">A TRANSFORMATION.</span>
            </h2>
            <div className="space-y-4 text-gray-400 font-inter text-sm leading-relaxed">
              <p>
                Emerge Private Fitness Studio was built for one reason — to give Bangalore
                a fitness space that actually delivers. Located in Rajarajeshwari Nagar,
                we offer an intimate, judgment-free environment where serious training
                meets premium comfort.
              </p>
              <p>
                From personal training to high-energy Zumba and CrossFit, our certified
                trainers tailor every session to your goals. Whether you&apos;re starting out
                or pushing past plateaus, you&apos;ll find your edge here.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: Award, num: '4.9★', label: 'Google Rating' },
                { icon: Users, num: '520+', label: 'Active Members' },
                { icon: Clock, num: '5yr+', label: 'In Business' },
              ].map(({ icon: Icon, num, label }) => (
                <div key={label} className="flex flex-col items-center md:items-start gap-1">
                  <Icon className="w-4 h-4 text-white/40" />
                  <span className="font-bebas text-2xl text-white">{num}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-inter">{label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Bottom: Services grid — minimal lime, no colored icons */}
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-white/50 font-inter font-semibold tracking-[0.2em] uppercase text-xs">What We Offer</span>
            <h3 className="font-bebas text-4xl md:text-5xl text-white mt-2">
              Programs Built for <span className="text-[#d4ff00]">Results</span>
            </h3>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.07}>
              <div className="bg-[#1a1a1a] border border-white/8 rounded-xl p-7 h-full group hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-5 h-5 text-white/70" />
                </div>
                <h4 className="font-bebas text-xl text-white mb-2 tracking-wide">{service.title}</h4>
                <p className="text-white/40 font-inter text-xs leading-relaxed">{service.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
