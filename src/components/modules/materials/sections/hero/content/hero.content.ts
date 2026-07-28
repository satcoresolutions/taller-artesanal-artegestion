import type {
  HeroContent,
} from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "Natural Materials",

    title:
      "Discover the materials behind every handcrafted creation.",

    description:
      "Explore our carefully selected collection of natural stones, minerals, crystals, and artisan materials. Learn about their characteristics, origins, colors, and unique properties while discovering the elements that give life to our handcrafted jewelry and decorative pieces.",

    features: [
      "Natural stones",
      "Authentic minerals",
      "Handcrafted quality",
    ],
  },

  es: {
    badge: "Materiales Naturales",

    title:
      "Descubre los materiales que dan vida a cada creación artesanal.",

    description:
      "Explora nuestra selección de piedras naturales, minerales, cristales y materiales artesanales cuidadosamente elegidos. Conoce sus características, origen, colores y propiedades, y descubre los elementos que hacen posible cada una de nuestras piezas de joyería y decoración elaboradas a mano.",

    features: [
      "Piedras naturales",
      "Minerales auténticos",
      "Calidad artesanal",
    ],
  },

  pt: {
    badge: "Materiais Naturais",

    title:
      "Descubra os materiais que dão vida a cada criação artesanal.",

    description:
      "Explore nossa seleção de pedras naturais, minerais, cristais e materiais artesanais cuidadosamente escolhidos. Conheça suas características, origem, cores e propriedades e descubra os elementos que tornam possível cada uma de nossas joias e peças decorativas feitas à mão.",

    features: [
      "Pedras naturais",
      "Minerais autênticos",
      "Qualidade artesanal",
    ],
  },
} as const satisfies Record<
  string,
  HeroContent
>;