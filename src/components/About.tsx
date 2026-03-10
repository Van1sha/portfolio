import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '15+', label: 'Projects Built' },
    { number: '2+', label: 'Years Learning' },
    { number: '8+', label: 'Technologies' },
    { number: '100%', label: 'Passion Level' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated student with a hunger for knowledge and a passion for creating amazing things
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm currently pursuing my Computer Science degree and absolutely love every moment of it! 
                What started as curiosity about how apps and websites work has grown into a genuine 
                passion for coding and creating digital solutions.
              </p>
              
              <p>
                While I may be a fresher in the professional world, I've been dedicating countless hours 
                to learning and building projects. I believe that enthusiasm and willingness to learn 
                can make up for what I lack in formal experience.
              </p>
              
              <p>
                I'm particularly excited about web development, mobile apps, and exploring new technologies. 
                My goal is to land my first tech role where I can contribute, learn from experienced 
                developers, and grow into the developer I aspire to be.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;