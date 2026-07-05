"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, Star, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { courses } from "@/lib/courses";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  terracotta: {
    bg: "bg-terracotta-50",
    text: "text-terracotta-600",
    badge: "bg-terracotta-500 text-white",
    border: "border-terracotta-200 hover:border-terracotta-400",
  },
  sage: {
    bg: "bg-sage-50",
    text: "text-sage-600",
    badge: "bg-sage-500 text-white",
    border: "border-sage-200 hover:border-sage-400",
  },
  gold: {
    bg: "bg-gold-50",
    text: "text-gold-600",
    badge: "bg-gold-500 text-white",
    border: "border-gold-200 hover:border-gold-400",
  },
  deep: {
    bg: "bg-stone-100",
    text: "text-stone-700",
    badge: "bg-stone-800 text-white",
    border: "border-stone-300 hover:border-stone-500",
  },
  rose: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    badge: "bg-pink-500 text-white",
    border: "border-pink-200 hover:border-pink-400",
  },
};

export function CourseCards() {
  return (
    <section
      className="py-24 bg-cream-50"
      aria-labelledby="courses-heading"
    >
      <div className="container-yoga">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Our Programs
          </p>
          <h2
            id="courses-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-5"
          >
            Choose Your Path
            <em className="block not-italic text-sage-600">to Mastery</em>
          </h2>
          <p className="text-stone-500 text-lg">
            From beginners to advanced practitioners, we have a certified program
            tailored to your level and aspirations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => {
            const colors = colorMap[course.color] ?? colorMap.terracotta;
            return (
              <motion.article
                key={course.slug}
                variants={staggerItem}
                className={cn(
                  "group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1",
                  colors.border
                )}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      colors.badge
                    )}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Image placeholder with gradient */}
                <div
                  className={cn(
                    "h-44 flex items-end p-5",
                    colors.bg
                  )}
                  style={{
                    backgroundImage: course.hours > 0
                      ? `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70')`
                      : `url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=70')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-terracotta-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span>4.9</span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={cn("text-2xl font-bold font-serif", colors.text)}>
                        ${course.price.toLocaleString()}
                      </span>
                      <span className="text-stone-400 text-xs ml-1">USD</span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200",
                        colors.text,
                        colors.bg,
                        "hover:gap-2.5"
                      )}
                      aria-label={`Learn more about ${course.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
