import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import CatalogClient
  from "./client";

import {
  getAllProducts,
} from "@/lib/services/product.service";

export default async function Catalog() {

  const products =
    await getAllProducts();

  return (

    <Section id="catalog">

      <Container>

        <CatalogClient
          products={products}
        />

      </Container>

    </Section>

  );

}