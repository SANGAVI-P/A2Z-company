import { Zap, BarChart, Users } from "lucide-react";

export const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform is packed with features designed to help you work
              smarter, not harder.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center">
              <Zap className="h-8 w-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-bold">Blazing Fast</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Experience unparalleled speed and performance.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center">
              <BarChart className="h-8 w-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-bold">Powerful Analytics</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gain valuable insights with our advanced analytics tools.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center">
              <Users className="h-8 w-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-bold">Team Collaboration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Work together seamlessly with built-in collaboration features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};