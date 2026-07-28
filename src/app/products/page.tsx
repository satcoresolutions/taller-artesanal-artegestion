import Hero
  from "@/components/modules/products/sections/hero";

import Catalog
  from "@/components/modules/products/sections/catalog/catalog";

import Trust from "@/components/modules/products/sections/trust";

export default function ProductsPage() {
  return (
    <>
      <main>
        <Hero />

        <Catalog />

        <Trust />

      </main>

    </>
  );
}