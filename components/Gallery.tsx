'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
  'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-bg relative overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] bg-accent top-[-100px] right-[-200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">Gallery</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3">
            THE
            <span className="text-accent"> SPACE</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden aspect-square cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Emerge gym gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/0 hover:bg-accent/10 transition-colors" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
