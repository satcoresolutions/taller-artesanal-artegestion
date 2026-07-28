import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import CatalogClient
  from "./client";

import {
  getAllMaterialCategories,
} from "@/lib/services/material-category.service";

interface CatalogProps {

  initialMaterialSlug: string | null;

}

export default async function Catalog({

  initialMaterialSlug,

}: CatalogProps) {

  const categories =
    await getAllMaterialCategories();

  return (

    <Section id="catalog">

      <Container>

        <CatalogClient
          categories={categories}
          initialMaterialSlug={initialMaterialSlug}
        />

      </Container>

    </Section>

  );

}