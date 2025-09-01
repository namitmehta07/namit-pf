import React, { useState } from "react";
import { ArrowLeft, Instagram, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    src: "https://i.ibb.co/sTwsWYb/BROCHURE-01.png",
    title: "BROCHURE-01",
  },
  {
    src: "https://i.ibb.co/Bb3NH2r/first-page-brochure.png",
    title: "First Page Brochure",
  },
  {
    src: "https://i.ibb.co/2L43f21/front-page.png",
    title: "Front Page",
  },
  {
    src: "https://i.ibb.co/NnC5X2pL/SRIJAN-24-25-one-omore.png",
    title: "SRIJAN-24-25 One More",
  },
  {
    src: "https://i.ibb.co/CKzRZ0Kw/SRIJAN-24-25.png",
    title: "SRIJAN-24-25",
  },
 
];

const MAGNIFIER_SIZE = 180; // in px, diameter of magnifier
const ZOOM_LEVEL = 2.0;

const BaristaSangrur = () => {
  const [magnifier, setMagnifier] = useState({
    visible: false,
    imgSrc: "",
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
  });

  // Note: Each image gets its own ref for precision
  // We'll use data-* attributes to distinguish which image is hovered

  const handleMouseMove = (e, src) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const { width, height, left, top } = rect;

    let x = e.clientX - left;
    let y = e.clientY - top;

    x = Math.max(0, Math.min(x, width));
    y = Math.max(0, Math.min(y, height));

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    // Position magnifier near cursor, offset to avoid cursor overlap
    const posX = e.pageX + 20;
    const posY = e.pageY - MAGNIFIER_SIZE / 2;

    setMagnifier({
      visible: true,
      imgSrc: src,
      x: posX,
      y: posY,
      bgX,
      bgY,
    });
  };

  const handleMouseLeave = () => {
    setMagnifier((m) => ({ ...m, visible: false }));
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground"> Poster & Cover Designs</h1>
        </div>
      </header>

      {/* Hero Section (You can keep or adjust as in your original) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                  <span className="text-primary font-semibold">Poster & Cover Designs</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  Poster & Cover <span className="gradient-text">Designs</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete brand identity and packaging design for Barista Sangrur coffee brand.
                  Created a warm, inviting visual identity that captures the essence of premium coffee culture,
                  including product packaging, promotional materials, and brand collateral that enhances
                  the customer experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Services Provided:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Brand Identity</li>
                  <li>• Product Packaging Design</li>
                  <li>• Attractive Posters</li>
                  <li>• Marketing Materials</li>
                  <li>• Brand Guidelines</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="default" className="portfolio-btn">
                  View Live Project
                </Button>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth" aria-label="Website">
                    <Globe className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
            {/* Project Visual */}
            <div className="relative">
              <div className="project-card">
                <div className="text-center text-white space-y-4 p-8">
                  <h3 className="text-xl font-bold">Poster & Cover Designs</h3>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-lg font-semibold text-orange-400">Poster & Cover Designs</div>
                    <div className="text-sm">Premium Designs</div>
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

      {/* Portfolio Gallery with Magnifier */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Portfolio Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden relative">
                <CardContent className="p-0">
                  <div className="relative w-full">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-cover cursor-zoom-in select-none"
                      onMouseMove={(e) => handleMouseMove(e, item.src)}
                      onMouseLeave={handleMouseLeave}
                      draggable={false}
                      style={{ userSelect: "none" }}
                    />
                  </div>
                  <div className="text-center p-3 text-base font-medium text-foreground">{item.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Magnifier: fixed to page for smoothness */}
          {magnifier.visible && (
            <div
              style={{
                position: "fixed",
                pointerEvents: "none",
                top: magnifier.y,
                left: magnifier.x,
                width: MAGNIFIER_SIZE,
                height: MAGNIFIER_SIZE,
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.95)",
                backgroundColor: "#fff",
                backgroundImage: `url(${magnifier.imgSrc})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${ZOOM_LEVEL * 100}% ${ZOOM_LEVEL * 100}%`,
                backgroundPosition: `${magnifier.bgX}% ${magnifier.bgY}%`,
                boxShadow: "0 4px 24px 2px rgba(0,0,0,0.25)",
                zIndex: 1000,
                transition: "top 0.07s, left 0.07s",
              }}
            />
          )}
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

export default BaristaSangrur;
