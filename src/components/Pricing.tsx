import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that's right for you. No hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-4 p-6 rounded-lg border bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-2xl font-bold text-center">Basic</h3>
            <div className="text-4xl font-bold text-center">$29</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Core Features
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                5 Projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Basic Support
              </li>
            </ul>
            <Button>Choose Plan</Button>
          </div>
          <div className="grid gap-4 p-6 rounded-lg border-2 border-purple-600 bg-white dark:bg-gray-900 shadow-lg relative">
            <div className="absolute top-0 -translate-y-1/2 px-3 py-1 text-sm bg-purple-600 text-white rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-center">Pro</h3>
            <div className="text-4xl font-bold text-center">$79</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                All Basic Features
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Unlimited Projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Priority Support
              </li>
            </ul>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">Choose Plan</Button>
          </div>
          <div className="grid gap-4 p-6 rounded-lg border bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-2xl font-bold text-center">Enterprise</h3>
            <div className="text-4xl font-bold text-center">$199</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                All Pro Features
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Dedicated Account Manager
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                24/7 Support
              </li>
            </ul>
            <Button>Choose Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
};