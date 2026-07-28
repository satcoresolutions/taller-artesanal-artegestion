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
        py-10

        lg:py-20
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            grid
            min-h-120
            items-center
            gap-12

            lg:grid-cols-2
          "
        >
          <HeroContent />
        </div>
      </Container>
    </Section>
  );
}