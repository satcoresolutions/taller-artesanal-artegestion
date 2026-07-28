"use client";

import Link from "next/link";

import Card
  from "@/components/ui/card";

import type {
  MaterialData,
} from "@/types/material.types";

interface MaterialsListProps {

  materials: MaterialData[];

}

export default function MaterialsList({

  materials,

}: MaterialsListProps) {

  const featuredMaterials =

    materials.slice(
      0,
      5,
    );

  return (

    <Card
      variant="outlined"
      className="
        mt-10
        overflow-hidden
      "
    >

      <div
        className="
          divide-y
        "
        style={{
          borderColor:
            "var(--color-border)",
        }}
      >

        {featuredMaterials.map(

          (material) => (

            <Link
              key={material.id}
              href={`/materials?material=${material.slug}`}
              className="
                flex
                items-center
                justify-between
                px-6
                py-5
                transition-all
                duration-200
                hover:translate-x-1
              "
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >

              <div
                className="
                  flex
                  flex-col
                "
              >

                <span
                  className="
                    text-lg
                    font-semibold
                  "
                >

                  {material.title}

                </span>

              </div>

              <span
                className="
                  text-2xl
                  font-light
                "
                style={{
                  color:
                    "var(--color-primary)",
                }}
              >

                →

              </span>

            </Link>

          ),

        )}

      </div>

    </Card>

  );

}