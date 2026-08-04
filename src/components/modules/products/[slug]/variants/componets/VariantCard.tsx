import Image from "next/image";

import type {
  ProductVariant,
} from "@/types/product.types";

interface VariantCardProps {
  variant: ProductVariant;
  selected: boolean;
  onSelect: (
    variant: ProductVariant,
  ) => void;
}

export default function VariantCard({
  variant,
  selected,
  onSelect,
}: VariantCardProps) {

  return (

    <button
      type="button"
      onClick={() =>
        onSelect(
          variant,
        )
      }
      className={`
        w-32
        rounded-xl
        border
        p-3
        transition-all
        hover:border-primary
        ${
          selected
            ? "border-primary ring-2 ring-primary/20"
            : "border-border"
        }
      `}
    >

      <Image
        src={variant.cover?.url ?? ""}
        alt={variant.variant}
        width={120}
        height={120}
        className="
          aspect-square
          rounded-lg
          object-cover
        "
      />

      <p
        className="
          mt-2
          text-center
          text-sm
          font-medium
        "
      >
        {variant.variant}
      </p>

    </button>

  );

}