import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import ProcessContent
  from "./components/process-content";

import ProcessSteps
  from "./components/process-steps";

import ProcessSummary
  from "./components/process-summary";

export default function Process() {
  return (
    <Section
      id="process"
      variant="surface"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-6xl
            text-center
          "
        >
          <ProcessContent />

          <ProcessSteps />

          <ProcessSummary />
        </div>
      </Container>
    </Section>
  );
}