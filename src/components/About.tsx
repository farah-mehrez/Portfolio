const About = () => {

  return (
    <section id="about" className="section-container animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider">
              À propos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* About Text */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-10">
              <p className="text-foreground/90 leading-relaxed text-lg">
                Étudiante en ingénierie des systèmes informatiques, spécialisée en IoT, 
                systèmes embarqués et développement mobile. Mon parcours a commencé par une fascination 
                pour la façon dont la technologie peut résoudre des problèmes réels et améliorer les 
                capacités humaines.
                Je me spécialise dans le développement de solutions IoT et mobiles qui comblent le fossé 
                entre la technologie complexe et les expériences utilisateur intuitives.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 text-center space-y-2">
                <div className="text-primary font-bold text-sm uppercase tracking-wider">Localisation</div>
                <div className="text-foreground/80">Monastir,Tunisia</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 text-center space-y-2">
                <div className="text-primary font-bold text-sm uppercase tracking-wider">Spécialisation</div>
                <div className="text-foreground/80">IoT, Mobile, Full Stack</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 text-center space-y-2">
                <div className="text-primary font-bold text-sm uppercase tracking-wider">Status</div>
                <div className="text-green-400 font-semibold">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;