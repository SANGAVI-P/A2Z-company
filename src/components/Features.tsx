import { Zap, BarChart, Users } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-16 lg:py-20 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-600 px-3 py-1 text-sm text-white">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is packed with features designed to help you work
              smarter, not harder.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-4 text-center p-6 rounded-lg bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center items-center">
              <Zap className="h-8 w-8 text-purple-600 mb-2" />
            </div>
            <h3 className="text-xl font-bold text-white">Blazing Fast</h3>
            <p className="text-sm text-gray-400">
              Experience unparalleled speed and performance.
            </p>
          </div>
          <div className="grid gap-4 text-center p-6 rounded-lg bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center items-center">
              <BarChart className="h-8 w-8 text-blue-500 mb-2" />
            </div>
            <h3 className="text-xl font-bold text-white">Powerful Analytics</h3>
            <p className="text-sm text-gray-400">
              Gain valuable insights with our advanced analytics tools.
            </p>
          </div>
          <div className="grid gap-4 text-center p-6 rounded-lg bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center items-center">
              <Users className="h-8 w-8 text-pink-500 mb-2" />
            </div>
            <h3 className="text-xl font-bold text-white">Team Collaboration</h3>
            <p className="text-sm text-gray-400">
              Work together seamlessly with built-in collaboration features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};