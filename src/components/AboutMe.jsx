import React from "react";
import { cn } from "../utils/cn";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SocialMedia from "./SocialMedia";

const AboutMe = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="acerca-de-mi"
      ref={ref}
      className="bg-foreground/10 py-20 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-foreground md:text-4xl",
            isVisible && "animate-fade-in-left"
          )}
        >
          Acerca de mí
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex h-full justify-center items-center">
            <div
              className={cn(
                "relative overflow-hidden rounded-lg",
                isVisible &&
                  "animate-pulse-fade-in animate-delay-300 animate-duration-1000"
              )}
            >
              <img
                src="/profile2.webp"
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
                "text-lg text-foreground/80 text-justify text-balance",
                isVisible && "animate-fade-in-left animate-delay-400"
              )}
            >
              Desde muy temprano en mi formación me fascinó la idea de que un
              fragmento de código pudiera facilitar procesos, conectar personas
              y transformar realidades. Esta motivación me ha guiado a
              especializarme en desarrollo full-stack: disfruto tanto al
              construir la interfaz que el usuario toca como al diseñar la
              lógica de negocio que lo sostiene.
            </p>
            <p
              className={cn(
                "text-lg text-foreground/80 text-justify text-balance",
                isVisible && "animate-fade-in-left animate-delay-500"
              )}
            >
              Me caracterizo por mi capacidad de adaptación rápida ante nuevos
              retos tecnológicos (como se observa en los diversos proyectos de
              GitHub donde he explorado tanto VanillaJS como frameworks
              modernos), y por tener un fuerte compromiso con el aprendizaje
              continuo. Creo firmemente que un buen desarrollo no es solo sobre
              “hacer que funcione”, sino sobre hacer que funcione bien, sea
              mantenible y aporte valor real. En el futuro, mi objetivo es
              seguir colaborando en entornos donde pueda aportar no solo
              técnica, sino visión y responsabilidad en la entrega de productos
              digitales.
            </p>
            <div
              className={cn(
                "flex space-x-4 pt-4",
                isVisible && "animate-fade-in-left animate-delay-700"
              )}
            >
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
