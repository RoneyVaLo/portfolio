import skillsData from "../assets/skills.json";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("skills");
  const { technicalSkills } = skillsData;
  const softSkills = t("soft-skills", { returnObjects: true });

  return (
    <section id="skills" ref={ref} className="bg-foreground/10 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-foreground md:text-4xl",
            isVisible && "animate-fade-in-down"
          )}
        >
          {t("title")}
        </h2>
        <div className="grid gap-12">
          {/* Primera fila: Habilidades Técnicas y Blandas */}
          <div className={"grid gap-12 md:grid-cols-2"}>
            <div>
              <h3
                className={cn(
                  "mb-6 code-font text-2xl font-semibold text-[#3498DB]",
                  isVisible && "animate-fade-in-right"
                )}
              >
                {t("technical-skills-title")}
              </h3>
              <div className="space-y-4">
                {technicalSkills
                  .sort((a, b) => b.level - a.level)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className={cn(
                        "space-y-2",
                        isVisible && "animate-fade-in-right"
                      )}
                      style={{
                        animationDelay: `${index * 200}ms`, // cada elemento 200ms más tarde
                      }}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/70">
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className={cn(
                          "relative h-4 w-full overflow-hidden rounded-full bg-gray-200",
                          "h-2 bg-[#F0F0F0]"
                        )}
                      >
                        <div
                          className={cn(
                            "h-full bg-blue-500 transition-all",
                            "bg-[#3498DB]"
                          )}
                          style={{
                            transform: `translateX(-${100 - skill.level}%)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h3
                className={cn(
                  "mb-6 code-font text-2xl font-semibold text-[#3498DB]",
                  isVisible && "animate-fade-in-left"
                )}
              >
                {t("soft-skills-title")}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {Array.isArray(softSkills) &&
                  softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-center space-x-2",
                        isVisible && "animate-fade-in-down"
                      )}
                      style={{
                        animationDelay: `${index * 200}ms`, // cada elemento 200ms más tarde
                      }}
                    >
                      <div className="h-2 w-2 rounded-full bg-[#E67E22]" />
                      <span className="text-foreground">{skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
