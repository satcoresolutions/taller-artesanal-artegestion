"use client";

import Card
  from "@/components/ui/card";

import Section
  from "@/components/ui/section";

import {
  useLanguage,
} from "@/hooks/use-language";

import SocialsIcons
  from "./components/socials-icons";

import {
  socialsContent,
} from "./content/socials.content";

export default function Socials() {
  const lang =
    useLanguage();

  const content =
    socialsContent[lang];

  return (
    <Section
      spacing="none"
    >
      <Card
        variant="featured"
        className="
          p-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
            "
          >

            <h3>
              {content.title}
            </h3>

            <p
              className="
                text-text-muted
              "
            >
              {content.description}
            </p>
          </div>

          <SocialsIcons />
        </div>
      </Card>
    </Section>
  );
}