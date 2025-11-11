const About = () => {
  return (
    <section id="about" className="section-container animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            I'm a passionate storyteller who believes in the power of words to move hearts and minds. 
            My journey into creative writing began with a simple love for stories—the kind that make you 
            think, feel, and see the world differently.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Over the years, I've honed my craft across various mediums, from scripts and screenplays to 
            compelling narratives that resonate with diverse audiences. I thrive on the challenge of 
            transforming ideas into engaging content that captivates and inspires.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            When I'm not writing, you'll find me exploring new perspectives, diving into creative projects, 
            or simply observing the world around me—always searching for the next story worth telling.
          </p>
          
          <div className="pt-6 border-t border-border">
            <p className="text-lg font-semibold text-primary mb-2">What I Love:</p>
            <div className="flex flex-wrap gap-3">
              {["Storytelling", "Creative Writing", "Script Development", "Character Building", "Narrative Design"].map((item) => (
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
