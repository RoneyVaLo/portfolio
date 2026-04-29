import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-alt py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-blue text-xs font-bold text-white">
              RV
            </div>
            <span className="text-sm font-medium text-foreground/70">
              Roney Valdelomar
            </span>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            © {year}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RoneyVaLo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Roney Valdelomar"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/roney-valdelomar-l%C3%B3pez-b8269b211/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Roney Valdelomar"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
