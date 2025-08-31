import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Hexagon, Menu } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#researches", label: "Researches" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 text-white">
      <RouterLink to="/" className="flex items-center justify-center">
        <Hexagon className="h-6 w-6" />
        <span className="ml-2 font-semibold">A2Z Company</span>
      </RouterLink>
      
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
        <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
          <a href="#contact">Contact</a>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900/80 backdrop-blur-lg border-l border-white/20 text-white w-3/4">
            <RouterLink to="/" className="flex items-center justify-center mb-8">
              <Hexagon className="h-6 w-6" />
              <span className="ml-2 font-semibold">A2Z Company</span>
            </RouterLink>
            <nav className="grid gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};