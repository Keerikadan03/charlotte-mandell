import React, { SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu } from 'lucide-react'; // Replaced with Lucide icon

export function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex h-20 w-full items-center px-4 md:px-6 border-y z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300" /> {/* Animating the Menu icon */}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="animate-slide-in"> {/* Added slide-in animation */}
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-600 transition-colors duration-300" to="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-600 transition-colors duration-300" to="/work">
              My Work
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-600 transition-colors duration-300" to="/essays">
              Essays
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-600 transition-colors duration-300" to="/contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <nav className="mx-auto hidden lg:flex gap-6">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-transform hover:text-gray-600 hover:scale-105 duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-transform hover:text-gray-600 hover:scale-105 duration-300"
          to="/work"
        >
          My Work
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-transform hover:text-gray-600 hover:scale-105 duration-300"
          to="/essays"
        >
          Essays
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-transform hover:text-gray-600 hover:scale-105 duration-300"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

