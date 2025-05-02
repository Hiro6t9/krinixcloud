
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-lexend font-bold text-white">
              Krinix<span className="text-krinix-cyan">Cloud</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            About
          </a>
          <a 
            href="#hosting-plans" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Plans
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Panel
          </a>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-krinix-blue to-krinix-purple hover:from-krinix-purple hover:to-krinix-blue text-white border-none"
          >
            Join Discord
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#hosting-plans" 
              className="text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plans
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Panel
            </a>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-krinix-blue to-krinix-purple hover:from-krinix-purple hover:to-krinix-blue text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Discord
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
