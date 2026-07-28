import Hero
  from "@/components/modules/home/sections/hero";

import FeaturedProducts
  from "@/components/modules/home/sections/featured-products";

import Materials
  from "@/components/modules/home/sections/featured-materials";

import Benefits
  from "@/components/modules/home/sections/benefits";

import Process
  from "@/components/modules/home/sections/process";

import FAQ
  from "@/components/modules/home/sections/faq";

import CTA
  from "@/components/modules/home/sections/cta";

export default function HomePage() {

  return (

    <main>

      <Hero />

      <FeaturedProducts />

      <Materials />

      <Benefits />

      <Process />

      <FAQ />

      <CTA />

    </main>

  );

}