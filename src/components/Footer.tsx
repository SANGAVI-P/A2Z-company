import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/20">
      <p className="text-xs text-gray-300">
        © 2025 A2Z Company. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="#" className="text-xs hover:underline underline-offset-4 transition-transform duration-300 ease-in-out hover:scale-110 inline-block">
          Terms of Service
        </Link>
        <Link to="#" className="text-xs hover:underline underline-offset-4 transition-transform duration-300 ease-in-out hover:scale-110 inline-block">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};