import type {
  ProductAvailability,
  ProductData,
} from "@/types/product.types";


export function filterByAvailability(
  product: ProductData,
  selectedAvailability:
    ProductAvailability[],
): boolean {

  if (
    selectedAvailability.length === 0
  ) {
    return true;
  }

  return selectedAvailability.includes(
    product.availability,
  );
}