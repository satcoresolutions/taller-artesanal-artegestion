import type {
  ProductData,
} from "@/types/product.types";

export function filterByCategory(
  product: ProductData,
  selectedCategories: string[],
): boolean {

  if (selectedCategories.length === 0) {
    return true;
  }

  if (!product.category) {
    return false;
  }

  return selectedCategories.includes(
    product.category.slug,
  );
}