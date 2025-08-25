const Clients = () => {
  const clients = [
    {
      name: "Barista",
      logo: "BARISTA", 
      description: "Coffee Brand"
    },
    {
      name: "Spark Point Education",
      logo: "SPE",
      description: "Educational Platform"
    },
    {
      name: "La Pino'z Pizza",
      logo: "LA PINO'Z", 
      description: "Pizza Brand"
    },
    {
      name: "SLIET Fests",
      logo: "SLIET",
      description: "Cultural & Tech Events"
    }
  ];

  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/5"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-portfolio-red/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-script text-primary mb-4">
              My Top
            </h2>
            
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-3d mb-8">
              CLIENTS
            </h3>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="client-logo group">
              <div className="text-center space-y-4">
                <div className="h-20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {client.logo}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {client.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            "Branding is the soul of a business—it's how a company expresses its identity, values, and personality. A strong brand builds trust and connection."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Clients;