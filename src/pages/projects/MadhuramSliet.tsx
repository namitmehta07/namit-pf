import React, { useState } from "react";
import { ArrowLeft, Instagram, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: "tshirt-1",
    title: "T-Shirt Design Collection",
    images: [
      "https://i.ibb.co/Pzfxwq25/image.png",
      "https://i.ibb.co/gb9LwpGP/image.png",
    ],
  },
  {
    id: "idcard-1",
    title: "ID Card Designs",
    images: [
      "https://i.ibb.co/GQhMLx8z/image.png",
      "https://i.ibb.co/B5X80DBr/image.png",
      "https://i.ibb.co/bYjqrYw/image.png",
    ],
  },
];

const MadhuramSliet = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20 sticky top-0 bg-background z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Madhuram'25 SLIET</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-7xl mx-auto">
        {/* ... your existing Hero content ... */}
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Product Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(({ id, title, images }) => (
            <Card key={id} className="overflow-hidden">
              <CardContent className="p-0 cursor-pointer">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                <div className="text-center p-4 text-lg font-semibold">{title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Sections - All on same page */}
      {portfolioItems.map(({ id, title, images }) => (
        <section key={id} id={id} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, idx) => (
              <Card key={idx}>
                <CardContent className="p-0">
                  <img src={src} alt={`${title} ${idx + 1}`} className="w-full h-auto object-cover" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
        <p className="text-lg text-muted-foreground mb-8">
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
      </section>
    </div>
  );
};

export default MadhuramSliet;
