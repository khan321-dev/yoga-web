"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

const images = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=70",
    alt: "Comfortable yoga dormitory room with natural wood furnishings and mountain view",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=70",
    alt: "Outdoor yoga shala overlooking the Ganges river surrounded by lush greenery",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=70",
    alt: "Fresh Ayurvedic vegetarian meals served in the communal dining hall",
    className: "",
  },
];

export function AccommodationPreview() {
  return (
    <section
      className="py-24 bg-cream-50"
      aria-labelledby="accommodation-heading"
    >
      <div className="container-yoga">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Where You&apos;ll Stay
            </p>
            <h2
              id="accommodation-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6"
            >
              Serene Ashram
              <em className="block not-italic text-sage-600">Living</em>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              Our campus is nestled amidst lush greenery just minutes from the
              Ganges. Wake each morning to birdsong and the distant sound of the
              river. Our comfortable rooms and nutritious Ayurvedic meals support
              deep rest and focused study.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Shared & private room options",
                "En-suite bathrooms with hot water",
                "High-speed Wi-Fi throughout campus",
                "3 organic vegetarian meals daily",
                "On-site yoga shalas with natural ventilation",
                "Meditation garden & rooftop terrace",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-stone-600 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/accommodation"
              className="inline-flex items-center gap-2 text-sage-600 font-semibold hover:text-sage-700 transition-colors"
            >
              View Full Accommodation Details
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Image grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-3 h-[480px]"
          >
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                variants={staggerItem}
                className={`relative overflow-hidden rounded-2xl ${img.className} ${i === 0 ? "row-span-2" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
