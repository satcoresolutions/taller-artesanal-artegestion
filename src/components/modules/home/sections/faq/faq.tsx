import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import FAQContent
  from "./components/faq-content";

import FAQAccordion
  from "./components/faq-accordion";

export default function FAQ() {
  return (
    <Section
      id="faq"
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-5xl
          "
        >
          <FAQContent />

          <FAQAccordion />
        </div>
      </Container>
    </Section>
  );
}