import React from "react";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";

const Hero = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="inicio" ref={ref} className="relative bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1
              className={cn(
                "font-raleway text-4xl font-bold tracking-tight text-[#333] md:text-5xl lg:text-6xl",
                isVisible && "animate-fade-in-right animate-delay-100"
              )}
            >
              Desarrollador de Software Apasionado
            </h1>
            <p
              className={cn(
                "text-xl text-[#333]/80",
                isVisible && "animate-fade-in-right animate-delay-300"
              )}
            >
              Listo para crear soluciones innovadoras
            </p>
            <p
              className={cn(
                "text-lg text-justify text-balance text-[#333]/70",
                isVisible && "animate-fade-in-right animate-delay-400"
              )}
            >
              Soy un desarrollador de software comprometido con la creación de
              aplicaciones web modernas y eficientes. Mi pasión es resolver
              problemas complejos con soluciones elegantes.
            </p>
            <button
              className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]",
                "h-9 px-4 py-2 has-[>svg]:px-3",
                "bg-[#E67E22] hover:bg-[#E67E22]/90 text-white",
                isVisible && "animate-fade-in-right animate-delay-500"
              )}
            >
              <a href="#proyectos">Ver mis proyectos</a>
            </button>
          </div>
          <div className="flex justify-center">
            <div
              className={cn(
                "relative h-90 w-90 overflow-hidden rounded-full border-4 border-[#3498DB]",
                isVisible &&
                  "animate-flip-in-x animate-delay-300 animate-duration-800"
              )}
            >
              <img
                src="/profile.png"
                // src="/profile2.jpg"
                alt="Foto de perfil"
                className="object-cover"
                width={360}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
