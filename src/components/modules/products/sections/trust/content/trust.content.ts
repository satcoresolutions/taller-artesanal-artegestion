import {
  Hand,
  Leaf,
  Package,
} from "lucide-react";

import type {
  CatalogTrustContent,
} from "../types/trust.types";

export const trustContent = {
  en: {
    badge: "Quality",

    title: "Craftsmanship in every detail",

    description:
      "Each piece is carefully selected to offer quality, authenticity, and timeless design.",

    features: [
      {
        icon: Hand,
        title: "Handcrafted Excellence",
        description:
          "Products created with attention to detail and artisanal techniques.",
      },
      {
        icon: Leaf,
        title: "Selected Materials",
        description:
          "Carefully chosen materials to ensure durability and quality.",
      },
      {
        icon: Package,
        title: "Secure Packaging",
        description:
          "Every product is prepared and protected for safe delivery.",
      },
    ],
  },

  es: {
    badge: "Calidad",

    title: "Artesanía en cada detalle",

    description:
      "Cada pieza es seleccionada cuidadosamente para ofrecer calidad, autenticidad y diseño duradero.",

    features: [
      {
        icon: Hand,
        title: "Trabajo artesanal",
        description:
          "Productos elaborados con atención al detalle y técnicas artesanales.",
      },
      {
        icon: Leaf,
        title: "Materiales seleccionados",
        description:
          "Materiales elegidos cuidadosamente para garantizar calidad y durabilidad.",
      },
      {
        icon: Package,
        title: "Empaque seguro",
        description:
          "Cada producto se prepara y protege para una entrega confiable.",
      },
    ],
  },

  pt: {
    badge: "Qualidade",

    title: "Artesanato em cada detalhe",

    description:
      "Cada peça é cuidadosamente selecionada para oferecer qualidade, autenticidade e design duradouro.",

    features: [
      {
        icon: Hand,
        title: "Trabalho artesanal",
        description:
          "Produtos criados com atenção aos detalhes e técnicas artesanais.",
      },
      {
        icon: Leaf,
        title: "Materiais selecionados",
        description:
          "Materiais escolhidos cuidadosamente para garantir qualidade e durabilidade.",
      },
      {
        icon: Package,
        title: "Embalagem segura",
        description:
          "Cada produto é preparado e protegido para uma entrega confiável.",
      },
    ],
  },
} as const satisfies Record<string, CatalogTrustContent>;