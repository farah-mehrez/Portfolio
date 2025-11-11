import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Car Rental Application",
      description: "Full requirements analysis and Scrum planning with complete architecture notes. Built with modern web technologies and RESTful API design.",
      category: "Full Stack",
      link: "#",
    },
    {
      title: "Gym Management System",
      description: "Adapted from car rental structure, featuring member management, scheduling, and payment processing with real-time updates.",
      category: "Web App",
      link: "#",
    },
    {
      title: "Student Attendance Flutter App",
      description: "Real-time attendance tracking system with Firebase integration. Features QR code scanning, analytics dashboard, and push notifications.",
      category: "Mobile App",
      link: "#",
    },
    {
      title: "CyberBenders AI Challenge",
      description: "Hackathon project combining cybersecurity and AI. Explored RNN/GRU models for social engineering awareness and threat detection.",
      category: "IoT & AI",
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
