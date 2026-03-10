import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import heroImg from "../assets/profile-photo.jpg";
import profilePhoto from "../assets/profile-photo.jpg";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //  className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border"
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card backdrop-blur-xl' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="relative group">
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-spin" style={{ animationDuration: '6s' }} />
            {/* Photo */}
            <img
              src={profilePhoto}
              alt="Profile"
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-background group-hover:scale-110 transition-transform duration-500"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/resume"
              className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/resume"
                className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;