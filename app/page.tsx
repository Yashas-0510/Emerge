import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import AboutServices from '@/components/AboutServices';
import Membership from '@/components/Membership';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Nav />
      <Hero />
      <SectionDivider />
      <AboutServices />
      <SectionDivider />
      <Membership />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
