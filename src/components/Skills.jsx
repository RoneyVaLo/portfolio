import skillsData from "../assets/skills.json";
import education from "../assets/education.json";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, isVisible] = useInView();
  const { softSkills, technicalSkills } = skillsData;

  return (
    <section id="habilidades" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-[#333] md:text-4xl",
            isVisible && "animate-fade-in-down"
          )}
        >
          Mis Habilidades
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
                Habilidades Técnicas
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
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
                      <span className="font-medium text-[#333]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#333]/70">
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
                Habilidades Blandas
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {softSkills.map((skill, index) => (
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
                    <span className="text-[#333]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Segunda fila: Educación y Certificaciones (ocupando ambas columnas) */}
          <div>
            <h3
              className={cn(
                "mb-6 code-font text-2xl font-semibold text-[#3498DB]",
                isVisible && "animate-fade-in-right animate-duration-1000"
              )}
            >
              Educación y Certificaciones
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {education.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "border-l-2 border-[#3498DB] pl-4",
                    isVisible && "animate-blurred-fade-in"
                  )}
                  style={{
                    animationDelay: `${index * 200}ms`, // cada elemento 200ms más tarde
                  }}
                >
                  <h4 className="font-medium text-[#333]">{item.title}</h4>
                  <p className="text-sm text-[#333]/70">{item.institution}</p>
                  <p className="text-sm text-[#333]/70">{item.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
