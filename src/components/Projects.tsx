import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Silent Echo",
      description: "A compelling screenplay exploring themes of memory and identity through a non-linear narrative structure.",
      category: "Screenplay",
      link: "#",
    },
    {
      title: "Voices Unheard",
      description: "Documentary script highlighting untold stories from marginalized communities with powerful testimonials.",
      category: "Documentary",
      link: "#",
    },
    {
      title: "Urban Dreams",
      description: "A series of interconnected short stories capturing the essence of city life and human connections.",
      category: "Creative Writing",
      link: "#",
    },
    {
      title: "Midnight Conversations",
      description: "A dialogue-driven piece exploring philosophical questions through intimate late-night exchanges.",
      category: "Script",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A showcase of my creative work and storytelling
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80 mb-4">
                  {project.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
