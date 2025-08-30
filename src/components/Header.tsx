import { Button } from "@/components/ui/button";
import { Aperture } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 text-white">
      <RouterLink to="/" className="flex items-center justify-center">
        <Aperture className="h-6 w-6" />
        <span className="ml-2 font-semibold">A2Z Company</span>
      </RouterLink>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <a
          href="#home"
          className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
        >
          About
        </a>
        <a
          href="#product"
          className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
        >
          Product
        </a>
        <a
          href="#researches"
          className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
        >
          Researches
        </a>
        <a
          href="#pricing"
          className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
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