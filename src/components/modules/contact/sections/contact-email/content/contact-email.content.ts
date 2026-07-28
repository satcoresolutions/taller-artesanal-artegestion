import type {
  ContactEmailContent,
} from "../types/contact-email.types";

export const contactEmailContent: Record<
  string,
  ContactEmailContent
> = {
  en: {
    title: "Contact us by email",

    description:
      "Send us your questions, ideas, or project requirements and we will get back to you as soon as possible.",

    email:
      "info@satcore.solutions",
  },

  es: {
    title: "Contáctanos por correo electrónico",

    description:
      "Envíanos tus preguntas, ideas o requerimientos de proyecto y te responderemos lo antes posible.",

    email:
      "info@satcore.solutions",
  },

  pt: {
    title: "Entre em contato por e-mail",

    description:
      "Envie suas dúvidas, ideias ou requisitos de projeto e responderemos o mais breve possível.",

    email:
      "info@satcore.solutions",
  },
} as const;