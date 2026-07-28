import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import FunctionalityContent
  from "./components/functionality-content";

import FunctionalityShowcase
  from "./components/functionality-showcase";

export default function Functionality() {
  return (
    <Section
      id="functionality"
      variant="surface"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-16

            lg:grid-cols-2
            lg:items-center
          "
        >
          <FunctionalityContent />

          <FunctionalityShowcase />
        </div>
      </Container>
    </Section>
  );
}