import type {
  HeroContent,
} from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "Product Collection",

    title:
      "Discover our handcrafted creations.",

    description:
      "Browse our collection of artisan products, jewelry, natural stones, and handmade pieces carefully crafted to celebrate creativity, tradition, and authentic craftsmanship.",

    features: [
      "Handcrafted creations",
      "Unique collections",
      "Natural materials",
    ],
  },

  es: {
    badge: "Colección de Productos",

    title:
      "Descubre nuestras creaciones artesanales.",

    description:
      "Explora nuestra colección de productos artesanales, joyería, piedras naturales y piezas elaboradas a mano con dedicación para celebrar la creatividad, la tradición y el trabajo artesanal auténtico.",

    features: [
      "Creaciones artesanales",
      "Colecciones únicas",
      "Materiales naturales",
    ],
  },

  pt: {
    badge: "Coleção de Produtos",

    title:
      "Descubra nossas criações artesanais.",

    description:
      "Explore nossa coleção de produtos artesanais, joias, pedras naturais e peças feitas à mão com dedicação para celebrar a criatividade, a tradição e o autêntico trabalho artesanal.",

    features: [
      "Criações artesanais",
      "Coleções exclusivas",
      "Materiais naturais",
    ],
  },
} as const satisfies Record<
  string,
  HeroContent
>;