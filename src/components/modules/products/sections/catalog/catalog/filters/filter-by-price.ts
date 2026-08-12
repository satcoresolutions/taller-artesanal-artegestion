import type {
  ProductData,
} from "@/types/product.types";

export function filterByPrice(
  product: ProductData,
  selectedPrices: string[],
): boolean {

  if (selectedPrices.length === 0) {
    return true;
  }

  const price =
    product.priceCop ?? 0;

  const matchesUnder50 =
    selectedPrices.includes("price-1") &&
    price < 50000;

  const matches50To100 =
    selectedPrices.includes("price-2") &&
    price >= 50000 &&
    price <= 100000;

  const matchesOver100 =
    selectedPrices.includes("price-3") &&
    price > 100000;

  return (
    matchesUnder50 ||
    matches50To100 ||
    matchesOver100
  );
}