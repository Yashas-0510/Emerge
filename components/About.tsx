'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from './SectionReveal';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] bg-accent bottom-[-200px] right-[-150px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div style={{ y: imgY }} className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
              alt="Inside Emerge fitness studio"
              className="w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-black p-6 rounded-xl text-center">
            <span className="font-bebas text-5xl block leading-none">520+</span>
            <span className="text-xs font-inter uppercase tracking-wider mt-1 block">Happy Members</span>
          </div>
        </motion.div>

        {/* Text */}
        <SectionReveal>
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">About Us</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3 mb-6 leading-tight">
            MORE THAN A GYM.<br />
            <span className="text-accent">A TRANSFORMATION.</span>
          </h2>
          <div className="space-y-4 text-gray-400 font-inter text-base leading-relaxed">
            <p>
              Emerge Private Fitness Studio was built for one reason — to give Bangalore
              a fitness space that actually delivers. Located in the heart of
              Rajarajeshwari Nagar, we offer an intimate, judgment-free environment
              where serious training meets premium comfort.
            </p>
            <p>
              From personal training to high-energy Zumba and CrossFit classes,
              our certified trainers tailor every session to your goals. Whether
              you&apos;re starting out or pushing past plateaus, you&apos;ll find your edge here.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { num: '4.9★', label: 'Google Rating' },
              { num: '520+', label: 'Active Members' },
              { num: '5yr+', label: 'In Business' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="font-bebas text-3xl text-white block">{stat.num}</span>
                <span className="text-xs text-muted uppercase tracking-wider font-inter">{stat.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
