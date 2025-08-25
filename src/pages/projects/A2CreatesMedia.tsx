import { ArrowLeft, ExternalLink, Instagram, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const A2CreatesMedia = () => {
  const portfolioItems = [
    "/lovable-uploads/76148e0f-5e91-425d-8b51-459c861d09d8.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">A2 Creates Media</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                  <span className="text-primary font-semibold">Digital Agency Branding</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  A2 CREATES <span className="gradient-text">MEDIA</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern logo design and brand identity for A2 Creates Media, a creative digital agency. 
                  Developed a contemporary visual identity that represents innovation, creativity, and 
                  professional excellence in digital media services, perfectly capturing their creative expertise.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Services Provided:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital Agency Logo Design</li>
                  <li>• Creative Brand Identity</li>
                  <li>• Business Card Design</li>
                  <li>• Marketing Collateral</li>
                  <li>• Brand Guidelines Development</li>
                </ul>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="default" className="portfolio-btn">
                  View Live Project
                </Button>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth">
                    <Instagram className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth">
                    <Facebook className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth">
                    <Globe className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative">
              <div className="project-card">
                <div className="text-center text-white space-y-4 p-8">
                  <h3 className="text-xl font-bold">A2 CREATES MEDIA</h3>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-lg font-semibold">A2 CREATES</div>
                    <div className="text-sm">MEDIA</div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Instagram className="w-5 h-5" />
                    <Facebook className="w-5 h-5" />
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Portfolio Gallery</h3>
          
          <div className="grid grid-cols-1 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={item} 
                    alt={`A2 Creates Media Design ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground">
            Let's create something amazing together. Contact me to discuss your design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="portfolio-btn">
              Get Started
            </Link>
            <Link to="/" className="portfolio-btn-outline">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default A2CreatesMedia;