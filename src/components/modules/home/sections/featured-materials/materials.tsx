import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import MaterialsContent from "./components/materials-content";
import MaterialsList from "./components/materials-list";

import {
  getAllMaterials,
} from "@/lib/services/material.service";

export default async function HomeMaterials() {

  const materials =
    await getAllMaterials();

  return (

    <Section
      id="materials"
      spacing="lg"
    >

      <Container>

        <div
          className="
            mx-auto
            max-w-5xl
          "
        >

          <MaterialsContent />

          <MaterialsList
            materials={materials}
          />

        </div>

      </Container>

    </Section>

  );

}