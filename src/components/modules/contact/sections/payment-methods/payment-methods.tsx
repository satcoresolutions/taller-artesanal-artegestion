"use client";

import Card
  from "@/components/ui/card";

import Icon
  from "@/components/ui/icon";

import Section
  from "@/components/ui/section";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  paymentMethodsContent,
} from "./content/payment-methods.content";

import {
  paymentMethodsConfig,
} from "@/config/payment.config";

export default function PaymentMethods() {
  const lang =
    useLanguage();

  const content =
    paymentMethodsContent[lang] ??
    paymentMethodsContent.en;

  const paymentMethods =
    Object.entries(
      paymentMethodsConfig,
    ).map(([key, value]) => ({
      key,
      ...value,
    }));

  return (
    <Section
      id="payment-methods"
      spacing="none"
    >
      <Card
        variant="featured"
        className="
          flex
          flex-col
          gap-6
          p-6
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

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-4
          "
        >
          {paymentMethods.map(
            (method) =>
              method.href ? (
                <a
                  key={method.key}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-transform
                    hover:scale-105
                  "
                >
                  <Icon
                    src={method.icon}
                    alt={method.key}
                    size="xl"
                    variant="brand"
                  />
                </a>
              ) : (
                <Icon
                  key={method.key}
                  src={method.icon}
                  alt={method.key}
                  size="xl"
                  variant="brand"
                />
              )
          )}
        </div>
      </Card>
    </Section>
  );
}