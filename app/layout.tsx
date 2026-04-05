import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Emerge Private Fitness Studio | Rajarajeshwari Nagar, Bangalore',
  description:
    'Transform your body at Bangalore\'s most exclusive private fitness studio. Personal training, CrossFit, Zumba & more. Starting ₹1,500/month.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
