'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-weights-in-a-gym-4375-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content — text IS the hero image */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full"
      >
        <motion.p
          variants={itemVariants}
          className="font-inter font-semibold tracking-[0.4em] uppercase text-xs md:text-sm text-white/60 mb-8"
        >
          Rajarajeshwari Nagar&apos;s Premier Fitness Studio
        </motion.p>

        {/* MASSIVE typography — text IS the visual */}
        <motion.h1
          variants={itemVariants}
          className="font-bebas leading-none text-white mb-2"
          style={{ fontSize: 'clamp(5rem, 20vw, 18rem)' }}
        >
          EMERGE
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-16 bg-white/30" />
          <motion.p
            variants={itemVariants}
            className="font-bebas text-2xl md:text-3xl tracking-[0.3em] text-white/80 uppercase"
          >
            Where Pain Becomes Power
          </motion.p>
          <div className="h-[1px] w-16 bg-white/30" />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center mt-2">
          <a
            href="#membership"
            className="px-10 py-4 bg-[#d4ff00] text-black font-inter font-bold text-sm uppercase tracking-[0.15em] rounded hover:bg-white transition-colors"
          >
            View Membership
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-white/30 text-white font-inter font-medium text-sm uppercase tracking-[0.15em] rounded hover:border-white hover:text-white transition-colors"
          >
            Book Free Trial
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-inter">Scroll</span>
        <div style={{ animation: 'bounce-down 1.5s ease-in-out infinite' }}>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
