import { ArrowLeft, ExternalLink, Instagram, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LaPinozPizza = () => {
  const portfolioItems = [
    "/lovable-uploads/3c551af4-32bf-4832-acff-aa5751f33b9e.png"
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
          <h1 className="text-2xl font-bold text-foreground">La Pino'z Pizza Sangrur</h1>
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
                  <span className="text-primary font-semibold">Restaurant Branding</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  LA PINO'Z <span className="gradient-text">PIZZA</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brand revamp and marketing materials design for La Pino'z Pizza Sangrur - "The Giant Pizza Slice". 
                  Created vibrant, appetizing visual identity that reflects the brand's fun personality and 
                  premium pizza offerings, including promotional materials and social media assets.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Services Provided:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Restaurant Brand Identity</li>
                  <li>• Pizza Chain Marketing Materials</li>
                  <li>• Menu Design & Layout</li>
                  <li>• Social Media Graphics</li>
                  <li>• Promotional Campaign Design</li>
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
                  <h3 className="text-xl font-bold">LA PINO'Z PIZZA SANGRUR</h3>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-lg font-semibold">La Pino'z Pizza</div>
                    <div className="text-sm">"The Giant Pizza Slice"</div>
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
                    alt={`La Pino'z Pizza Design ${index + 1}`}
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

export default LaPinozPizza;