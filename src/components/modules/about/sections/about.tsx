"use client";

import Hero
  from "./hero";

import AboutStory
  from "./components/about-story";

import AboutPhilosophy
  from "./components/about-philosophy";

import AboutValues
  from "./components/about-values";

import AboutProcess
  from "./components/about-process";

import AboutQuality
  from "./components/about-quality";

import CTA
  from "./cta";

export default function AboutSections() {

  return (

    <main>

      <Hero />

      <div
        className="
          flex
          flex-col
          gap-12
        "
      >

        <AboutStory />

        <AboutPhilosophy />

        <AboutValues />

        <AboutProcess />

        <AboutQuality />

      </div>

      <CTA />

    </main>

  );

}