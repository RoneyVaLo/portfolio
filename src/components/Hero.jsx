import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { Download, ArrowRight } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  const [ref, isVisible] = useInView();
  const { t, i18n } = useTranslation("hero");
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = [...t("roles", { returnObjects: true })];
    const typed = new Typed(typedRef.current, {
      strings: roles,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1800,
      startDelay: 400,
      loop: true,
      smartBackspace: false,
    });
    return () => typed.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative bg-background overflow-hidden py-24 md:py-36"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Gradient orb */}
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-orange/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text content */}
          <div className="space-y-8">
            {/* Greeting + name */}
            <div className="space-y-2">
              <p
                className={cn(
                  "code-font text-sm font-medium text-brand-orange tracking-widest uppercase text-center md:text-start",
                  isVisible && "animate-fade-in-right animate-delay-100"
                )}
              >
                {t("title")}
              </p>
              <h1
                className={cn(
                  "code-font text-4xl font-bold tracking-tight text-center md:text-start md:text-5xl lg:text-6xl",
                  "gradient-text",
                  isVisible && "animate-fade-in-right animate-delay-200"
                )}
              >
                Roney Valdelomar
              </h1>
            </div>

            {/* Typed role */}
            <div
              className={cn(
                "flex items-center gap-2 justify-center md:justify-start",
                isVisible && "animate-fade-in-right animate-delay-300"
              )}
            >
              <span className="text-lg text-foreground/60">{t("subtitle")}</span>
              <span
                ref={typedRef}
                className="text-lg font-semibold text-brand-blue"
                aria-live="polite"
              />
            </div>

            {/* Description */}
            <p
              className={cn(
                "text-base leading-relaxed text-center md:text-start text-pretty text-foreground/65 max-w-lg mx-auto md:mx-0",
                isVisible && "animate-fade-in-right animate-delay-400"
              )}
            >
              {t("description")}
            </p>

            {/* CTAs */}
            <div
              className={cn(
                "flex flex-wrap gap-3 items-center justify-center md:justify-start",
                isVisible && "animate-fade-in-right animate-delay-500"
              )}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition-all hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                {t("btn-projects")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              {/* Secondary CTA */}
              <a
                href={
                  i18n.language === "es"
                    ? "/CV_Roney_Valdelomar.pdf"
                    : "/CV_Roney_Valdelomar_en.pdf"
                }
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground/80 shadow-sm transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {t("btn-cv")}
              </a>
            </div>

            {/* Social links */}
            <div
              className={cn(
                "flex justify-center md:justify-start",
                isVisible && "animate-fade-in-right animate-delay-600"
              )}
            >
              <SocialMedia />
            </div>
          </div>

          {/* Profile image */}
          <ProfileImage isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
