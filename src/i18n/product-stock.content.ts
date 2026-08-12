export type ProductStockFilter =
  | "in_stock"
  | "out_of_stock";

export const productStockContent = {
  en: {
    in_stock: "In Stock",
    out_of_stock: "Out of Stock",
  },

  es: {
    in_stock: "En stock",
    out_of_stock: "Agotado",
  },

  pt: {
    in_stock: "Em estoque",
    out_of_stock: "Esgotado",
  },
} satisfies Record<
  string,
  Record<ProductStockFilter, string>
>;