"use client";

import Card
    from "@/components/ui/card";

import Section
    from "@/components/ui/section";

import {
    useLanguage,
} from "@/hooks/use-language";

import {
    contactEmailContent,
} from "./content/contact-email.content";

export default function ContactEmail() {
    const lang =
        useLanguage();

    const content =
        contactEmailContent[lang] ??
        contactEmailContent.en;

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
            gap-3
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

                    <a
                        href={`mailto:${content.email}`}
                        className="
              font-medium
            "
                    >
                        {content.email}
                    </a>
                </div>
            </Card>
        </Section>
    );
}