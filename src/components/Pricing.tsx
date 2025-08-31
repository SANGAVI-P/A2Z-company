import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleChoosePlan = (planName: string) => {
    setSelectedPlan(planName);
    showSuccess(`You have successfully purchased the ${planName} plan!`);
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white transition-transform duration-300 ease-in-out hover:scale-105">
              Find Your Fit
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Pricing That Scales With You
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From solo ventures to enterprise teams, find the perfect plan to fuel your growth. All the features you need, with none of the hidden fees.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-4 p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-bold text-center text-white">Basic</h3>
            <div className="text-4xl font-bold text-center text-white">₹2499</div>
            <div className="text-sm text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2 text-gray-300">
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
            <Button
              onClick={() => handleChoosePlan("Basic")}
              disabled={selectedPlan !== null}
              className={selectedPlan === "Basic" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              {selectedPlan === "Basic" ? "Purchased" : "Choose Plan"}
            </Button>
          </div>
          <div className="grid gap-4 p-6 rounded-lg border-2 border-purple-600 bg-white/10 backdrop-blur-sm shadow-lg relative transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute top-0 -translate-y-1/2 px-3 py-1 text-sm bg-purple-600 text-white rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-center text-white">Pro</h3>
            <div className="text-4xl font-bold text-center text-white">₹6499</div>
            <div className="text-sm text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2 text-gray-300">
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
            <Button
              onClick={() => handleChoosePlan("Pro")}
              disabled={selectedPlan !== null}
              className={selectedPlan === "Pro" ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"}
            >
              {selectedPlan === "Pro" ? "Purchased" : "Choose Plan"}
            </Button>
          </div>
          <div className="grid gap-4 p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-bold text-center text-white">Enterprise</h3>
            <div className="text-4xl font-bold text-center text-white">₹15999</div>
            <div className="text-sm text-gray-400 text-center">
              per month
            </div>
            <ul className="grid gap-2 text-gray-300">
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
            <Button
              onClick={() => handleChoosePlan("Enterprise")}
              disabled={selectedPlan !== null}
              className={selectedPlan === "Enterprise" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              {selectedPlan === "Enterprise" ? "Purchased" : "Choose Plan"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};