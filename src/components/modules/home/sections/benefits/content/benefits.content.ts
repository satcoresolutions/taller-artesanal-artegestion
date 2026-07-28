import type {
  BenefitsContent,
} from "../types/benefits.types";

export const benefitsContent: Record<string, BenefitsContent> = {
  en: {
    badge: "Why choose us",

    title: "Handcrafted quality you can trust.",

    description:
      "Every piece is made with care and attention to detail, bringing tradition and creativity into your home.",

    items: [
      {
        icon: "shield",
        title: "Quality craftsmanship",
        description:
          "Carefully crafted pieces made with attention to every detail.",
      },
      {
        icon: "heart",
        title: "Made with passion",
        description:
          "Unique creations inspired by tradition and creativity.",
      },
      {
        icon: "truck",
        title: "Flexible delivery",
        description:
          "Local, national, and international shipping options available.",
      },
      {
        icon: "message-circle",
        title: "Personalized service",
        description:
          "We're here to answer your questions and guide your order.",
      },
    ],
  },

  es: {
    badge: "Por qué elegirnos",

    title: "Calidad artesanal en la que puedes confiar.",

    description:
      "Cada pieza es elaborada con dedicación y atención al detalle para llevar tradición y creatividad a tu hogar.",

    items: [
      {
        icon: "shield",
        title: "Calidad artesanal",
        description:
          "Piezas elaboradas cuidadosamente con acabados de calidad.",
      },
      {
        icon: "heart",
        title: "Hecho con pasión",
        description:
          "Creaciones únicas inspiradas en la tradición y la creatividad.",
      },
      {
        icon: "truck",
        title: "Envíos flexibles",
        description:
          "Opciones de entrega local, nacional e internacional.",
      },
      {
        icon: "message-circle",
        title: "Atención personalizada",
        description:
          "Te acompañamos y resolvemos tus dudas durante todo el proceso.",
      },
    ],
  },

  pt: {
    badge: "Por que nos escolher",

    title: "Qualidade artesanal em que você pode confiar.",

    description:
      "Cada peça é feita com dedicação e atenção aos detalhes, levando tradição e criatividade para sua casa.",

    items: [
      {
        icon: "shield",
        title: "Qualidade artesanal",
        description:
          "Peças produzidas com cuidado e acabamento de qualidade.",
      },
      {
        icon: "heart",
        title: "Feito com paixão",
        description:
          "Criações únicas inspiradas na tradição e na criatividade.",
      },
      {
        icon: "truck",
        title: "Entregas flexíveis",
        description:
          "Opções de entrega local, nacional e internacional.",
      },
      {
        icon: "message-circle",
        title: "Atendimento personalizado",
        description:
          "Estamos prontos para ajudar você em todas as etapas.",
      },
    ],
  },
} as const;