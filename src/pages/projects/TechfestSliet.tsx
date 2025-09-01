import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UIUXPage = () => {
  const projects = [
    {
      id: 1,
      title: "Madhuram'25 SLIET",
      description:
        "Elegant branding and UI/UX design representing the cultural festival Madhuram'25 at SLIET.",
      website: "https://madhuramsliet.com/",
      image: "/lovable-uploads/866b14c3-daf1-4d8d-a16c-20ddcf542517.png",
    },
    {
      id: 2,
      title: "Techfest'25 SLIET",
      description:
        "Dynamic tech-inspired UI/UX design and event branding for Techfest'25 at SLIET.",
      website: "https://www.techfestsliet.com/",
      image: "/lovable-uploads/5da153ca-daf3-4ff4-8b85-2d85905930f4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">UI/UX Projects</h1>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center text-foreground mb-16">
          UI/UX Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col justify-between"
            >
              <CardContent className="p-6 flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground flex-grow">
                  {project.description}
                </p>
                <div className="mt-6">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      className="flex items-center space-x-2"
                    >
                      <span>Visit Website</span>{" "}
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UIUXPage;
