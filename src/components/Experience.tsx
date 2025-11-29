import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Développeur Web",
      organization: "SummitRise, Monastir, Tunisie",
      period: "Juin 2025 – Juillet 2025",
      description: "Participer à la conception et au développement d'une application web éducative avec Laravel, incluant la planification, les tests et le débogage.",
    },
    {
      title: "Stagiaire Développeur Web",
      organization: "Mobtakeron, Monastir, Tunisie",
      period: "Juin 2025 – Août 2025",
      description: "Développer une application web pour la gestion des emplois du temps des étudiants et enseignants ainsi que des événements, en utilisant Flutter et Firebase.",
    },
    {
      title: "Enseignant d'anglais",
      organization: "KitAcademia, Istanbul, Turquie",
      period: "Juin 2024 – Août 2024",
      description: "Enseigner l'anglais avec AIESEC, aider les étudiants à progresser tout en améliorant mes compétences en communication et en pédagogie.",
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Expériences <span className="text-primary">Professionnelles</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Mon parcours professionnel et mes stages
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


