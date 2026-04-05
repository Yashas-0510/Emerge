'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const reviews = [
  {
    name: 'Rahul M.',
    plan: 'Pro Member',
    text: 'Joined 6 months ago and dropped 14 kgs. The trainers here actually care — they track your progress, adjust your plan, and push you past your limits. Best gym I\'ve been to in Bangalore.',
    rating: 5,
  },
  {
    name: 'Sneha K.',
    plan: 'Elite Member',
    text: 'The personal training sessions are worth every rupee. The atmosphere is premium, clean, and never overcrowded. I feel genuinely looked after every time I walk in.',
    rating: 5,
  },
  {
    name: 'Arjun P.',
    plan: 'Starter Member',
    text: 'Started with the Starter plan and upgraded within two months. Zumba classes are incredibly fun, the staff is welcoming, and the equipment is always well-maintained.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="text-accent font-inter font-semibold tracking-[0.2em] uppercase text-sm">Testimonials</span>
          <h2 className="font-bebas text-5xl md:text-6xl text-white mt-3">
            WHAT MEMBERS
            <span className="text-accent"> SAY</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <SectionReveal key={review.name} delay={i * 0.1}>
              <div className="bg-bg border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-accent text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-300 font-inter text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div>
                  <p className="font-bebas text-xl text-white">{review.name}</p>
                  <p className="text-accent font-inter text-xs uppercase tracking-wider mt-1">{review.plan}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
