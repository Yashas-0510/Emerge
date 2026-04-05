'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Gradient orb */}
      <div className="gradient-orb w-[600px] h-[600px] bg-accent top-[-200px] left-[-100px]" />

      {/* Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-inter font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Rajarajeshwari Nagar&apos;s Premier Fitness Studio
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-bebas text-[80px] md:text-[120px] lg:text-[160px] leading-none text-white mb-2"
        >
          EMERGE
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-[2px] w-24 bg-accent mx-auto mb-6"
        />

        <motion.p
          variants={itemVariants}
          className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Private training. Real results. A space built for those who refuse
          to settle for average.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#membership"
            className="px-8 py-4 bg-accent text-black font-inter font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors"
          >
            View Membership
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-inter font-medium text-sm uppercase tracking-wider rounded hover:border-accent hover:text-accent transition-colors"
          >
            Book Free Trial
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest font-inter">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
