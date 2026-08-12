import type {
  ProductData,
} from "@/types/product.types";

export function filterByCollection(
  product: ProductData,
  selectedCollections: string[],
): boolean {

  if (selectedCollections.length === 0) {
    return true;
  }

  const matchesFeatured =
    selectedCollections.includes("featured") &&
    product.featured === true;

  const matchesNewArrival =
    selectedCollections.includes("newArrival") &&
    product.newArrival === true;

  const matchesBestSeller =
    selectedCollections.includes("bestSeller") &&
    product.bestSeller === true;

  return (
    matchesFeatured ||
    matchesNewArrival ||
    matchesBestSeller
  );
}