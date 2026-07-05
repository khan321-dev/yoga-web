"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Osei",
    country: "Ghana 🇬🇭",
    course: "200 Hour TTC, March 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
    text: "Surya Yoga completely transformed my life. The teachers are world-class, the food is incredible, and being surrounded by the Himalayas every day creates a magic you cannot find anywhere else. I left with my certificate, a daily practice, and a family of 22 incredible souls.",
  },
  {
    name: "Sophie Müller",
    country: "Germany 🇩🇪",
    course: "300 Hour TTC, January 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    text: "The 300-hour programme pushed me far beyond what I thought was possible. The philosophy classes were mind-opening, the asana practice is deeply technical yet compassionate, and the community is warm and supportive. Best decision of my life.",
  },
  {
    name: "Kenji Watanabe",
    country: "Japan 🇯🇵",
    course: "500 Hour TTC, October 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Completing the full 500-hour programme was the most challenging and rewarding two months of my life. I returned to Tokyo a completely different teacher — confident, grounded, and deeply knowledgeable. My students immediately noticed the difference.",
  },
  {
    name: "Isabella Romano",
    country: "Italy 🇮🇹",
    course: "Yoga Retreat, September 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "I came burnt out from work and left completely renewed. The 14-day retreat at Surya Yoga is pure magic — morning meditations by the Ganges, evening fire ceremonies, Ayurvedic massages, and the most nourishing food I have ever eaten. I will return every year.",
  },
  {
    name: "Marcus Johnson",
    country: "USA 🇺🇸",
    course: "200 Hour TTC, May 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "As someone who came with zero yoga experience, I was nervous. But the teachers met me exactly where I was. By the end, I was teaching confident 60-minute classes. The curriculum is incredibly thorough and the teaching methodology training is superb.",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const constraintsRef = useRef(null);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      className="py-24 bg-stone-900 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-yoga">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-terracotta-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Student Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Life Changed in
            <em className="block not-italic text-gold-400">Rishikesh</em>
          </h2>
          <p className="text-stone-400 text-lg">
            Hear from the hundreds of students whose lives were transformed by
            their training at Surya Yoga.
          </p>
        </motion.div>

        {/* Carousel */}
        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <Quote className="w-10 h-10 text-terracotta-400 mb-6 opacity-60" />
              <p className="text-white/90 text-xl md:text-2xl font-serif leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[current].avatar}
                  alt={`Photo of ${testimonials[current].name}`}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-terracotta-500/50"
                />
                <div>
                  <p className="text-white font-bold">
                    {testimonials[current].name}
                  </p>
                  <p className="text-stone-400 text-sm">
                    {testimonials[current].country} · {testimonials[current].course}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta-500 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2.5 bg-terracotta-500"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta-500 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
