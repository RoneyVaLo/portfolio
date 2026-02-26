import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("skills");
  const skillsData = t("skills", { returnObjects: true });

  return (
    <section id="skills" ref={ref} className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-foreground md:text-4xl",
            isVisible && "animate-fade-in-down",
          )}
        >
          {t("title")}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, catIndex) => (
            <div
              key={catIndex}
              className={cn(
                "rounded-xl border-2 border-accent bg-card p-6 shadow-sm transition-all hover:border-[#3498DB]/50",
                isVisible && "animate-zoom-in animate-duration-700",
              )}
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="code-font mb-4 text-xl font-bold text-[#3498DB]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative flex items-center gap-2 rounded-lg border border-accent bg-background px-4 py-2 transition-colors hover:bg-accent cursor-pointer"
                  >
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                      {skill}
                    </span>
                  </div>
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
