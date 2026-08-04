import type {
  ProductData,
  ProductVariant,
} from "@/types/product.types";

export interface ProductVariantsProps {

  product: ProductData;

  selectedVariant: ProductVariant | null;

  onVariantChange: (
    variant: ProductVariant | null,
  ) => void;

}