import { Users, Globe, Terminal } from "lucide-react";
import { Check } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      icon: Users,
      title: "Membre du Département Outgoing Global Talent",
      organization: "AIESEC Tunisia – Hadrumet",
      period: "2023 - Présent",
      description: "Membre de l'équipe d'organisation pour l'événement TEDx Sousse. Mise en relation des candidats avec les opportunités disponibles.",
      achievements: [
        "Membre de l'équipe d'organisation pour l'événement TEDx Sousse",
        "Mise en relation des candidats avec les opportunités disponibles",
        "Coordination des activités du département",
      ],
    },
    {
      icon: Terminal,
      title: "Participante aux ateliers de cybersécurité",
      organization: "SECURNET ISITCOM",
      period: "2023 - Présent",
      description: "Participation aux ateliers et sessions de cybersécurité. Sujets incluant Kali Linux et les attaques de phishing.",
      achievements: [
        "Participation aux ateliers et sessions de cybersécurité",
        "Formation sur Kali Linux et les attaques de phishing",
        "Développement de compétences en sécurité informatique",
      ],
    },
  ];

  return (
    <section id="leadership" className="section-container bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Vie <span className="text-primary">Associative</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Rôles organisationnels et expériences de leadership
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                    <p className="text-primary font-medium mb-2">{role.organization}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary mb-3">
                      {role.period}
                    </span>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-primary mb-2">Réalisations clés :</p>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;


