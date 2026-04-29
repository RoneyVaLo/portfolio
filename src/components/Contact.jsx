import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, MapPin } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { cn } from "../utils/cn";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const inputBase =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

const inputError =
  "border-destructive focus:border-destructive focus:ring-destructive/20";

const Contact = () => {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("contact");
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
    if (!data.from_name.trim()) newErrors.from_name = "errors.nameRequired";
    if (!data.from_email.trim()) {
      newErrors.from_email = "errors.emailRequired";
    } else if (!/\S+@\S+\.\S+/.test(data.from_email)) {
      newErrors.from_email = "errors.emailInvalid";
    }
    if (!data.subject.trim()) newErrors.subject = "errors.subjectRequired";
    if (!data.message.trim()) newErrors.message = "errors.messageRequired";
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
      toast.error(t("toast.fixErrors"));
      // Focus first invalid field
      const firstKey = Object.keys(validationErrors)[0];
      form.current[firstKey]?.focus();
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success(t("toast.success"));
          form.current.reset();
          setErrors({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          toast.error(t("toast.error"));
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" ref={ref} className="bg-surface-alt py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={cn(
            "mb-16 text-center",
            isVisible && "animate-fade-in-down animate-duration-1000",
          )}
        >
          <h2 className="code-font text-2xl font-semibold uppercase tracking-widest text-brand-orange mb-2">
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Info column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3
                className={cn(
                  "text-xl font-bold text-foreground leading-snug",
                  isVisible && "animate-fade-in-right animate-delay-100",
                )}
              >
                {t("headline")}
              </h3>
              <p
                className={cn(
                  "text-base leading-relaxed text-foreground/65",
                  isVisible && "animate-fade-in-right animate-delay-200",
                )}
              >
                {t("paragraph1")}
              </p>
              <p
                className={cn(
                  "text-base leading-relaxed text-foreground/65",
                  isVisible && "animate-fade-in-right animate-delay-300",
                )}
              >
                {t("paragraph2")}
              </p>
            </div>

            {/* Contact details */}
            <div
              className={cn(
                "space-y-4",
                isVisible && "animate-fade-in-right animate-delay-400",
              )}
            >
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <a
                  href="mailto:rvaldelomarlopez@gmail.com"
                  className="hover:text-brand-blue transition-colors"
                >
                  rvaldelomarlopez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </div>
                <span>Costa Rica</span>
              </div>
            </div>

            <div
              className={cn(
                isVisible && "animate-fade-in-right animate-delay-500",
              )}
            >
              <SocialMedia />
            </div>
          </div>

          {/* Form column */}
          <div
            className={cn(
              "rounded-2xl border border-border bg-card p-6 shadow-sm",
              isVisible && "animate-fade-in-left animate-delay-200",
            )}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
              noValidate
              aria-label="Formulario de contacto"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground/80"
                  >
                    {t("nameLabel")}
                    <span
                      className="text-destructive ml-0.5"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="contact-name"
                    name="from_name"
                    autoComplete="name"
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.from_name}
                    aria-describedby={
                      errors.from_name ? "name-error" : undefined
                    }
                    className={cn(inputBase, errors.from_name && inputError)}
                    placeholder={t("namePlaceholder")}
                  />
                  {errors.from_name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {t(errors.from_name)}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground/80"
                  >
                    {t("emailLabel")}
                    <span
                      className="text-destructive ml-0.5"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    name="from_email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.from_email}
                    aria-describedby={
                      errors.from_email ? "email-error" : undefined
                    }
                    className={cn(inputBase, errors.from_email && inputError)}
                    placeholder={t("emailPlaceholder")}
                  />
                  {errors.from_email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {t(errors.from_email)}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-foreground/80"
                >
                  {t("subjectLabel")}
                  <span className="text-destructive ml-0.5" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={cn(inputBase, errors.subject && inputError)}
                  placeholder={t("subjectPlaceholder")}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {t(errors.subject)}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground/80"
                >
                  {t("messageLabel")}
                  <span className="text-destructive ml-0.5" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={cn(
                    inputBase,
                    "resize-none",
                    errors.message && inputError,
                  )}
                  placeholder={t("messagePlaceholder")}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-xs text-destructive"
                  >
                    {t(errors.message)}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all",
                  "bg-brand-blue shadow-md shadow-brand-blue/25",
                  "hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                  "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                  "cursor-pointer",
                )}
              >
                {isSending ? (
                  <>
                    <span
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      aria-hidden="true"
                    />
                    {t("buttonSending")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {t("buttonSend")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
