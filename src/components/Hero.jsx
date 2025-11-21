import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { Download } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [ref, isVisible] = useInView();
  const { t, i18n } = useTranslation("hero");

  const typedRef = useRef(null);

  useEffect(() => {
    const roles = [...t("roles", { returnObjects: true })];
    const typed = new Typed(typedRef.current, {
      strings: roles,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
      smartBackspace: false,
    });

    return () => typed.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]); // se reinicia cuando cambia el idioma

  return (
    <section
      id="home"
      ref={ref}
      className="relative bg-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2
                className={cn(
                  "code-font text-3xl font-bold tracking-tight text-foreground text-center md:text-start md:text-4xl lg:text-5xl",
                  isVisible && "animate-fade-in-right animate-delay-100"
                )}
              >
                {t("title")}
              </h2>
              <h1
                className={cn(
                  "code-font text-4xl font-bold tracking-tight text-foreground text-center md:text-start md:text-5xl lg:text-6xl",
                  isVisible && "animate-fade-in-right animate-delay-100",
                  "text-[#3498DB]"
                )}
              >
                Roney Valdelomar
              </h1>
            </div>
            <p
              className={cn(
                "text-center md:text-start text-[#3498DB]",
                isVisible && "animate-fade-in-right animate-delay-300"
              )}
            >
              <span
                className={cn(
                  "text-2xl tracking-tight text-foreground text-center md:text-start",
                  isVisible && "animate-fade-in-right animate-delay-100"
                )}
              >
                {t("subtitle")}
              </span>
              <span
                ref={typedRef}
                className={cn(
                  "text-2xl font-bold tracking-tight text-center md:text-start",
                  isVisible && "animate-fade-in-right animate-delay-300"
                )}
              ></span>
            </p>
            <p
              className={cn(
                "text-lg text-center md:text-start text-pretty text-foreground/70",
                isVisible && "animate-fade-in-right animate-delay-400"
              )}
            >
              {t("description")}
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <button
                className={cn(
                  "inline-flex items-center justify-center rounded-md gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "h-9 px-4 py-2",
                  "bg-[#E67E22] hover:bg-[#E67E22]/90 text-white",
                  "cursor-pointer",
                  isVisible && "animate-fade-in-right animate-delay-800"
                )}
              >
                <a href="#projects">{t("btn-projects")}</a>
              </button>

              <a
                href={
                  i18n.language === "es"
                    ? "/CV_Roney_Valdelomar.pdf"
                    : "/CV_Roney_Valdelomar_en.pdf"
                }
                download
              >
                <button
                  className={cn(
                    "inline-flex items-center justify-center rounded-md gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "h-9 px-4 py-2",
                    "bg-[#E67E22] hover:bg-[#E67E22]/90 text-white",
                    "cursor-pointer",
                    isVisible && "animate-fade-in-right animate-delay-700"
                  )}
                >
                  <Download className="w-4 h-4" />
                  {t("btn-cv")}
                </button>
              </a>

              <div
                className={
                  isVisible && "animate-fade-in-right animate-delay-500"
                }
              >
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="flex justify-center order-first md:order-last">
            <div
              className={cn(
                "relative h-78 w-78 md:h-90 md:w-90 overflow-hidden rounded-full border-4 border-[#3498DB]",
                isVisible &&
                  "animate-flip-in-x animate-delay-300 animate-duration-800"
              )}
            >
              <img
                src="/profile.webp"
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
