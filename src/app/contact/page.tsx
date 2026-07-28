import Hero
  from "@/components/modules/contact/sections/hero";

import ContactForm
  from "@/components/modules/contact/sections/contact-form";

import ContactEmail
  from "@/components/modules/contact/sections/contact-email";

import Socials
  from "@/components/modules/contact/sections/socials";

import PaymentMethods
  from "@/components/modules/contact/sections/payment-methods";

import CTA
  from "@/components/modules/contact/sections/cta";

import Section
  from "@/components/ui/section";

export default function ContactPage() {
  return (
    <main>
      <Hero />

      <Section id="contact">
        <div
          className="
      grid
      gap-8
      mt-10
      p-10
      lg:grid-cols-[3fr_2fr]
    "
        >
          <ContactForm />

          <div
            className="
        flex
        flex-col
        gap-6
      "
          >
            <Socials />

            <ContactEmail />

            <PaymentMethods />
          </div>
        </div>
      </Section>

      <CTA />
    </main>
  );
}