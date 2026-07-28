import type {
  HeroContent,
} from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "About Us",

    title:
      "A workshop where every creation tells a story.",

    description:
      "At ArteGestión Artisan Workshop, we believe that every handcrafted piece reflects dedication, creativity, and tradition. We create unique jewelry, decorative items, and artisan products by combining carefully selected materials with techniques that celebrate the value of handmade craftsmanship.",

    features: [
      "Handcrafted creations",
      "Creative passion",
      "Artisan tradition",
    ],
  },

  es: {
    badge: "Sobre Nosotros",

    title:
      "Un taller donde cada creación cuenta una historia.",

    description:
      "En el Taller Artesanal ArteGestión creemos que cada pieza elaborada a mano refleja dedicación, creatividad y tradición. Diseñamos joyería, artículos decorativos y creaciones artesanales utilizando materiales cuidadosamente seleccionados y técnicas que preservan el valor del trabajo hecho a mano.",

    features: [
      "Creaciones artesanales",
      "Pasión por crear",
      "Tradición artesanal",
    ],
  },

  pt: {
    badge: "Sobre Nós",

    title:
      "Um ateliê onde cada criação conta uma história.",

    description:
      "No Ateliê Artesanal ArteGestão acreditamos que cada peça feita à mão reflete dedicação, criatividade e tradição. Criamos joias, peças decorativas e produtos artesanais utilizando materiais cuidadosamente selecionados e técnicas que valorizam o verdadeiro trabalho artesanal.",

    features: [
      "Criações artesanais",
      "Paixão por criar",
      "Tradição artesanal",
    ],
  },
} as const satisfies Record<
  string,
  HeroContent
>;