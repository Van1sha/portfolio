import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Computer Science Student', 'Future Developer', 'Tech Enthusiast', 'Problem Solver'];
  const currentText = texts[currentIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentText, currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background) / 0.95) 0%, hsl(var(--background) / 0.85) 100%), url(${heroImage})`,
        backgroundSize: '400% 400%',
        backgroundPosition: 'center',
        animation: 'gradient-shift 15s ease infinite'
      }}
    >
      {/* Animated gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-100"
        style={{
          animation: 'gradient-shift 20s ease infinite',
          backgroundSize: '400% 400%'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0
                ? 'hsl(var(--primary) / 0.3)'
                : i % 3 === 1
                  ? 'hsl(var(--accent) / 0.3)'
                  : 'hsl(var(--secondary) / 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: i % 2 === 0 ? 'var(--shadow-glow)' : 'none'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Hi, I'm{' '}
            <span className="gradient-text glow inline-block hover:scale-110 transition-transform duration-300">Vanisha</span>
          </h1>

          <div className="text-2xl md:text-4xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-primary pr-1 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up">
            A passionate Full Stack Web Developer eager to turn ideas into reality through code.
            Always learning, always building, and ready to make an impact in the tech world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-intense transition-all duration-500 hover:scale-105 text-lg px-8 py-6"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 backdrop-blur-sm bg-background/20"
              asChild
            >
              <a href="#skills">See My Skills</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up">
            {[
              { icon: Github, href: 'https://github.com/Van1sha', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vanisha-b5094b288/', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-4 rounded-full premium-card hover:shadow-intense transition-all duration-500 hover:scale-125 group"
                aria-label={label}
              >
                <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;