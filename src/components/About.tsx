const About = () => {
  return (
    <section id="about" className="section-container animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider mb-6">
              À propos
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-foreground/80 leading-relaxed">
                  Étudiante en ingénierie des systèmes informatiques, spécialisée en IoT, 
                  systèmes embarqués et développement mobile. Mon parcours a commencé par une fascination 
                  pour la façon dont la technologie peut résoudre des problèmes réels et améliorer les 
                  capacités humaines.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider mb-6">Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Utiliser les technologies de pointe pour créer des systèmes intelligents qui comprennent, 
                  s'adaptent et répondent aux besoins humains. Je me spécialise dans le développement de 
                  solutions IoT et mobiles qui comblent le fossé entre la technologie complexe et les 
                  expériences utilisateur intuitives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Terminal */}
          <div className="bg-luna-darkest border border-border rounded-lg overflow-hidden shadow-lg">
            {/* Terminal Header */}
            <div className="bg-luna-dark px-3 py-2 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xs text-muted-foreground ml-2">terminal@farah:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-xs space-y-2">
              <div>
                <span className="text-emerald-400">$</span>
                <span className="text-foreground ml-1.5">system --status</span>
                <div className="mt-0.5 text-emerald-400 text-[10px]">STATUS: ONLINE</div>
              </div>

              <div className="mt-2">
                <span className="text-emerald-400">$</span>
                <span className="text-foreground ml-1.5">bio --fetch</span>
                <div className="mt-1.5 space-y-0.5 text-foreground/80 text-[10px] leading-relaxed">
                  <div>Name: <span className="text-primary">Farah Mehrez</span></div>
                  <div>Location: <span className="text-primary">Tunisia</span></div>
                  <div>Education: <span className="text-primary">Ingénierie des Systèmes informatique</span></div>
                  <div>Specialization: <span className="text-primary">IoT, Mobile, Full Stack</span></div>
                  <div>Status: <span className="text-emerald-400">Available</span></div>
                </div>
              </div>

              <div className="mt-2">
                <span className="text-emerald-400">$</span>
                <span className="text-foreground ml-1.5">mission --describe</span>
                <div className="mt-0.5 text-foreground/80 text-[10px] leading-relaxed">
                  Building intelligent systems that enhance human capabilities.
                </div>
              </div>

              <div className="mt-2 flex items-center">
                <span className="text-emerald-400">$</span>
                <span className="ml-1.5 w-1.5 h-3 bg-primary animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
