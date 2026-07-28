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
  valuesContent,
} from "../content/values.content";

export default function AboutValues() {

  const lang =
    useLanguage();

  const content =
    valuesContent[lang];

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
            mt-10
            grid
            gap-6

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >

          {content.values.map((value) => (

            <Card
              key={value}
              variant="outlined"
              className="
                p-8
                text-center
              "
            >

              <h3>

                {value}

              </h3>

            </Card>

          ))}

        </div>

      </Container>

    </Section>

  );

}