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
  processContent,
} from "../content/process.content";

export default function AboutProcess() {

  const lang =
    useLanguage();

  const content =
    processContent[lang];

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

        <div
          className="
            mt-12
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-4
          "
        >

          {content.steps.map(

            (step, index) => (

              <Card
                key={step.title}
                variant="outlined"
                className="
                  flex
                  h-full
                  flex-col
                  items-center
                  p-8
                  text-center
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    font-bold
                  "
                  style={{
                    background:
                      "var(--color-primary)",

                    color:
                      "white",
                  }}
                >

                  {index + 1}

                </div>

                <h3
                  className="
                    mt-6
                  "
                >

                  {step.title}

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

                  {step.description}

                </p>

              </Card>

            ),

          )}

        </div>

      </Container>

    </Section>

  );

}