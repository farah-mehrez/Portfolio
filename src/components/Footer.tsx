const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with <span className="text-primary">❤</span> and passion for storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
