import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import heroImg from "../assets/profile-photo.jpg";
import profilePhoto from "../assets/profile-photo.jpg";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileViewerOpen, setIsProfileViewerOpen] = useState(false);

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
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card backdrop-blur-xl' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsProfileViewerOpen(true)}
              className="relative group cursor-none outline-none appearance-none"
            >
              {/* Animated gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-spin" style={{ animationDuration: '6s' }} />
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-background group-hover:scale-110 transition-transform duration-500 cursor-none"
              />
            </button>

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
                to="/education"
                className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
              >
                Education
              </Link>
              <Link
                to="/resume"
                className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
              >
                Resume
              </Link>
              <Link
                to="/certifications"
                className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
              >
                Certificates
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
            <div className="md:hidden mt-4 animate-fade-in">
              <div className="flex flex-col space-y-4 glass-card p-6 rounded-2xl border border-white/10 shadow-elevated">
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
                  to="/education"
                  className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </Link>
                <Link
                  to="/resume"
                  className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </Link>
                <Link
                  to="/certifications"
                  className="text-muted-foreground hover:text-white hover:bg-primary/90 px-3 py-1.5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Certificates
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Full Screen Profile Viewer */}
      {isProfileViewerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300 cursor-none"
          onClick={() => setIsProfileViewerOpen(false)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-none"
            onClick={() => setIsProfileViewerOpen(false)}
          >
            <X size={32} />
          </button>

          <img
            src={profilePhoto}
            alt="Profile Fullscreen"
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(255,255,255,0.1)] animate-in zoom-in-95 duration-300 cursor-none"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </>
  );
};

export default Navigation;