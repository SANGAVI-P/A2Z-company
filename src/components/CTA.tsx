import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignUpModal } from "./SignUpModal";

export const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Dive In?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Start your free trial today and discover a new way to work. No
              credit card required.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-x-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up for Free
            </Button>
          </div>
        </div>
      </section>
      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};