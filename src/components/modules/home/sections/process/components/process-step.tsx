"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        variant="featured"
        className="
          h-full
          p-8
          text-center
        "
      >
        <motion.div
          className="
            text-sm
            font-semibold
            tracking-[0.2em]
            text-center
          "
          style={{
            color: "var(--color-primary)",
          }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {number}
        </motion.div>

        <h3 className="mt-4">
          {title}
        </h3>

        <p className="mt-4">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}