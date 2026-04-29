import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

// Category accent colors (cycling through brand palette)
const categoryColors = [
  "border-brand-blue/30 bg-brand-blue/5",
  "border-brand-orange/30 bg-brand-orange/5",
  "border-brand-blue/20 bg-brand-blue/3",
  "border-brand-orange/20 bg-brand-orange/3",
  "border-brand-blue/30 bg-brand-blue/5",
  "border-brand-orange/30 bg-brand-orange/5",
];

const categoryTitleColors = [
  "text-brand-blue",
  "text-brand-orange",
  "text-brand-blue",
  "text-brand-orange",
  "text-brand-blue",
  "text-brand-orange",
];

const Skills = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("skills");
  const skillsData = t("skills", { returnObjects: true });

  return (
    <section id="skills" ref={ref} className="bg-surface-alt py-24 md:py-32">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(skillsData) &&
            skillsData.map((category, catIndex) => (
              <div
                key={catIndex}
                className={cn(
                  "rounded-2xl border p-6 transition-all duration-300",
                  "hover:shadow-md hover:-translate-y-0.5",
                  categoryColors[catIndex % categoryColors.length],
                  isVisible && "animate-zoom-in animate-duration-700",
                )}
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <h3
                  className={cn(
                    "code-font mb-4 text-sm font-bold uppercase tracking-wider",
                    categoryTitleColors[catIndex % categoryTitleColors.length],
                  )}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:border-brand-blue/40 hover:text-foreground hover:bg-card"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
