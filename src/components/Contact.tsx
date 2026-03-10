import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vanishaa9837@gmail.com',
      href: 'mailto:vanishaa9837@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91- 7455849443',
      href: 'tel:+917455849443'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Currently in College, Open to Relocate',
      href: '#'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch('https://formsubmit.co/ajax/vanishaa9837@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          email: formData.get('email'),
          _subject: formData.get('subject') as string,
          message: formData.get('message'),
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm excited to start my career journey! Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ready to make an impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively looking for internship opportunities, entry-level positions, or
                  freelance projects where I can apply my skills and learn from experienced
                  professionals. I'm eager to contribute to meaningful projects and grow as a developer.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="glass-card border-0 hover:shadow-glow transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <info.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="FirstName"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="LastName"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email23@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Internship Opportunity / Project Collaboration"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about the opportunity or project you have in mind..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;