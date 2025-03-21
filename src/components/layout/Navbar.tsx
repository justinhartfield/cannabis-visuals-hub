
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Gallery", path: "/gallery" },
    { title: "API Docs", path: "/api-docs" },
    { title: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "glass py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            <Leaf className="h-8 w-8 text-cannabis-500" />
            <span className="text-glow">CannaVisuals</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-cannabis-400 ${
                      isActive(link.path) ? "text-cannabis-500" : "text-white/80"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <Button 
                variant="default" 
                className="bg-cannabis-600 hover:bg-cannabis-700 text-white"
              >
                Sign In
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 text-sm font-medium transition-colors duration-200 hover:text-cannabis-400 ${
                      isActive(link.path) ? "text-cannabis-500" : "text-white/80"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/login" className="block">
                  <Button 
                    variant="default" 
                    className="w-full bg-cannabis-600 hover:bg-cannabis-700 text-white"
                  >
                    Sign In
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
