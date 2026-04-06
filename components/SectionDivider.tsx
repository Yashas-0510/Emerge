'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const words = [
  'Private Training',
  'Real Results',
  'Rajarajeshwari Nagar',
  'Where Pain Becomes Power',
  'Bangalore',
  'Emerge',
];

export default function SectionDivider() {
  return (
    <section className="py-16 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-bebas text-2xl text-white/20 tracking-[0.2em]">
              {word}
            </span>
            <span className="text-white/10 text-xl font-bebas">——</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
