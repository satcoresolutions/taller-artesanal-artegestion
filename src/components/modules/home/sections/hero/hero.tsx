import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import HeroBackground
  from "./components/hero-background";

import HeroContent
  from "./components/hero-content";

export default function Hero() {
  return (
    <Section
      id="hero"
      variant="hero"
      className="
        relative
        overflow-hidden
        py-25
        lg:py-36
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            flex
            min-h-120
            items-center
          "
        >
          <HeroContent />
        </div>
      </Container>
    </Section>
  );
}