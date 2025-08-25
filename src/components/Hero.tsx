import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-red/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-portfolio-red/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl text-foreground mb-4 font-light tracking-wide">
            NAMIT <span className="gradient-text font-bold">MEHTA</span>
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-3d mb-8 tracking-tight">
            PORTFOLIO
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-8">
            <span className="text-script text-4xl md:text-5xl mr-4">Graphic</span>
            <span className="gradient-text font-bold">Designer</span>
          </div>
        </div>

        {/* Year Badge */}
        <div className="mb-12">
          <div className="inline-block text-8xl md:text-9xl lg:text-[12rem] font-black text-3d opacity-80">
            2025
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-3 rounded-full border-2 border-primary hover:bg-primary/20 transition-smooth"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-primary rounded-lg transform rotate-12 opacity-60"></div>
      <div className="absolute top-20 right-40 w-12 h-12 border-2 border-primary rounded-lg transform -rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-primary rounded-2xl transform rotate-45 opacity-30"></div>
    </section>
  );
};

export default Hero;