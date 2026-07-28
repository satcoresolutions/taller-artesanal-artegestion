"use client";

import Image from "@/components/ui/image";

import Card
  from "@/components/ui/card";

import useMaterialsCatalog
  from "../../hooks/use-materials-catalog";

import type {
  Property,
} from "@/types/property.types";

import MaterialOverviewEmpty
  from "./components/MaterialOverviewEmpty";

export default function MaterialOverview() {

  const {
    selectedMaterial,
  } = useMaterialsCatalog();

  if (!selectedMaterial) {

    return <MaterialOverviewEmpty />;

  }

  console.log(
    "Cover:",
    selectedMaterial.cover,
  );

  console.log(
    "URL:",
    selectedMaterial.cover?.url,
  );

  return (

    <Card
      className="
        p-5
        sm:p-6
        xl:p-8
      "
    >

      <div
        className="
          grid
          items-start
          gap-10
          xl:grid-cols-[420px_1fr]
        "
      >

        <div
          className="
            relative
            aspect-square
            overflow-hidden
            rounded-xl
          "
        >

          <Image
            src={
              selectedMaterial.cover?.url
              ?? ""
            }
            alt={
              selectedMaterial.cover?.alternativeText
              ?? selectedMaterial.title
            }
            fill
            preview
            className="
              object-cover
            "
          />

        </div>

        <div
          className="
            flex
            flex-col
            gap-8
          "
        >

          <header
            className="
              space-y-3
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                xl:text-4xl
              "
            >
              {selectedMaterial.title}
            </h2>

            {selectedMaterial.subtitle && (

              <p
                className="
                  text-lg
                  text-text-secondary
                  xl:text-xl
                "
              >
                {selectedMaterial.subtitle}
              </p>

            )}

            <div
              className="
                leading-8
                text-text-muted
              "
            >

              {JSON.stringify(
                selectedMaterial.description,
              )}

            </div>

          </header>

          <div
            className="
              divide-y
              divide-surface-secondary
            "
          >

            {selectedMaterial.properties.map(

              (property: Property) => (

                <div
                  key={property.label}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-6
                    py-4
                  "
                >

                  <span
                    className="
                      font-medium
                      text-text-secondary
                    "
                  >
                    {property.label}
                  </span>

                  <span
                    className="
                      text-right
                      pr-4
                    "
                  >
                    {property.value}
                  </span>

                </div>

              ),

            )}

          </div>

        </div>

      </div>

    </Card>

  );

}