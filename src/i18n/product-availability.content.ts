import type {
  ProductAvailability,
} from "@/types/product.types";

export const productAvailabilityContent = {
  en: {
    made_to_order: "Made to Order",
    one_of_a_kind: "One of a Kind",
    coming_soon: "Coming Soon",
    discontinued: "Discontinued",
  },

  es: {
    made_to_order: "Bajo pedido",
    one_of_a_kind: "Pieza única",
    coming_soon: "Próximamente",
    discontinued: "Descontinuado",
  },

  pt: {
    made_to_order: "Sob encomenda",
    one_of_a_kind: "Peça única",
    coming_soon: "Em breve",
    discontinued: "Descontinuado",
  },
} satisfies Record<
  string,
  Record<ProductAvailability, string>
>;