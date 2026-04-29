import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("education");
  const education = t("list", { returnObjects: true });

  const sorted = Array.isArray(education)
    ? [...education].sort((a, b) => b.year - a.year)
    : [];

  // First item is the degree, rest are certifications
  const [degree, ...certs] = sorted;

  return (
    <section id="education" ref={ref} className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={cn(
            "mb-16 text-center",
            isVisible && "animate-fade-in-down",
          )}
        >
          <h2 className="code-font text-2xl font-semibold uppercase tracking-widest text-brand-orange mb-2">
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Degree highlight */}
          {degree && (
            <div
              className={cn(
                "flex flex-col justify-center",
                isVisible && "animate-fade-in-right animate-delay-200",
              )}
            >
              <div className="relative rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-8 overflow-hidden">
                {/* Decorative */}
                <div
                  className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-blue/10 blur-2xl -translate-y-1/2 translate-x-1/2"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="code-font text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
                    {degree.year}
                  </p>
                  <h3 className="text-xl font-bold text-foreground leading-snug mb-1">
                    {degree.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {degree.institution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Certifications timeline */}
          <div
            className={cn(
              "space-y-1",
              isVisible && "animate-fade-in-left animate-delay-300",
            )}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span className="code-font text-xs font-semibold uppercase tracking-widest text-brand-orange">
                {t("sectionTitle").split(" ")[2]}
              </span>
            </div>

            <ul className="relative space-y-0">
              {/* Timeline line */}
              <div
                className="absolute left-3 top-2 bottom-2 w-px bg-border"
                aria-hidden="true"
              />

              {certs.map((item, index) => (
                <li
                  key={item.id || index}
                  className={cn(
                    "relative flex gap-4 pb-5 last:pb-0",
                    isVisible && "animate-blurred-fade-in",
                  )}
                  style={{ animationDelay: `${300 + index * 80}ms` }}
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-blue/40 bg-background"
                    aria-hidden="true"
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-blue/60" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-muted-foreground">
                        {item.institution}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        ·
                      </span>
                      <span className="code-font text-xs font-medium text-brand-blue/70">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
