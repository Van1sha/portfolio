import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Van1sha', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vanisha-b5094b288/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground mb-4">
              A passionate Computer Science student ready to make an impact in the tech world 
              through code, creativity, and continuous learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={18} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>vanishaa9837@gmail.com</p>
              <p>+91- 7455849443</p>
              <p>Currently in College, Open to Relocate</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm justify-center flex items-center">
            © {currentYear} Portfolio, Built by Vanisha.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;