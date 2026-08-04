"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";

import { useLanguage } from "@/hooks/use-language";

import { storyContent } from "../content/story.content";

export default function AboutStory() {

  const lang =
    useLanguage();

  const content =
    storyContent[lang];

  return (

    <Section>

      <Container>

        <Card
          variant="premium"
          className="
            p-10
            md:p-14
          "
        >

          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
          >

            <span
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
              "
              style={{
                color:
                  "var(--color-primary)",
              }}
            >

              {content.badge}

            </span>

            <h2 className="mt-4">

              {content.title}

            </h2>

            <p
              className="mt-6"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >

              {content.description}

            </p>

          </div>

        </Card>

      </Container>

    </Section>

  );

}