import React from "react";
import { cn } from "../utils/cn";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-raleway text-4xl font-bold tracking-tight text-[#333] md:text-5xl lg:text-6xl animate-fade-in-right animate-delay-100">
              Desarrollador de Software Apasionado
            </h1>
            <p className="text-xl text-[#333]/80 animate-fade-in-right animate-delay-300">
              Listo para crear soluciones innovadoras
            </p>
            <p className="text-lg text-justify text-balance text-[#333]/70 animate-fade-in-right animate-delay-500">
              Soy un desarrollador de software comprometido con la creación de
              aplicaciones web modernas y eficientes. Mi pasión es resolver
              problemas complejos con soluciones elegantes.
            </p>
            <button
              className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px]",
                "h-9 px-4 py-2 has-[>svg]:px-3",
                "bg-[#E67E22] hover:bg-[#E67E22]/90 text-white animate-fade-in-right animate-delay-700"
              )}
            >
              <a href="#proyectos">Ver mis proyectos</a>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-[#3498DB] animate-flip-in-x animate-delay-300 animate-duration-800">
              <img
                src="/profile.png"
                // src="/profile2.jpg"
                alt="Foto de perfil"
                className="object-cover"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
