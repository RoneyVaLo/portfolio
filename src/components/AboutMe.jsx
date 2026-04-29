import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import SocialMedia from "./SocialMedia";

const AboutMe = () => {
  const { t } = useTranslation("about");
  const [ref, isVisible] = useInView();
  const description = t("description", { returnObjects: true });

  return (
    <section id="about-me" ref={ref} className="bg-surface-alt py-24 md:py-32">
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

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Photo */}
          <div
            className={cn(
              "flex justify-center",
              isVisible && "animate-fade-in-right animate-delay-200",
            )}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-2xl border-2 border-brand-blue/20 rotate-3"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-3 rounded-2xl border-2 border-brand-orange/15 -rotate-2"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/profile2.webp"
                  alt="Foto profesional de Roney Valdelomar"
                  className="object-cover w-72 h-80 md:w-80 md:h-96"
                  width={320}
                  height={384}
                  loading="lazy"
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3
              className={cn(
                "code-font text-2xl font-bold text-brand-blue",
                isVisible && "animate-fade-in-left animate-delay-300",
              )}
            >
              {t("subtitle")}
            </h3>

            {Array.isArray(description) &&
              description.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    "text-base leading-relaxed text-foreground/70 text-pretty",
                    isVisible && "animate-fade-in-left animate-delay-400",
                  )}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}

            <div
              className={cn(
                "pt-2",
                isVisible && "animate-fade-in-left animate-delay-600",
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
