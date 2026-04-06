'use client';

export default function Marquee() {
  const items = [
    'Private Training',
    'Real Results',
    'Rajarajeshwari Nagar',
    'Bangalore',
    '4.9★ Rated',
    '520+ Members',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-black/95 border-b border-white/5 overflow-hidden">
      <div className=" marquee-track py-2.5">
        {repeated.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
