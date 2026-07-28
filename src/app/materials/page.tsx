import Hero
  from "@/components/modules/materials/sections/hero";

import Catalog
  from "@/components/modules/materials/sections/catalog";

interface MaterialsPageProps {

  searchParams: Promise<{
    material?: string;
  }>;

}

export default async function MaterialsPage({

  searchParams,

}: MaterialsPageProps) {

  const {

    material,

  } = await searchParams;

  return (

    <main>

      <Hero />

      <Catalog
        initialMaterialSlug={
          material ?? null
        }
      />

    </main>

  );

}