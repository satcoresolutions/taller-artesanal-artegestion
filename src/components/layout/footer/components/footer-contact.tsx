"use client";

import { companyConfig } from "@/config/company.config";
import { footerContent } from "../content/footer.content";
import { useLanguage } from "@/hooks/use-language";
import { Events } from "@/integrations/google/analytics";

export default function FooterContact() {
  const lang = useLanguage();
  const content = footerContent[lang];

  return (
    <div id="contact">
      {/* TITLE */}
      <h3 className="mb-4 font-semibold">
        {content.sections.contact.title}
      </h3>

      <ul className="space-y-2 text-text-secondary">
        {/* EMAIL */}
        <li>
          <a
            href={`mailto:${companyConfig.email}`}
            onClick={() => Events.ctaClick("email_footer")}
            className="hover:text-text-primary transition-colors"
          >
            {content.contact.email}: {companyConfig.email}
          </a>
        </li>

        {/* WHATSAPP */}
        <li>
          <a
            href={`https://wa.me/${companyConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Events.whatsappClick()}
            className="hover:text-text-primary transition-colors"
          >
            {content.contact.whatsapp}: +{companyConfig.whatsapp}
          </a>
        </li>

        {/* WEBSITE */}
        <li>
          {content.contact.website}: {companyConfig.website}
        </li>
      </ul>
    </div>
  );
}