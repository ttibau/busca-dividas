import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AboutComponent from '@/components/About';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="mt-[96px]">
        <Hero />
        <AboutComponent />
        <Pricing />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
