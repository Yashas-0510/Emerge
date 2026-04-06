'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from './SectionReveal';

const images = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80', alt: 'Emerge gym floor' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80', alt: 'Training area' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=700&q=80', alt: 'Weights section' },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=700&q=80', alt: 'Cardio zone' },
  { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=700&q=80', alt: 'Group class' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80', alt: 'Personal training' },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Single restrained orb */}
      <div className="gradient-orb w-[400px] h-[400px] bg-[#d4ff00] top-[-100px] right-[-150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="mb-12">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-white/40 font-inter font-semibold tracking-[0.2em] uppercase text-xs">Gallery</span>
              <h2 className="font-bebas text-5xl md:text-6xl text-white mt-2">
                The <span className="text-[#d4ff00]">Space</span>
              </h2>
            </div>
            <p className="text-white/30 font-inter text-xs hidden md:block">
              Drag to explore →
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Full-bleed horizontal scroll */}
      <div className="gallery-scroll mt-4 px-6 pb-2" ref={scrollRef}>
        {images.map((img, i) => (
          <SectionReveal key={i} delay={i * 0.06}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="gallery-item"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
