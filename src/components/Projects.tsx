import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Absencio — Leave Management System',
      description: 'A full-stack employee leave management system with JWT authentication, role-based dashboards, 7 leave types, overlap detection, and interactive Chart.js analytics.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      github: 'https://github.com/Van1sha/Absencio',
    },
    {
      title: 'Finance Tracker',
      description: 'A personal finance tracker to record income & expenses, organize transactions, and track budgets with simple insights into spending habits.',
      tech: ['React', 'JavaScript', 'Firebase', 'Firestore', 'CSS'],
      image: 'https://img.freepik.com/free-vector/finance-app-interface-concept_23-2148455102.jpg',
      github: 'https://github.com/Van1sha/Finance_Tracker',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design patterns.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg',
      github: '#',

    },
    {
      title: 'Smart Pest Management System',
      description: 'A full-stack web application for identifying and managing insect pests in agricultural crops.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'React', 'NodeJs', 'Express', 'MongoDB'],
      image: 'https://agritechdigest.com/wp-content/uploads/2025/01/Pest-Management-1.webp',
      github: 'https://github.com/Van1sha/Insect-Pest-Management',

    },
    {
      title: 'Moving Company Website',
      description: 'A clean web application that deals with shifting parcel. Our company helps you doing it!',
      tech: ['JavaScript', 'HTML', 'CSS3', 'MySQL', 'PHP'],
      image: 'https://www.assureshift.in/sites/default/files/images/blog/additional-services-by-moving-companies.jpg',
      github: 'https://github.com/Van1sha/moving-company',

    },
    {
      title: 'Pathfinding Visualizer',
      description: 'An interactive web-page that visually demonstrates how different pathfinding algorithms work to find the shortest path ',
      tech: ['JavaScript', 'C++', 'DSA', 'CSS Grid', 'Responsive Design'],
      image: 'https://www.codingame.com/servlet/fileservlet?id=7766456941361',
      github: 'https://github.com/Van1sha/PathFinding_Visualizer',

    },
    {
      title: 'AI Music Mashup Chatbot',
      description: 'An Ai ChatBot that can suggest you music based on your taste ..basically whatever input you are providing to the bot.',
      tech: ['HTML', 'YouTube API', 'Python', 'CSS Modules'],
      image: 'https://www.readability.com/wp-content/uploads/2025/08/DJ-Mashup-Maker-How-to-Create-Viral-Mashup-Songs-with-AI.png',
      github: 'https://github.com/Van1sha/AI_music_Chatbot',

    },
    {
      title: 'Hospital Management System',
      description: 'A college project for managing student events with registration, notifications, and event calendar functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://www.maxaix.com/blog/wp-content/uploads/2024/03/Hospital-Management-System-development.jpg',
      github: 'https://github.com/Van1sha/LPU_CSE326_CA3',

    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic and personal projects that showcase my learning journey and coding skills
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-0 overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    {/* <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      
                    </a> */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;