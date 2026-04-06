import Nav from '@/components/Nav';
import Marquee from '@/components/Marquee';
import Hero from '@/components/Hero';
import AboutServices from '@/components/AboutServices';
import Membership from '@/components/Membership';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Marquee />
      <Nav />
      <Hero />
      <AboutServices />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
