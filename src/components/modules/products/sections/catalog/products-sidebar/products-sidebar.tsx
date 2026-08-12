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

      {/* Mobile / Tablet */}
      <details
        className="
          lg:hidden
        "
      >
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            rounded-xl
            border
            px-5
            py-4
            font-semibold
          "
          style={{
            borderColor:
              "var(--color-border)",

            background:
              "var(--color-surface)",

            color:
              "var(--color-text)",
          }}
        >

          <span>
            Filtros
          </span>

          <span
            className="
              text-lg
            "
          >
            +
          </span>

        </summary>

        <Card
          variant="outlined"
          className="
            mt-3
            p-5
          "
        >
          <div
            className="
              max-h-[60vh]
              overflow-y-auto
              pr-2
            "
          >
            {children}
          </div>
        </Card>

      </details>


      {/* Desktop */}
      <div
        className="
          hidden
          lg:block
        "
      >

        <Card
          variant="outlined"
          className="
            sticky
            top-24
            flex
            max-h-[calc(100vh-7rem)]
            flex-col
            p-6
          "
        >

          <div
            className="
              min-h-0
              overflow-y-auto
              pr-2
            "
          >
            {children}
          </div>

        </Card>

      </div>

    </aside>
  );
}