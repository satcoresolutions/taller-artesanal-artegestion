import type {
  HeroContent,
} from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "Handcrafted Creations",

    title:
      "Unique handmade pieces inspired by nature and tradition.",

    description:
      "Discover a curated collection of artisan products, natural stones, jewelry, and handcrafted creations made with dedication and attention to detail.",

    features: [
      "Handmade products",
      "Unique collections",
      "Natural materials",
    ],

    primaryAction: {
      label: "View Products",
      href: "/products",
    },

    secondaryAction: {
      label: "Learn More",
      href: "#featured-products",
    },
  },

  es: {
    badge: "Creaciones Artesanales",

    title:
      "Piezas únicas hechas a mano inspiradas en la naturaleza y la tradición.",

    description:
      "Descubre una colección de productos artesanales, piedras naturales, joyería y creaciones elaboradas con dedicación, cuidado y atención al detalle.",

    features: [
      "Productos artesanales",
      "Colecciones únicas",
      "Materiales naturales",
    ],

    primaryAction: {
      label: "Ver productos",
      href: "/products",
    },

    secondaryAction: {
      label: "Ver más",
      href: "#featured-products",
    },
  },

  pt: {
    badge: "Criações Artesanais",

    title:
      "Peças únicas feitas à mão inspiradas na natureza e na tradição.",

    description:
      "Descubra uma coleção de produtos artesanais, pedras naturais, joias e criações feitas com dedicação, cuidado e atenção aos detalhes.",

    features: [
      "Produtos artesanais",
      "Coleções exclusivas",
      "Materiais naturais",
    ],

    primaryAction: {
      label: "Ver Produtos",
      href: "/products",
    },

    secondaryAction: {
      label: "Saiba Mais",
      href: "#featured-products",
    },
  },
} as const satisfies Record<string, HeroContent>;