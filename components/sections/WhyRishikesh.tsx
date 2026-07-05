"use client";

import { motion } from "framer-motion";
import { Mountain, Sun, Heart, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

const reasons = [
  {
    icon: Mountain,
    title: "Sacred Himalayan Setting",
    description:
      "Practice surrounded by the majestic Himalayas and the holy Ganges River. The natural energy of Rishikesh deepens your yoga practice in ways no city studio can replicate.",
  },
  {
    icon: Sun,
    title: "Ancient Lineage & Tradition",
    description:
      "Learn from teachers rooted in the Sivananda and Ashtanga lineages. Our curriculum honours 5,000 years of yogic wisdom while remaining accessible to modern practitioners.",
  },
  {
    icon: Heart,
    title: "Holistic Transformation",
    description:
      "Beyond asana, you'll explore philosophy, pranayama, meditation, Ayurveda, and Sanskrit — a truly integrative journey that transforms body, mind, and spirit.",
  },
  {
    icon: Users,
    title: "Global Community",
    description:
      "Join a family of 500+ certified teachers from over 40 countries. Our alumni network provides lifelong support, collaboration, and teaching opportunities worldwide.",
  },
];

export function WhyRishikesh() {
  return (
    <section
      className="py-24 bg-warm-gradient"
      aria-labelledby="why-rishikesh-heading"
    >
      <div className="container-yoga">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Why Rishikesh?
          </p>
          <h2
            id="why-rishikesh-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-5"
          >
            The World&apos;s Yoga Capital
            <em className="block not-italic text-terracotta-500">
              Awaits You
            </em>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Nestled at the foothills of the Himalayas where the sacred Ganges
            emerges from the mountains, Rishikesh has been a centre of yogic
            study and spiritual practice for millennia. There is no better place
            on Earth to begin or deepen your yoga journey.
          </p>
        </motion.div>

        {/* Reason cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={staggerItem}
                className="group flex gap-5 p-7 rounded-2xl bg-white/70 backdrop-blur-sm border border-stone-100 hover:border-terracotta-200 hover:shadow-lg hover:shadow-terracotta-500/5 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-terracotta-50 border border-terracotta-100 flex items-center justify-center group-hover:bg-terracotta-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-terracotta-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
