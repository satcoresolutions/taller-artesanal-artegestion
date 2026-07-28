"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";

import CTAContent from "./components/cta-content";
import CTAActions from "./components/cta-actions";
import CTACard from "./components/cta-card";

export default function CTA() {
  return (
    <Section
      id="cta"
      variant="transparent"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
        >
          <Card
            variant="glass"
            className="
              px-8
              py-16

              md:px-12
              md:py-20
            "
          >
            <div
              className="
                mx-auto
                max-w-4xl
                text-center
              "
            >
              <CTAContent />

              <CTAActions />

              <CTACard />
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}