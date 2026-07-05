"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        ...fadeUp,
        visible: {
          ...(fadeUp.visible as any),
          transition: {
            ...(fadeUp.visible as any)?.transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
