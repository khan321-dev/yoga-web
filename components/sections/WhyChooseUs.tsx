"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Home, Globe } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

const features = [
  {
    icon: Award,
    title: "Yoga Alliance Certified",
    description:
      "Our school is registered with Yoga Alliance USA as an RYS 200 & RYS 300 school. Your certificate is recognised worldwide.",
  },
  {
    icon: BookOpen,
    title: "Expert Senior Teachers",
    description:
      "Learn from teachers with 10–25+ years of dedicated practice and teaching experience in classical Hatha, Ashtanga, and Iyengar traditions.",
  },
  {
    icon: Home,
    title: "Serene Ashram Lifestyle",
    description:
      "Immerse in an authentic ashram environment: simple, nourishing Ayurvedic meals, clean accommodation, and daily Ganga rituals.",
  },
  {
    icon: Globe,
    title: "Recognised Worldwide",
    description:
      "Graduate as a Yoga Alliance certified teacher and teach in over 100 countries. Join our global alumni network of 500+ teachers.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-24 bg-earth-gradient"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container-yoga">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold-300 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Why Choose Us
          </p>
          <h2
            id="why-choose-us-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-5"
          >
            More Than a Certificate —
            <em className="block not-italic text-gold-400">A Life Transformation</em>
          </h2>
          <p className="text-stone-300 text-lg">
            Thousands of students from around the world choose Surya Yoga
            Rishikesh because we go beyond the mat.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group p-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-gold-400/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/30 transition-colors">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
