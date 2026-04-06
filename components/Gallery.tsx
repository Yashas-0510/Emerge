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
  return (
    <section id="gallery" className="relative py-40 overflow-hidden bg-black">
      {/* Ambient blobs */}
      <div className="blob blob-c" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: 'rgba(212,255,0,0.3)' }} />
            <span className="text-[10px] font-inter font-semibold tracking-[0.4em] uppercase text-white/30">
              Gallery
            </span>
          </div>
          <h2
            className="font-bebas text-white mb-14"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
          >
            The <span className="text-[#d4ff00] text-glow-subtle">Space</span>
          </h2>
        </SectionReveal>
      </div>

      {/* Full-bleed horizontal scroll */}
      <div className="gallery-scroll mt-2 px-6 pb-2">
        {images.map((img, i) => (
          <SectionReveal key={i} delay={i * 0.07}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="gallery-item"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
