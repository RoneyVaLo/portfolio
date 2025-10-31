import React from "react";
import { cn } from "../utils/cn";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { useInView } from "../hooks/useInView";

const AboutMe = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="acerca-de-mi" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-[#333] md:text-4xl",
            isVisible && "animate-fade-in-left"
          )}
        >
          Acerca de mí
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <div
              className={cn(
                "relative h-96 w-80 overflow-hidden rounded-lg",
                isVisible &&
                  "animate-pulse-fade-in animate-delay-300 animate-duration-1000"
              )}
            >
              <img
                src="/profile2.jpg"
                alt="Foto profesional"
                className="object-cover"
                height={384}
                width={320}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3
              className={cn(
                "code-font text-2xl font-semibold text-[#3498DB]",
                isVisible && "animate-fade-in-left animate-delay-300"
              )}
            >
              Mi historia
            </h3>
            <p
              className={cn(
                "text-lg text-[#333]/80 text-justify text-balance",
                isVisible && "animate-fade-in-left animate-delay-400"
              )}
            >
              Desde que descubrí la programación, me apasionó la capacidad de
              crear soluciones que impactan positivamente en la vida de las
              personas. Mi objetivo profesional es desarrollar aplicaciones que
              combinen funcionalidad, rendimiento y experiencia de usuario
              excepcional.
            </p>
            <p
              className={cn(
                "text-lg text-[#333]/80 text-justify text-balance",
                isVisible && "animate-fade-in-left animate-delay-500"
              )}
            >
              Me caracterizo por mi capacidad de aprendizaje continuo, trabajo
              en equipo y resolución creativa de problemas. Creo firmemente en
              el código limpio, las buenas prácticas y la importancia de la
              comunicación efectiva en el desarrollo de software.
            </p>
            <div
              className={cn(
                "flex space-x-4 pt-4",
                isVisible && "animate-fade-in-left animate-delay-700"
              )}
            >
              <a
                href="https://github.com/RoneyVaLo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]",
                    "border bg-white shadow-xs",
                    "size-9",
                    "rounded-full cursor-pointer hover:animate-jelly"
                  )}
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/roney-valdelomar-l%C3%B3pez-b8269b211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]",
                    "border bg-white shadow-xs",
                    "size-9",
                    "rounded-full cursor-pointer hover:animate-jelly"
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
