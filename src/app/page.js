import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hadith from '@/components/Hadith';
import History from '@/components/History';
import Gallery from '@/components/Gallery';
import Programs from '@/components/Programs';
import Infaq from '@/components/Infaq';
import Itikaf from '@/components/Itikaf';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Hadith />
      <History />
      <Gallery />
      <Programs />
      <Infaq />
      <Itikaf />
      <Location />
      <Footer />
    </main>
  );
}
