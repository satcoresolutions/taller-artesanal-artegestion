import type { FunctionalityContent } from "../types/functionality.types";

export const functionalityContent = {
  en: {
    badge: "What's included",

    title: "Everything you need to get started.",

    description:
      "A solution designed to help you generate results from day one.",

    highlight: {
      text: "Ready to use from day one.",
    },

    includes: [
      {
        title: "Professional design",
        description: "Modern interface aligned with your brand.",
      },
      {
        title: "Responsive experience",
        description: "Adapted for mobile, tablet, and desktop.",
      },
      {
        title: "Lead generation",
        description: "Optimized forms and calls to action.",
      },
      {
        title: "Integrations",
        description: "Connected to the tools you already use.",
      },
    ],

    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
    ],
  },

  es: {
    badge: "Qué incluye",

    title: "Todo lo que necesitas para comenzar.",

    description:
      "Una solución diseñada para ayudarte a generar resultados desde el primer día.",

    highlight: {
      text: "Todo listo para usar desde el primer día.",
    },

    includes: [
      {
        title: "Diseño profesional",
        description: "Interfaz moderna alineada con tu marca.",
      },
      {
        title: "Experiencia responsive",
        description: "Adaptada a móviles, tablets y escritorio.",
      },
      {
        title: "Captación de clientes",
        description: "Formularios y llamadas a la acción optimizadas.",
      },
      {
        title: "Integraciones",
        description: "Conexión con las herramientas que utilizas.",
      },
    ],

    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
    ],
  },

  pt: {
    badge: "O que está incluído",

    title: "Tudo o que você precisa para começar.",

    description:
      "Uma solução projetada para ajudá-lo a gerar resultados desde o primeiro dia.",

    highlight: {
      text: "Pronto para usar desde o primeiro dia.",
    },

    includes: [
      {
        title: "Design profissional",
        description: "Interface moderna alinhada com sua marca.",
      },
      {
        title: "Experiência responsiva",
        description: "Adaptada para celular, tablet e desktop.",
      },
      {
        title: "Captação de clientes",
        description: "Formulários e chamadas para ação otimizados.",
      },
      {
        title: "Integrações",
        description: "Conectado às ferramentas que você já usa.",
      },
    ],

    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
    ],
  },
} as const satisfies Record<string, FunctionalityContent>;