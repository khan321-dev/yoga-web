"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, User, Calendar, CreditCard } from "lucide-react";

const step1Schema = z.object({
  course: z.string().min(1, "Please select a course"),
  startDate: z.string().min(1, "Please select a start date"),
  roomType: z.enum(["shared", "private"]),
});

const step2Schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(6, "Phone number required"),
  country: z.string().min(2, "Country required"),
  yogaExperience: z.string(),
  specialRequests: z.string().optional(),
});

type Step1 = z.infer<typeof step1Schema>;
type Step2 = z.infer<typeof step2Schema>;

const courseOptions = [
  { value: "100hr", label: "100 Hour TTC — $999", dates: ["Aug 1–12", "Sep 1–12", "Oct 1–12"] },
  { value: "200hr", label: "200 Hour TTC — $1,799", dates: ["Aug 1–28", "Sep 1–28", "Nov 1–28"] },
  { value: "300hr", label: "300 Hour TTC — $2,499", dates: ["Sep 1–30", "Jan 1–30"] },
  { value: "500hr", label: "500 Hour TTC — $3,999", dates: ["Aug 1 – Sep 27", "Jan 1 – Feb 27"] },
  { value: "retreat-7", label: "7-Day Retreat — $499", dates: ["Available monthly"] },
  { value: "retreat-14", label: "14-Day Retreat — $899", dates: ["Available monthly"] },
];

const steps = [
  { id: 1, label: "Course", icon: Calendar },
  { id: 2, label: "Personal Info", icon: User },
  { id: 3, label: "Confirmation", icon: CreditCard },
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1 | null>(null);
  const [step2Data, setStep2Data] = useState<Step2 | null>(null);

  const form1 = useForm<Step1>({
    resolver: zodResolver(step1Schema),
    defaultValues: { roomType: "shared" },
  });

  const form2 = useForm<Step2>({ resolver: zodResolver(step2Schema) });

  const selectedCourse = courseOptions.find((c) => c.value === step1Data?.course);

  const onStep1 = (data: Step1) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2 = (data: Step2) => {
    setStep2Data(data);
    setStep(3);
  };

  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-12 bg-stone-900 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
          Book Your Course
        </h1>
        <p className="text-stone-400 text-lg">
          Complete the form below and we&apos;ll confirm your booking within 24 hours.
        </p>
      </div>

      <div className="bg-cream-50 min-h-screen py-16">
        <div className="container-yoga max-w-2xl">
          {/* Step indicator */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = step === s.id;
              const isDone = step > s.id;
              return (
                <div key={s.id} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isDone
                          ? "bg-sage-500 text-white"
                          : isActive
                          ? "bg-terracotta-500 text-white"
                          : "bg-stone-200 text-stone-400"
                      }`}
                    >
                      {isDone ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={`text-xs font-semibold ${isActive ? "text-terracotta-600" : "text-stone-400"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-20 mx-3 transition-colors ${step > s.id ? "bg-sage-400" : "bg-stone-200"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-10"
              >
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                  Choose Your Course
                </h2>
                <form onSubmit={form1.handleSubmit(onStep1)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Program *
                    </label>
                    <select
                      {...form1.register("course")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    >
                      <option value="">Select a program</option>
                      {courseOptions.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                    {form1.formState.errors.course && (
                      <p className="text-red-500 text-xs mt-1">{form1.formState.errors.course.message}</p>
                    )}
                  </div>

                  {form1.watch("course") && (
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2">
                        Start Date *
                      </label>
                      <select
                        {...form1.register("startDate")}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                      >
                        <option value="">Select a date</option>
                        {courseOptions.find((c) => c.value === form1.watch("course"))?.dates.map((d) => (
                          <option key={d} value={d}>{d}, 2025</option>
                        ))}
                      </select>
                      {form1.formState.errors.startDate && (
                        <p className="text-red-500 text-xs mt-1">{form1.formState.errors.startDate.message}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Room Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "shared", label: "Shared Room", sub: "Most popular" },
                        { value: "private", label: "Private Room", sub: "+$200/month" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all ${
                            form1.watch("roomType") === opt.value
                              ? "border-terracotta-500 bg-terracotta-50"
                              : "border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <input
                            type="radio"
                            value={opt.value}
                            {...form1.register("roomType")}
                            className="sr-only"
                          />
                          <p className="font-semibold text-stone-900 text-sm">{opt.label}</p>
                          <p className="text-stone-500 text-xs">{opt.sub}</p>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-10"
              >
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                  Your Information
                </h2>
                <form onSubmit={form2.handleSubmit(onStep2)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {(["firstName", "lastName"] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-semibold text-stone-700 mb-1.5 capitalize">
                          {field.replace("N", " N")} *
                        </label>
                        <input
                          type="text"
                          {...form2.register(field)}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                        />
                        {form2.formState.errors[field] && (
                          <p className="text-red-500 text-xs mt-1">{form2.formState.errors[field]?.message}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {[
                    { field: "email" as const, label: "Email Address", type: "email", placeholder: "you@example.com" },
                    { field: "phone" as const, label: "Phone / WhatsApp", type: "tel", placeholder: "+1 234 567 8900" },
                    { field: "country" as const, label: "Country of Residence", type: "text", placeholder: "e.g. United Kingdom" },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-stone-700 mb-1.5">{label} *</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        {...form2.register(field)}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                      />
                      {form2.formState.errors[field] && (
                        <p className="text-red-500 text-xs mt-1">{form2.formState.errors[field]?.message}</p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Yoga Experience
                    </label>
                    <select
                      {...form2.register("yogaExperience")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner (0–1 year)</option>
                      <option value="intermediate">Intermediate (1–3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="teacher">Existing Teacher</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Special Requests or Questions
                    </label>
                    <textarea
                      rows={3}
                      {...form2.register("specialRequests")}
                      placeholder="Dietary requirements, injuries, questions..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 border-2 border-stone-200 text-stone-600 font-semibold rounded-full hover:border-stone-300 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                    >
                      Review Booking
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 3 — Confirmation */}
            {step === 3 && step1Data && step2Data && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-10"
              >
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
                  <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2">
                    Booking Submitted!
                  </h2>
                  <p className="text-stone-500">
                    Thank you, {step2Data.firstName}! We&apos;ve received your booking request and will
                    confirm your place within 24 hours via email at{" "}
                    <strong>{step2Data.email}</strong>.
                  </p>
                </div>

                <div className="bg-cream-100 rounded-2xl p-6 space-y-3">
                  <h3 className="font-semibold text-stone-900 mb-4">Booking Summary</h3>
                  {[
                    { label: "Program", value: selectedCourse?.label },
                    { label: "Start Date", value: `${step1Data.startDate}, 2025` },
                    { label: "Room Type", value: step1Data.roomType === "shared" ? "Shared Room" : "Private Room" },
                    { label: "Name", value: `${step2Data.firstName} ${step2Data.lastName}` },
                    { label: "Email", value: step2Data.email },
                    { label: "Phone", value: step2Data.phone },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-stone-500">{item.label}</span>
                      <span className="text-stone-800 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-stone-400 text-xs text-center mt-6">
                  A 25% deposit secures your place. Full payment is due 30 days before the course starts.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
