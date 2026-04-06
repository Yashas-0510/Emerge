'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ambient glow blobs */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      {/* Horizontal rule top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4ff00]/20 to-transparent" />

      {/* Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-[10px] font-semibold tracking-[0.5em] uppercase text-white/30 mb-10"
        >
          Rajarajeshwari Nagar — Bangalore
        </motion.p>

        {/* MASSIVE headline — text IS the visual */}
        <motion.h1
          variants={itemVariants}
          className="font-bebas leading-none text-white mb-2 select-none"
          style={{
            fontSize: 'clamp(5rem, 19vw, 17rem)',
            letterSpacing: '-0.03em',
            lineHeight: 0.85,
          }}
        >
          EMERGE
        </motion.h1>

        {/* Brand statement — compressed, bold */}
        <motion.p
          variants={itemVariants}
          className="font-bebas text-2xl md:text-3xl tracking-[0.35em] text-[#d4ff00] uppercase mb-12 text-glow-subtle"
          style={{ letterSpacing: '0.3em' }}
        >
          Where Pain Becomes Power
        </motion.p>

        {/* Thin rule */}
        <motion.div
          variants={itemVariants}
          className="h-px w-24 mx-auto mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,255,0,0.4), transparent)' }}
        />

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#membership" className="btn-primary">
            View Membership
          </a>
          <a href="#contact" className="btn-ghost">
            Book Free Trial
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-white/25 uppercase tracking-[0.35em] font-inter">Scroll</span>
        <div style={{ animation: 'bounce-down 1.8s ease-in-out infinite' }}>
          <ChevronDown className="w-4 h-4 text-white/25" />
        </div>
      </motion.div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4ff00]/20 to-transparent" />
    </section>
  );
}
