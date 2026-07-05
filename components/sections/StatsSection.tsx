"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

const stats = [
  { value: 8, suffix: "+", label: "Years of Excellence", sublabel: "Established 2016" },
  { value: 500, suffix: "+", label: "Certified Graduates", sublabel: "Across 40+ countries" },
  { value: 98, suffix: "%", label: "Student Satisfaction", sublabel: "5-star reviews" },
  { value: 50, suffix: "+", label: "Expert Teachers", sublabel: "10+ years experience" },
];

export function StatsSection() {
  return (
    <section
      className="py-20 bg-terracotta-500"
      aria-label="School statistics"
    >
      <div className="container-yoga">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group"
            >
              <p className="font-serif text-5xl md:text-6xl font-bold text-white mb-1">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-terracotta-100 font-semibold text-lg mb-1">
                {stat.label}
              </p>
              <p className="text-terracotta-200/70 text-sm">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
