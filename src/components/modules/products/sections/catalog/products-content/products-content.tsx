import type {
  ProductsContentProps,
} from "./types/products-content.types";

export default function ProductsContent({
  children,
}: ProductsContentProps) {
  return (
    <div
      className="
        min-w-0
        flex-1
      "
    >
      {children}
    </div>
  );
}