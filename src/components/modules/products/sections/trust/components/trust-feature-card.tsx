"use client";

import { motion }
  from "framer-motion";

import Card
  from "@/components/ui/card";

import type {
  CatalogFeature,
} from "../types/trust.types";

interface TrustFeatureCardProps {
  feature: CatalogFeature;
}

export default function TrustFeatureCard({
  feature,
}: TrustFeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
    >
      <Card
        variant="featured"
        className="
          h-full
          p-6
          text-center
          transition-all
          duration-300
        "
      >
        <motion.div
          className="
            mb-4
            flex
            justify-center
          "
          whileHover={{
            scale: 1.1,
            rotate: 3,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Icon
            className="
              h-8
              w-8
            "
          />
        </motion.div>

        <h3>
          {feature.title}
        </h3>

        <p
          className="
            mt-2
          "
        >
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
}