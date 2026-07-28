"use client";

import type {
  MaterialCategoryData,
} from "@/types/material-category.types";

import MaterialsSidebar
  from "./components/materials-sidebar";

import MaterialsContent
  from "./components/materials-content";

import MaterialOverview
  from "./components/material-overview";

import MaterialSections
  from "./components/material-sections";

import {
  MaterialsCatalogProvider,
} from "./context/materials-catalog-context";

interface CatalogClientProps {

  categories: MaterialCategoryData[];

  initialMaterialSlug: string | null;

}

export default function CatalogClient({

  categories,

  initialMaterialSlug,

}: CatalogClientProps) {

  return (

    <MaterialsCatalogProvider
      categories={categories}
      initialMaterialSlug={initialMaterialSlug}
    >

      <div
        className="
          mt-10
          grid
          gap-12
          xl:grid-cols-[320px_1fr]
          xl:items-stretch
        "
      >

        <MaterialsSidebar />

        <MaterialsContent>

          <MaterialOverview />

          <MaterialSections />

        </MaterialsContent>

      </div>

    </MaterialsCatalogProvider>

  );

}