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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 text-white">
        <Hero />
      </div>
      <main className="flex-1">
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