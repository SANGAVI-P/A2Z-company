import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
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
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link to="#">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-colors">
              <Link to="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};