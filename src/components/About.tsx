const About = () => {
  return (
    <section id="about" className="section-container animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Étudiante en informatique passionnée par l'IoT, les systèmes embarqués et le développement mobile, 
            je me spécialise en Flutter et en développement Full Stack. J'ai réalisé plusieurs projets innovants, 
            dont un système de monitoring d'énergie avec visualisation en temps réel.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Active dans la vie associative et les hackathons (CyberBenders AI Challenge, Hack for Health, CTF), 
            j'ai renforcé mes compétences techniques et mon esprit d'équipe. De Monastir à mes études actuelles, 
            mon objectif est de poursuivre un master en France et de devenir professeure.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Curieuse et motivée, j'apprends vite et m'adapte facilement aux nouvelles technologies. 
            Quand je ne code pas, vous me trouverez en train d'écouter du rap tunisien ou d'explorer de nouveaux horizons musicaux.
          </p>
          
          <div className="pt-6 border-t border-border">
            <p className="text-lg font-semibold text-primary mb-2">What I Love:</p>
            <div className="flex flex-wrap gap-3">
              {["IoT Systems", "Flutter Development", "Full Stack", "Embedded Systems", "Music & Rap Tunisien"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
