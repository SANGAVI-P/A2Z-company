import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 text-white">
        <Header />
        <Hero />
      </div>
      <main className="flex-1">
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;