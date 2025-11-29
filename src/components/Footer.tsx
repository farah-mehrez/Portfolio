const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Farah Mehrez. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
