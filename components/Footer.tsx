'use client';

import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <Dumbbell className="w-4 h-4 text-black" />
          </div>
          <span className="font-bebas text-xl tracking-wider text-white">EMERGE</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          {['Instagram', 'Facebook', 'YouTube'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-muted hover:text-accent font-inter text-xs uppercase tracking-wider transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted font-inter text-xs">
          © {new Date().getFullYear()} Emerge Private Fitness Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
