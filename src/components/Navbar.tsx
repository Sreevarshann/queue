
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-queue-purple">
              Queue<span className="text-black">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-10">
              <a href="#" className="navlink">Home</a>
              <a href="#about" className="navlink">About</a>
              <a href="#services" className="navlink">Services</a>
              <a href="#solutions" className="navlink">Solutions</a>
              <a href="#portfolio" className="navlink">Portfolio</a>
              <a href="#blog" className="navlink">Blog</a>
              <a href="#contact" className="navlink">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex">
            <Button className="button-primary">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="navlink">Home</a>
              <a href="#about" className="navlink">About</a>
              <a href="#services" className="navlink">Services</a>
              <a href="#solutions" className="navlink">Solutions</a>
              <a href="#portfolio" className="navlink">Portfolio</a>
              <a href="#blog" className="navlink">Blog</a>
              <a href="#contact" className="navlink">Contact</a>
              <div className="pt-2">
                <Button className="button-primary w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
