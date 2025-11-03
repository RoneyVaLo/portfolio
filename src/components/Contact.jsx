import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { cn } from "../utils/cn";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [ref, isVisible] = useInView();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const validate = (data) => {
    const newErrors = {};
    if (!data.from_name.trim())
      newErrors.from_name = "El nombre es obligatorio.";
    if (!data.from_email.trim())
      newErrors.from_email = "El email es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(data.from_email))
      newErrors.from_email = "Introduce un email válido.";
    if (!data.subject.trim()) newErrors.subject = "El asunto es obligatorio.";
    if (!data.message.trim())
      newErrors.message = "El mensaje no puede estar vacío.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name } = e.target;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Por favor corrige los errores antes de enviar.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Mensaje enviado correctamente 🎉");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Error al enviar el mensaje 😢");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="bg-foreground/10 py-20 text-foreground md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={cn(
            "mb-12 text-center code-font text-3xl font-bold md:text-4xl",
            isVisible && "animate-fade-in-down animate-duration-1000"
          )}
        >
          Contáctame
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3
              className={cn(
                "code-font text-2xl font-semibold text-[#3498DB]",
                isVisible && "animate-fade-in-right animate-delay-100"
              )}
            >
              ¿Tienes una idea, un reto o un proyecto que necesita traducción
              digital?
            </h3>
            <p
              className={cn(
                "text-lg text-foreground/80 text-balance",
                isVisible && "animate-fade-in-right animate-delay-300"
              )}
            >
              Estoy interesado en colaboraciones freelance o en integrarme a
              equipos innovadores donde aportar desde el desarrollo hasta la
              ejecución técnica.
            </p>
            <p
              className={cn(
                "text-lg text-foreground/80 text-balance",
                isVisible && "animate-fade-in-right animate-delay-500"
              )}
            >
              Si estás buscando a alguien que combine técnica sólida, capacidad
              de aprendizaje y visión práctica de producto, estaré encantado de
              conversar contigo.
            </p>
            <div className="space-y-4">
              <div
                className={cn(
                  "flex items-center space-x-3",
                  isVisible && "animate-fade-in-right animate-delay-700"
                )}
              >
                <Mail className="h-5 w-5 text-[#E67E22]" />
                <span>rvaldelomarlopez@gmail.com</span>
              </div>
              <div
                className={isVisible && "animate-flip-in-y animate-delay-900"}
              >
                <SocialMedia />
              </div>
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className={cn(
                      "text-sm font-medium",
                      isVisible &&
                        "animate-fade-in animate-duration-1000 animate-delay-100"
                    )}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border px-3 py-2 text-foreground placeholder:text-foreground/50 bg-foreground/5 focus:outline-none focus:border-ring",
                      errors.from_name ? "border-red-500" : "border-white/10",
                      isVisible && "animate-flip-in-y animate-delay-200"
                    )}
                    placeholder="Tu nombre"
                  />
                  {errors.from_name && (
                    <p className="text-xs text-red-400">{errors.from_name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className={cn(
                      "text-sm font-medium",
                      isVisible &&
                        "animate-fade-in animate-duration-1000 animate-delay-200"
                    )}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="from_email"
                    inputMode="email"
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border px-3 py-2 text-foreground placeholder:text-foreground/50 bg-foreground/5 focus:outline-none focus:border-ring",
                      errors.from_email ? "border-red-500" : "border-white/10",
                      isVisible && "animate-flip-in-y animate-delay-400"
                    )}
                    placeholder="tu@email.com"
                  />
                  {errors.from_email && (
                    <p className="text-xs text-red-400">{errors.from_email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className={cn(
                    "text-sm font-medium",
                    isVisible &&
                      "animate-fade-in animate-duration-1000 animate-delay-400"
                  )}
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-md border px-3 py-2 text-foreground placeholder:text-foreground/50 bg-foreground/5 focus:outline-none focus:border-ring",
                    errors.subject ? "border-red-500" : "border-white/10",
                    isVisible && "animate-flip-in-y animate-delay-500"
                  )}
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={cn(
                    "text-sm font-medium",
                    isVisible &&
                      "animate-fade-in animate-duration-1000 animate-delay-700"
                  )}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-md border px-3 py-2 text-foreground placeholder:text-foreground/50 bg-foreground/5 focus:outline-none focus:border-ring",
                    errors.message ? "border-red-500" : "border-white/10",
                    isVisible &&
                      "animate-flip-in-y animate-delay-700 animate-duration-1000"
                  )}
                  placeholder="Tu mensaje"
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                disabled={isSending}
                className={cn(
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "h-9 px-4 py-2",
                  "w-full bg-[#E67E22] hover:bg-[#E67E22]/90 text-foreground",
                  "cursor-pointer",
                  isVisible &&
                    "animate-slide-up-fade animate-delay-900 animate-duration-1000"
                )}
              >
                {isSending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
