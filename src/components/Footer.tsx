import { Instagram, Linkedin, Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">NM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Namit Mehta</h3>
                <p className="text-muted-foreground">Graphic Designer</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating visually compelling designs that speak louder than words.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-primary transition-smooth">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">namit.mehta@example.com</p>
              <p className="text-muted-foreground text-sm">+91 98765 43210</p>
              <p className="text-muted-foreground text-sm">Sangrur, Punjab, India</p>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/namitttt9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/namit-mehta-374244287/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth">
                <Globe className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Namit Mehta. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for creative souls</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;