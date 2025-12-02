import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Farah Mehrez. Tous droits réservés.
          </p>
          <Link 
            to="/actnow" 
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Découvrir ActNow →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
