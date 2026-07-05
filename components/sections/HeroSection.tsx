"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')",
          }}
          role="img"
          aria-label="Yoga practitioner performing a sunrise asana in the Himalayan foothills of Rishikesh"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-cream-200 text-sm md:text-base font-medium uppercase tracking-[0.25em] mb-6"
        >
          Yoga Alliance Certified School · Rishikesh, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 text-balance"
        >
          Awaken Your
          <em className="block not-italic text-gold-400">Inner Teacher</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-cream-100/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform your life with our authentic 100–500 Hour Yoga Teacher
          Training programs in the sacred city of Rishikesh. Begin your journey
          where the Himalayas meet the Ganges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/30 hover:-translate-y-0.5"
          >
            Book Your Course
          </Link>
          <Link
            href="/courses/200-hour-yoga-teacher-training"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 transition-all duration-300"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Stats chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { value: "8+", label: "Years of Excellence" },
            { value: "500+", label: "Certified Teachers" },
            { value: "40+", label: "Countries Represented" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gold-400 font-serif text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-cream-200/70 text-xs uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
