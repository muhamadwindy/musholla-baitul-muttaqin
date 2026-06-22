import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import History from '@/components/History';
import Programs from '@/components/Programs';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <History />
      <Programs />
      <Location />
      <Footer />
    </main>
  );
}
