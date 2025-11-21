import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import SocialMedia from "./SocialMedia";

const AboutMe = () => {
  const { t } = useTranslation("about");
  const [ref, isVisible] = useInView();

  const description = t("description", { returnObjects: true });

  return (
    <section
      id="about-me"
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
          {t("title")}
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
              {t("subtitle")}
            </h3>

            {Array.isArray(description) &&
              description.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    "text-lg text-foreground/80 text-justify text-pretty",
                    isVisible && "animate-fade-in-left animate-delay-400"
                  )}
                >
                  {paragraph}
                </p>
              ))}
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
