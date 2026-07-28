"use client";

import useMaterialsCatalog
  from "../../hooks/use-materials-catalog";

import MaterialAccordion
  from "../material-accordion";

export default function MaterialSections() {

  const {

    selectedMaterial,

  } = useMaterialsCatalog();


  if (!selectedMaterial) {

    return null;

  }


  return (

    <section
      className="
        space-y-4
      "
    >

      {selectedMaterial.sections.map(

        (section, index) => (

          <MaterialAccordion

            key={section.title}

            section={section}

            defaultOpen={index === 0}

          />

        ),

      )}

    </section>

  );

}