import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Poster & Cover Designs",
      category: "Branding",
      description: "Complete brand identity and packaging design for a premium coffee brand",
      link: "/projects/barista-sangrur",
      featured: true,
    },
    {
      id: 2,
      title: "Branding and Logo Designing",
      category: "Restaurant Branding",
      description: "Brand revamp and marketing materials for popular pizza chain",
      link: "/projects/la-pinoz-pizza",
      featured: true,
    },
    {
      id: 4,
      title: "Instagram and LinkedIn Posts",
      category: "Education",
      description: "Educational platform branding and UI/UX design",
      link: "/projects/spark-point-education",
      featured: true,
    },
    {
      id: 6,
      title: "UI/UX Designer",
      category: "Event Branding",
      description: "Tech festival logo and event branding design",
      link: "/projects/techfest-sliet",
      featured: true,
    },
    {
      id: 7,
      title: "Product Design",
      category: "Cultural Event",
      description: "Cultural festival branding and visual identity",
      link: "/projects/madhuram-sliet",
      featured: true,
    },
  ];

  // Pagination state
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Slice projects for current page
  const currentProjects = projects.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const goPrev = () => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  const goNext = () => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-red/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-script text-primary mb-4">My Portfolio</h2>

            <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8">SHOWCASES</h3>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl gradient-text font-bold">CREATIVE, IMPACTFUL DESIGNS</p>
              <p className="text-lg text-muted-foreground">100+ CREATIVE AND UNIQUE DESIGNS.</p>
              <p className="text-xl md:text-2xl gradient-text font-bold">REMARKABLE RESULTS!</p>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1BEYv1AcnVl5H5SUERE2yHEsAbK9ggB9G/view?usp=sharing"
                download="Namit_Mehta_Resume.pdf"
                className="portfolio-btn text-lg px-12 py-4 inline-flex items-center"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Projects */}
        <div className="mb-16">
          <h4 className="text-5xl md:text-6xl font-script text-primary mb-8 text-center">My Top Projects</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentProjects.map((project) => (
              <Link key={project.id} to={project.link}>
                <Card className="project-card group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Project Title */}
                      <div className="text-center">
                        <h5 className="text-sm font-bold text-white mb-2">{project.title}</h5>
                      </div>

                      {/* Project Logo/Visual */}
                      <div className="bg-white/10 rounded-xl h-32 flex items-center justify-center mb-4">
                        <div className="text-white font-bold text-lg text-center">
                          {project.title}
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="flex justify-center space-x-4 mb-4">
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      </div>

                      {/* View Button */}
                      <div className="text-center">
                        <Button
                          variant="outline"
                          className="bg-white text-primary border-none hover:bg-white/90 rounded-full px-6 py-2 text-sm font-bold"
                        >
                          VIEW DESIGNS
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-8 mt-8 mb-12">
            <button
              className="w-12 h-12 rounded-full border-2 border-primary hover:bg-primary/20 transition-smooth flex items-center justify-center"
              onClick={goPrev}
              aria-label="Previous projects"
            >
              <ArrowRight className="w-6 h-6 text-primary transform rotate-180" />
            </button>
            <button
              className="w-12 h-12 rounded-full border-2 border-primary hover:bg-primary/20 transition-smooth flex items-center justify-center"
              onClick={goNext}
              aria-label="Next projects"
            >
              <ArrowRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="h-2 bg-white/20 rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: ((page + 1) / totalPages) * 100 + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
