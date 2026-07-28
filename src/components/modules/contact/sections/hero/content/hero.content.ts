import type {
  HeroContent,
} from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "Contact Us",

    title:
      "Let's create something meaningful together.",

    description:
      "Whether you have questions about our handcrafted products, want a personalized creation, or simply wish to learn more about our workshop, we'd love to hear from you. Get in touch and let's bring your ideas to life.",

    features: [
      "Personalized attention",
      "Custom creations",
      "Quick response",
    ],
  },

  es: {
    badge: "Contáctanos",

    title:
      "Estamos listos para escuchar tus ideas.",

    description:
      "Si deseas más información sobre nuestras creaciones artesanales, solicitar una pieza personalizada o resolver cualquier inquietud, estaremos encantados de atenderte. Contáctanos y hagamos realidad tu próxima creación artesanal.",

    features: [
      "Atención personalizada",
      "Creaciones a medida",
      "Respuesta oportuna",
    ],
  },

  pt: {
    badge: "Fale Conosco",

    title:
      "Estamos prontos para ouvir suas ideias.",

    description:
      "Se você deseja saber mais sobre nossas criações artesanais, solicitar uma peça personalizada ou esclarecer qualquer dúvida, será um prazer atendê-lo. Entre em contato conosco e vamos transformar sua ideia em uma criação artesanal única.",

    features: [
      "Atendimento personalizado",
      "Criações sob medida",
      "Resposta rápida",
    ],
  },
} as const satisfies Record<
  string,
  HeroContent
>;