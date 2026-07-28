"use client";

import {
  Heart,
  MessageCircle,
  Shield,
  Truck,
} from "lucide-react";

import { motion }
  from "framer-motion";

import Card
  from "@/components/ui/card";

interface BenefitCardProps {
  title: string;

  description: string;

  icon: keyof typeof icons;
}

const icons = {
  shield: Shield,
  heart: Heart,
  truck: Truck,
  "message-circle": MessageCircle,
};

export default function BenefitCard({
  title,
  description,
  icon,
}: BenefitCardProps) {
  const Icon =
    icons[icon];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
    >
      <Card
        variant="default"
        className="
          h-full
          p-8
          text-center
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-primary/10
          "
        >
          <Icon
            className="
              h-8
              w-8
              text-primary
            "
          />
        </div>

        <h3
          className="
            mt-6
            text-lg
            font-semibold
            text-text-primary
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            leading-relaxed
            text-text-secondary
          "
        >
          {description}
        </p>
      </Card>
    </motion.div>
  );
}