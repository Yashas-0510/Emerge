'use client';

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
    <section className="py-14 bg-black overflow-hidden border-y border-white/5">
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: 'divider-scroll 28s linear infinite' }}
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-bebas text-lg text-white/15 tracking-[0.25em] px-8"
              style={{ letterSpacing: '0.2em' }}
            >
              {word}
            </span>
            <span className="text-white/10 font-bebas text-sm">——</span>
          </span>
        ))}
      </div>
    </section>
  );
}
