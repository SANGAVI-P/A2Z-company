import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Revolutionize Your Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              The ultimate platform for A2Z Company to streamline processes, boost
              productivity, and drive success.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-105">
              <a href="#pricing">Get Started</a>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-transform duration-300 ease-in-out hover:scale-105">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};