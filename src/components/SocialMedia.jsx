import { Github, Linkedin } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3" role="list" aria-label="Redes sociales">
      <a
        href="https://github.com/RoneyVaLo/"
        target="_blank"
        rel="noopener noreferrer"
        role="listitem"
        aria-label="Perfil de GitHub de Roney Valdelomar"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/60 shadow-sm transition-all hover:border-foreground/40 hover:text-foreground hover:shadow-md hover:-translate-y-0.5"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/roney-valdelomar-l%C3%B3pez-b8269b211/"
        target="_blank"
        rel="noopener noreferrer"
        role="listitem"
        aria-label="Perfil de LinkedIn de Roney Valdelomar"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/60 shadow-sm transition-all hover:border-brand-blue/50 hover:text-brand-blue hover:shadow-md hover:-translate-y-0.5"
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialMedia;
