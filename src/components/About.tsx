import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-red/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative Icons */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 border-2 border-primary rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary rounded"></div>
              </div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-script text-primary mb-4">
                About Me
              </h2>
              
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-black text-foreground">
                  GRAPHIC <span className="gradient-text">DESIGN</span>
                </h3>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm Namit Mehta — a passionate <span className="text-primary font-semibold">Graphic Designer</span> with <span className="text-primary font-semibold">3 years</span> of experience in creating visually compelling designs that speak louder than words.
                  </p>
                  
                  <p>
                    From <span className="text-primary font-semibold">branding</span> and <span className="text-primary font-semibold">social media</span> creatives to print and digital marketing assets, I bring ideas to life through thoughtful design, <span className="text-primary font-semibold">attention to detail</span>, and a <span className="text-primary font-semibold">strong understanding of visual communication</span>. My goal? To design not just what looks good—but what works.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href="https://drive.google.com/file/d/1BEYv1AcnVl5H5SUERE2yHEsAbK9ggB9G/view?usp=sharing" 
                    download="Namit_Mehta_Resume.pdf"
                    className="portfolio-btn inline-flex items-center"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile container with red outline effect */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-portfolio-red to-portfolio-red-dark p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/05d2d1f8-9a47-453a-83b5-772d0f89268e.png"
                      alt="Namit Mehta - Graphic Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary rounded-lg transform rotate-12"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-primary rounded-full"></div>
              </div>

              {/* Signature */}
              <div className="absolute -bottom-16 right-0">
                <div className="text-4xl font-script text-primary transform rotate-12">
                  Namit Mehta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;