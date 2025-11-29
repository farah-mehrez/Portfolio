import { Cpu, Smartphone, Database, Code2, Server, Lightbulb } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "IoT & Systèmes Embarqués", level: 4, description: "Développement de systèmes embarqués et solutions IoT", icon: Cpu },
    { name: "Flutter & Dart", level: 4, description: "Développement d'applications mobiles cross-platform", icon: Smartphone },
    { name: "Firebase & Bases de données", level: 4, description: "Gestion de bases de données et services cloud", icon: Database },
    { name: "Développement Full Stack", level: 3, description: "Applications web complètes frontend et backend", icon: Code2 },
    { name: "React & Node.js", level: 3, description: "Frameworks modernes pour applications web", icon: Server },
    { name: "Python & Laravel", level: 3, description: "Backend et développement web avec frameworks", icon: Lightbulb },
  ];

  const renderDots = (level: number) => {
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? "bg-primary" : "bg-primary/20"
        }`}
      />
    ));
  };

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Matrice de <span className="text-primary">Compétences</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Un aperçu complet de mes capacités techniques et de mon expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="animate-slide-up bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    {renderDots(skill.level)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
