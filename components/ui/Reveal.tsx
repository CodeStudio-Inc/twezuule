"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
};

export default function Reveal({ className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    />
  );
}
