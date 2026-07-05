"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 md:p-10">
      {submitted ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
          <p className="text-stone-500">We&apos;ve received your message and will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Send a Message</h2>
          <div className="space-y-5">
            {[
              { field: "name" as const, label: "Your Name", type: "text", placeholder: "Jane Smith" },
              { field: "email" as const, label: "Email Address", type: "email", placeholder: "you@example.com" },
              { field: "subject" as const, label: "Subject", type: "text", placeholder: "Question about 200 Hour TTC" },
            ].map(({ field, label, type, placeholder }) => (
              <div key={field}>
                <label htmlFor={`contact-${field}`} className="block text-sm font-semibold text-stone-700 mb-1.5">
                  {label} *
                </label>
                <input
                  id={`contact-${field}`}
                  type={type}
                  placeholder={placeholder}
                  {...register(field)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 transition"
                />
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]?.message}</p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                Message *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                {...register("message")}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 transition resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-300 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-lg"
            >
              {isSubmitting ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
