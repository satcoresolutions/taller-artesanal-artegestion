"use client";

import Card
    from "@/components/ui/card";

import {
    useLanguage,
} from "@/hooks/use-language";

import {
    detailsContentSectionsContent,
} from "../content/details-content-sections.content";

import SectionParagraphs
    from "./details-content-sections/section-paragraphs";

import SectionItems
    from "./details-content-sections/section-items";

import SectionSteps
    from "./details-content-sections/section-steps";

import SectionImage
    from "./details-content-sections/section-image";

import type {
    ProductData,
} from "@/types/product.types";

interface DetailsContentSectionsProps {

    product: ProductData;

}

export default function DetailsContentSections({

    product,

}: DetailsContentSectionsProps) {

    const lang =
        useLanguage();

    const content =
        detailsContentSectionsContent[lang];

    const sections =

        product.sections

            .filter(
                section => section.active,
            )

            .sort(
                (a, b) =>
                    (a.order ?? Number.MAX_SAFE_INTEGER) -
                    (b.order ?? Number.MAX_SAFE_INTEGER),
            )

    if (

        sections.length === 0

    ) {

        return null;

    }

    return (

        <Card
            variant="featured"
            className="
        p-8
      "
        >

            <div
                className="
          flex
          flex-col
          gap-10
        "
            >

                <div>

                    <h3>

                        {content.title}

                    </h3>

                    <p
                        className="mt-2"
                        style={{
                            color:
                                "var(--color-text-secondary)",
                        }}
                    >

                        {content.subtitle}

                    </p>

                </div>

                {sections.map(
                    section => (

                        <section
                            key={section.order}
                            className="
                flex
                flex-col
                gap-6
              "
                        >

                            {section.title && (

                                <h4>

                                    {section.title}

                                </h4>

                            )}

                            <SectionParagraphs
                                paragraphs={section.paragraphs}
                            />

                            <SectionItems
                                items={section.items}
                            />

                            <SectionSteps
                                steps={section.steps}
                            />

                            <SectionImage
                                image={section.image}
                            />

                        </section>

                    ),
                )}

            </div>

        </Card>

    );

}