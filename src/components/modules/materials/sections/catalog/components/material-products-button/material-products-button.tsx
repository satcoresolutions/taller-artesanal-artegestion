import type {
  MaterialProductsButtonProps,
} from "./types/material-products-button.types";

export default function MaterialProductsButton({
  onClick,
  disabled = false,
}: MaterialProductsButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-primary
        px-6
        py-3
        font-medium
        text-white
        transition-all
        duration-300
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      Ver artesanías relacionadas
    </button>
  );
}