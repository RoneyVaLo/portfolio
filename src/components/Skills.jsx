import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import {
  Code2,
  Server,
  Database,
  Terminal,
  FileCode,
  HeartHandshake,
} from "lucide-react";

const iconMap = {
  Code2,
  Server,
  Database,
  Terminal,
  FileCode,
  HeartHandshake,
};

const Skills = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("skills");
  const skillsData = t("skills", { returnObjects: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-surface-alt py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-blue/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-orange/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 md:px-6">
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
            skillsData.map((category, catIndex) => {
              const Icon = iconMap[category.icon] || Code2;

              return (
                <Tilt
                  key={catIndex}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glareBorderRadius="16px"
                >
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border bg-card p-6",
                      "transition-all duration-300",
                      "hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1",
                      isVisible && "animate-fade-in-up animate-duration-700",
                    )}
                    style={{ animationDelay: `${catIndex * 100}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 bg-linear-to-br from-brand-blue/3 via-transparent to-brand-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      {/* Header: icon + count */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-brand-blue/10 to-brand-orange/5">
                          <Icon
                            className="w-5 h-5 text-brand-blue"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="code-font text-xs text-muted-foreground tabular-nums">
                          {category.skills.length} skills
                        </span>
                      </div>

                      {/* Category name */}
                      <h3
                        className={cn(
                          "code-font mb-4 text-sm font-bold uppercase tracking-wider",
                          catIndex % 2 === 0
                            ? "text-brand-blue"
                            : "text-brand-orange",
                        )}
                      >
                        {category.name}
                      </h3>

                      {/* Skill pills */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={cn(
                              "rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-foreground/75",
                              "transition-all duration-200",
                              "hover:border-brand-blue/40 hover:text-foreground hover:bg-brand-blue/5 hover:shadow-sm",
                              isVisible &&
                                "animate-zoom-in animate-duration-500",
                            )}
                            style={{
                              animationDelay: `${catIndex * 100 + 100 + skillIndex * 50}ms`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
