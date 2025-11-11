import { Cpu, Smartphone, Database, Code2, Server, Lightbulb } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "IoT & Embedded Systems", level: 90, icon: Cpu },
    { name: "Flutter & Dart", level: 88, icon: Smartphone },
    { name: "Firebase & Databases", level: 85, icon: Database },
    { name: "Full Stack Development", level: 82, icon: Code2 },
    { name: "React & Node.js", level: 80, icon: Server },
    { name: "Python & Laravel", level: 78, icon: Lightbulb },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="animate-slide-up bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
