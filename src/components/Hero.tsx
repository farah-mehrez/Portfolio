import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,57,70,0.1),transparent_50%)]" />
      
      <div className="section-container flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Profile Image */}
        <div className="animate-slide-in-left">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50">
              <img
                src={profileImage}
                alt="Farah Mehrez - Développeuse Web"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left animate-slide-in-right">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Bonjour, je suis{" "}
            <span className="text-gradient">Farah Mehrez</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Développeuse Web/Mobile & IoT
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            IoT • Flutter • Construire des solutions innovantes avec passion pour la technologie.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-hero"
            >
              Voir mes projets
            </Button>
            <a href="/CV_Farah_Mehrez.pdf" download="CV_Farah_Mehrez.pdf">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Télécharger le CV
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
