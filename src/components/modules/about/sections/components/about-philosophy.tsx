"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  philosophyContent,
} from "../content/philosophy.content";

export default function AboutPhilosophy() {

  const lang =
    useLanguage();

  const content =
    philosophyContent[lang];

  return (

    <Section>

      <Container>

        <div
          className="
            mx-auto
            max-w-3xl
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

          <h2
            className="
              mt-4
            "
          >

            {content.title}

          </h2>

          <p
            className="
              mt-6
              text-lg
            "
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >

            {content.description}

          </p>

        </div>

        <div
          className="
            mt-12
            grid
            gap-6

            md:grid-cols-3
          "
        >

          {content.cards.map((card) => (

            <Card
              key={card.title}
              variant="outlined"
              className="
                h-full
                p-8
              "
            >

              <h3>

                {card.title}

              </h3>

              <p
                className="
                  mt-4
                "
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >

                {card.description}

              </p>

            </Card>

          ))}

        </div>

      </Container>

    </Section>

  );

}