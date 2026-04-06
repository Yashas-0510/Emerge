'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#about' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo — lime only on icon */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#d4ff00] rounded flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="font-bebas text-2xl tracking-widest text-white group-hover:text-white/80 transition-colors">
              EMERGE
            </span>
          </a>

          {/* Desktop links — no lime, just white/gray */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-inter tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-[#d4ff00] text-black font-inter font-semibold text-xs uppercase tracking-[0.12em] rounded hover:bg-white transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-bebas text-2xl text-white tracking-widest">EMERGE</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-6 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-3xl font-bebas text-white hover:text-[#d4ff00] transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 px-6 py-3.5 bg-[#d4ff00] text-black font-bebas text-xl text-center rounded uppercase tracking-wider"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
