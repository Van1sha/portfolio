import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap,
  Brain,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
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

  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, JavaScript, HTML5, CSS3, Tailwind',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Backend Basics',
      description: 'Node.js, Express, SQL, MongoDB basics, PHP',
      color: 'text-green-400'
    },
    {
      icon: Smartphone,
      title: 'Learning Mobile Dev',
      description: 'React Native basics, Flutter exploration',
      color: 'text-purple-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Interest',
      description: 'Figma, Design Principles, User Experience',
      color: 'text-pink-400'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, Sass, Tailwind CSS',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Adaptable, Eager to Learn, Team Player',
      color: 'text-yellow-400'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Algorithms, Data Structures, Logic Building',
      color: 'text-orange-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creative Thinking, Fresh Perspectives',
      color: 'text-red-400'
    }
  ];

  const technologies = [
    'JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Java',
    'Express.js', 'MongoDB', 'SQL', 'Git', 'GitHub', 'Figma',
    'Python', 'C++', 'Data Structures', 'Algorithms', 'Responsive Design', 'REST APIs'
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in modern technologies and development practices
          </p>
        </div>

        {/* Skill Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="premium-card border-0 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-300" />
                  <skill.icon size={56} className={`relative ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-300">{skill.title}</h3>
                <p className="text-sm text-pink-100 group-hover:text-white/80 leading-relaxed transition-colors duration-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-10 gradient-text">Technologies I'm Learning & Using</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 premium-card rounded-full text-sm font-medium hover:shadow-intense hover:text-white transition-all duration-500 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;