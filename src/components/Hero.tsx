import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-left">
                Revolutionize Your Workflow
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-left">
                The ultimate platform to streamline your processes, boost
                productivity, and drive success.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link to="#">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#">Learn More</Link>
              </Button>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
};