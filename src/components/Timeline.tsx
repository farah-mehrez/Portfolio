import { GraduationCap } from "lucide-react";

const Timeline = () => {
  const education = [
    {
      title: "Licence en ingénierie des systèmes informatiques",
      organization: "Institut Supérieur d'Informatique et des Technologies de Communication (ISITCOM), Sousse, Tunisie",
      period: "Sep 2023 – Juin 2026",
      description: "Formation en ingénierie des systèmes informatiques avec spécialisation en IoT, systèmes embarqués et développement mobile.",
    },
    {
      title: "Baccalauréat en Sciences expérimentales",
      organization: "Said Boubaker lycée secondaire, Monastir, Tunisie",
      period: "Juin 2023",
      description: "Obtention du baccalauréat en sciences expérimentales.",
    },
  ];

  return (
    <section id="timeline" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          <span className="text-primary">Formation</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Mon parcours académique
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background z-10">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.organization}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
