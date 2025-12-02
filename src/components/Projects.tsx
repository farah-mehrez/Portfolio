import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// ✅ Use the images YOU ALREADY imported
import carRentalImage from '../assets/car-rental.jpg';
import gymManagementImage from '../assets/gym-management.jpg';
import schoolAppImage from '../assets/school-app.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Application de Location de Voitures",
      description: "Analyse complète des exigences et planification Scrum avec notes d'architecture complètes. Construit avec des technologies web modernes et une conception d'API RESTful.",
      category: "Full Stack",
      link: "https://github.com/farah-mehrez/Application-de-Location-de-Voitures",
      image: carRentalImage,   // ✅ FIXED
    },
    {
      title: "Système de Gestion de Salle de Sport",
      description: "Adapté de la structure de location de voitures, avec gestion des membres, planification et traitement des paiements avec mises à jour en temps réel.",
      category: "Application Web",
      link: "https://github.com/farah-mehrez/Syst-me-de-Gestion-de-Salle-de-Sport",
      image: gymManagementImage,   // ✅ FIXED
    },
    {
      title: "Application Flutter de Présence Étudiante",
      description: "Système de suivi de présence en temps réel avec intégration Firebase. Fonctionnalités : scan de code QR, tableau de bord analytique et notifications push.",
      category: "Application Mobile",
      link: "https://github.com/farah-mehrez/Application-Flutter-de-Presence",
      image: schoolAppImage,   // ✅ FIXED
    },
  ];

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Projets <span className="text-primary">Phares</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Une vitrine de mon travail créatif et de mes réalisations
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
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
                    Voir le projet
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
