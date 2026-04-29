import { cn } from "../utils/cn";
import { Github, ExternalLink } from "lucide-react";
import projects from "../assets/projects.json";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("projects");

  return (
    <section id="projects" ref={ref} className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={cn(
            "mb-16 text-center",
            isVisible && "animate-fade-in-down",
          )}
        >
          <h2 className="code-font text-2xl font-semibold uppercase tracking-widest text-brand-orange mb-2">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden",
                "shadow-sm transition-all duration-300",
                "hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 hover:border-brand-blue/30",
                isVisible && "animate-zoom-in animate-duration-700",
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-accent">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Captura de pantalla de ${t(`${project.id}.title`)}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={192}
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div className="space-y-1.5">
                  <h3 className="code-font font-bold text-foreground leading-snug">
                    {t(`${project.id}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {t(`${project.id}.description`)}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="code-font rounded-md bg-brand-blue/8 px-2.5 py-0.5 text-xs font-semibold text-brand-blue border border-brand-blue/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${t(`${project.id}.title`)} en GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all hover:border-foreground/40 hover:text-foreground hover:bg-accent"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${t(`${project.id}.title`)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 text-xs font-medium text-brand-blue transition-all hover:bg-brand-blue hover:text-white hover:border-brand-blue"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
