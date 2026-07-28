import Card
  from "@/components/ui/card";

import type {
  ProductsSidebarProps,
} from "./types/products-sidebar.types";

export default function ProductsSidebar({
  children,
}: ProductsSidebarProps) {
  return (
    <aside
      className="
        w-full

        lg:w-80
      "
    >
      <Card
        variant="glass"
        className="
          sticky
          top-24

          flex
          flex-col
          gap-8

          p-6
        "
      >
        {children}
      </Card>
    </aside>
  );
}