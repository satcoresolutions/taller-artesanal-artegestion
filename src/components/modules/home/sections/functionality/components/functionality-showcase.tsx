"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";
import FunctionalityList from "./functionality-list";
import FunctionalityHighlight from "./functionality-highlight";

export default function FunctionalityShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Card
        variant="glass"
        className="p-8 md:p-10"
      >
        <FunctionalityList />
        <FunctionalityHighlight />
      </Card>
    </motion.div>
  );
}