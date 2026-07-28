"use client";

import Container from "@/components/ui/container";

import FooterBrand from "./components/footer-brand";
import FooterMap from "./components/Footer-map";
import FooterNavigation from "./components/footer-navigation";
import FooterContact from "./components/footer-contact";
import FooterSocials from "./components/footer-socials";
import FooterLegal from "./components/footer-legal";
import FooterBottom from "./components/footer-bottom";

export default function Footer() {
  return (
    <footer className="border-t border-surface-secondary py-20">
      <Container>
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            <FooterBrand />
            <FooterLegal />
          </div>

          {/* NAVIGATION */}
          <FooterNavigation />

          {/* MAP */}
          <FooterMap />

          {/* CONTACT + SOCIALS */}
          <div className="space-y-8">
            <FooterContact />
            <FooterSocials />
          </div>
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}