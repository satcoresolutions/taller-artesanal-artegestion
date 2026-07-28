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
  qualityContent,
} from "../content/quality.content";

export default function AboutQuality() {

  const lang =
    useLanguage();

  const content =
    qualityContent[lang];

  return (

    <Section>

      <Container>

        <Card
          variant="featured"
          className="
            mx-auto
            max-w-5xl
            p-10

            md:p-14
          "
        >

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
              divide-y
            "
            style={{
              borderColor:
                "var(--color-border)",
            }}
          >

            {content.items.map(

              (item, index) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-6
                    py-6
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-sm
                      font-bold
                    "
                    style={{
                      background:
                        "color-mix(in srgb, var(--primary) 12%, transparent)",

                      color:
                        "var(--primary)",
                    }}
                  >

                    {index + 1}

                  </div>

                  <p
                    className="
                      text-lg
                      font-medium
                    "
                  >

                    {item}

                  </p>

                </div>

              ),

            )}

          </div>

        </Card>

      </Container>

    </Section>

  );

}