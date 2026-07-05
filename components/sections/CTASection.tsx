"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  course: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 bg-warm-gradient"
      aria-labelledby="cta-heading"
    >
      <div className="container-yoga">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Begin Your Journey
            </p>
            <h2
              id="cta-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6"
            >
              Ready to Transform
              <em className="block not-italic text-terracotta-500">
                Your Life?
              </em>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-8">
              Take the first step toward becoming a certified yoga teacher.
              Send us a message and our team will respond within 24 hours with
              everything you need to know about enrolling.
            </p>

            <div className="space-y-4">
              {[
                "Next batch: August 1, 2025",
                "Limited to 16 students per batch",
                "Flexible payment plans available",
                "Visa invitation letters provided",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sage-500 shrink-0" />
                  <span className="text-stone-600 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-white rounded-3xl border border-stone-100 shadow-xl p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                  Message Received!
                </h3>
                <p className="text-stone-500">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                  Send Us a Message
                </h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      {...register("course")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                    >
                      <option value="">Select a course (optional)</option>
                      <option value="100hr">100 Hour TTC</option>
                      <option value="200hr">200 Hour TTC</option>
                      <option value="300hr">300 Hour TTC</option>
                      <option value="500hr">500 Hour TTC</option>
                      <option value="retreat">Yoga Retreat</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition resize-none"
                      placeholder="Tell us about your yoga experience and what you hope to achieve..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-300 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
