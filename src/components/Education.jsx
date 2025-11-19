import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const Education = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("education");
  const education = t("list", { returnObjects: true });

  return (
    <section id="education" ref={ref} className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold text-foreground md:text-4xl",
            isVisible && "animate-fade-in-down"
          )}
        >
          {t("sectionTitle")}
        </h2>
        <div className="grid gap-12">
          <ul className="grid gap-10 sm:grid-cols-2">
            {Array.isArray(education) &&
              education
                .sort((a, b) => b.year - a.year)
                .map((item, index) => (
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
                    <h4 className="text-normal font-medium text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-md text-foreground/70">
                      {item.institution}
                    </p>
                    <p className="text-md text-foreground/70">{item.year}</p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
