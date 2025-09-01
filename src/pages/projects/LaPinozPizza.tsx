import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const LogosPage = () => {
  const logos = [
    {
      src: "https://i.ibb.co/Zzvq1dJp/final-logo-techfest-25-namit-7.png",
      title: "Techfest 25",
    },
    {
      src: "https://i.ibb.co/fgjYsXq/sliet-cultural-committee-logo-1.png",
      title: "SLIET Cultural Committee",
    },
    {
      src: "https://i.ibb.co/G4p38TFm/sliet-cultural-committee-logo-2.png",
      title: "SLIET Cultural Committee",
    },
    {
      src: "https://i.ibb.co/DgRT8DYw/udayachal-logo.png",
      title: "Udayachal High School",
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
          <h1 className="text-2xl font-bold text-foreground">Logo Gallery</h1>
        </div>
      </header>

      {/* Logos Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Logo Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map(({ src, title }, index) => (
            <Card key={index} className="overflow-hidden text-center p-6">
              <CardContent className="p-0">
                <img
                  src={src}
                  alt={title}
                  className="mx-auto max-h-40 object-contain"
                />
              </CardContent>
              <div className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LogosPage;
