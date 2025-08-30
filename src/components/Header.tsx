import { Button } from "@/components/ui/button";
import { Aperture } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <RouterLink to="/" className="flex items-center justify-center">
        <Aperture className="h-6 w-6" />
        <span className="ml-2 font-semibold">A2Z Company</span>
      </RouterLink>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <a
          href="#home"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </a>
        <a
          href="#product"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Product
        </a>
        <a
          href="#researches"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Researches
        </a>
        <a
          href="#pricing"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Pricing
        </a>
        <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
          <a href="#contact">Contact</a>
        </Button>
      </nav>
    </header>
  );
};