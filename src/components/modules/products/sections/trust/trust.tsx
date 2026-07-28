import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import TrustContent
  from "./components/trust-content";

import TrustFeatures
  from "./components/trust-features";

export default function Trust() {
  return (
    <Section
      id="trust"
      variant="transparent"
      spacing="lg"
      className="py-10"
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-6xl
          "
        >
          <TrustContent />

          <TrustFeatures />
        </div>
      </Container>
    </Section>
  );
}