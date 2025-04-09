
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-eco">Hitch</span>Ride
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-eco transition-colors">
            How It Works
          </a>
          <a href="#eco-points" className="text-gray-700 hover:text-eco transition-colors">
            Eco Points
          </a>
          <a href="#safety" className="text-gray-700 hover:text-eco transition-colors">
            Safety
          </a>
          <a href="#map" className="text-gray-700 hover:text-eco transition-colors">
            Live Map
          </a>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <Button className="btn-primary flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <MenuIcon size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-eco transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#eco-points" 
              className="text-gray-700 hover:text-eco transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Eco Points
            </a>
            <a 
              href="#safety" 
              className="text-gray-700 hover:text-eco transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Safety
            </a>
            <a 
              href="#map" 
              className="text-gray-700 hover:text-eco transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Live Map
            </a>
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <Button 
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
