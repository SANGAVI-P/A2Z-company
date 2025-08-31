import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Product } from "@/components/Product";
import { Researches } from "@/components/Researches";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Product />
        <Researches />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;