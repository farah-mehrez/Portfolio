import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contactée. Je vous répondrai bientôt !",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:farahmehrez68@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/farah-mehrez", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/farah-mehrez", label: "GitHub" },
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Me <span className="text-primary">Contacter</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Vous avez un projet en tête ? Créons quelque chose d'extraordinaire ensemble.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary min-h-[150px]"
                />
              </div>
              <Button type="submit" className="btn-hero w-full">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-right">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Me Contacter</h3>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à me contacter via l'une de ces plateformes. Je suis toujours ouverte à discuter de nouveaux projets et opportunités créatives.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
