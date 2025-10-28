import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Mini Top Bar */}
      <div className="bg-secondary-dark/80 backdrop-blur-sm border-b border-primary-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:help@candlelighttechnology.com" className="flex items-center gap-2 text-light-accent hover:text-primary-accent transition-colors">
                <Mail className="h-3 w-3" />
                <span className="hidden sm:inline">help@candlelighttechnology.com</span>
              </a>
              <a href="tel:+12343763561" className="flex items-center gap-2 text-light-accent hover:text-primary-accent transition-colors">
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">+1 (234) 376-3561</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-colors duration-300 border-b ${isScrolled ? 'border-primary-accent/20 bg-base-dark shadow-lg' : 'border-transparent bg-base-dark/50 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/Logo.svg" alt="Candlelight logo" className="h-20 w-30 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm transition-all duration-200 group px-3 py-1 rounded-full font-heading ${
                    isActive(link.path)
                      ? "lg:text-primary-accent lg:font-semibold lg:scale-105 lg:shadow-lg lg:animate-pulse"
                      : "text-foreground lg:hover:text-primary-accent"
                  } hover:-translate-y-0.5`}
                >
                  {/* background pill (appears on hover or active) - only on lg and above */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-full transition-all duration-200 ease-out -z-10 ${
                      isActive(link.path)
                        ? "lg:bg-gradient-to-r lg:from-primary-accent/20 lg:to-light-accent/12 lg:ring-1 lg:ring-primary-accent/15 lg:opacity-100"
                        : "lg:bg-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-primary-accent/8 lg:group-hover:to-light-accent/4"
                    }`}
                  />

                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <Button variant="ghost" className="text-foreground hover:text-primary-accent">
                Sign In
              </Button> */}
              <a href="https://app.candlelighttechnology.com" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base-dark overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative text-base-dark">Get Started</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-secondary-dark border-t border-primary-accent/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm transition-all rounded-md px-3 text-foreground hover:text-primary-accent font-heading`}
                >
                  <span className={`relative z-10`}>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                {/* <Button variant="ghost" className="w-full">
                  Sign In
                </Button> */}
                <a href="https://app.candlelighttechnology.com" target="_blank" rel="noopener noreferrer" className="group relative w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base-dark overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 inline-block text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative text-base-dark">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
