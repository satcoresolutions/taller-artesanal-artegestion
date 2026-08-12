import type {
  ProductData,
} from "@/types/product.types";

export function filterByMaterial(
  product: ProductData,
  selectedMaterials: string[],
): boolean {

  if (selectedMaterials.length === 0) {
    return true;
  }

  if (!product.materials?.length) {
    return false;
  }

  return product.materials.some(
    material =>
      selectedMaterials.includes(
        material.slug,
      ),
  );
}