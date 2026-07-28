import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import BenefitsContent
  from "./components/benefits-content";

import BenefitsGrid
  from "./components/benefits-grid";

export default function Benefits() {
  return (
    <Section
      id="benefits"
      variant="surface"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <BenefitsContent />

        <BenefitsGrid />
      </Container>
    </Section>
  );
}