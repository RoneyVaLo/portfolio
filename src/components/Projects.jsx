import React from "react";
import { cn } from "../utils/cn";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import projects from "../assets/projects.json";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("projects");

  return (
    <section id="projects" ref={ref} className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-foreground md:text-4xl",
            isVisible && "animate-fade-in-down"
          )}
        >
          {t("title")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-accent pb-6 shadow-sm",
                "overflow-hidden transition-all hover:shadow-lg",
                isVisible && "animate-zoom-in animate-duration-700"
              )}
              style={{
                animationDelay: `${index * 200}ms`, // cada elemento 200ms más tarde
              }}
            >
              <div className="relative h-52 w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={t(`${project.id}.title`)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div
                className={cn(
                  "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                )}
              >
                <div className={cn("leading-none font-semibold code-font")}>
                  {t(`${project.id}.title`)}
                </div>
                <div className={cn("text-muted-foreground text-sm")}>
                  {t(`${project.id}.description`)}
                </div>
              </div>
              <div className={cn("px-6")}>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="code-font rounded-full bg-[#3498DB]/10 px-3 py-1 text-xs font-bold text-[#3498DB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={cn(
                  "flex items-center px-6 [.border-t]:pt-6",
                  "flex justify-between"
                )}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={cn(
                      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]", // Estilos Base
                      "border bg-white shadow-xs hover:bg-[#dedede] hover:text-[#0f172a] dark:bg-[#e2e8f0]/30 dark:border-[#e2e8f0] dark:hover:bg-[#e2e8f0]/50", // Variante Outline
                      "h-8 rounded-md gap-1.5 px-3", // Size sm
                      "cursor-pointer hover:scale-105"
                    )}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </button>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={cn(
                      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]",
                      "border bg-white shadow-xs hover:bg-[#f1f5f9] hover:text-[#0f172a] dark:bg-[#e2e8f0]/30 dark:border-[#e2e8f0] dark:hover:bg-[#e2e8f0]/50",
                      "h-8 rounded-md gap-1.5 px-3",
                      "cursor-pointer hover:scale-105"
                    )}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
