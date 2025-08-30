import { Button } from "@/components/ui/button";
import { Aperture } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <Aperture className="h-6 w-6" />
        <span className="ml-2 font-semibold">A2Z Company</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Product
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Researches
        </Link>
        <Link
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Pricing
        </Link>
        <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
          <Link to="#">Contact</Link>
        </Button>
      </nav>
    </header>
  );
};