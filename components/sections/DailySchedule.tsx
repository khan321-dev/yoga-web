"use client";

import { motion } from "framer-motion";
import { courses } from "@/lib/courses";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Clock } from "lucide-react";

const schedule200 = courses.find((c) => c.slug === "200-hour-yoga-teacher-training")!.schedule;

export function DailySchedule() {
  return (
    <section
      className="py-24 bg-warm-gradient"
      aria-labelledby="schedule-heading"
    >
      <div className="container-yoga">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            A Day in the Ashram
          </p>
          <h2
            id="schedule-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-5"
          >
            Your Daily
            <em className="block not-italic text-terracotta-500">
              Sacred Routine
            </em>
          </h2>
          <p className="text-stone-500 text-lg">
            Our carefully crafted daily schedule balances intense study with
            rest, creating the rhythm your body and mind need to absorb
            deep transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="200hr">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="100hr">100 Hour</TabsTrigger>
                <TabsTrigger value="200hr">200 Hour</TabsTrigger>
                <TabsTrigger value="300hr">300 Hour</TabsTrigger>
                <TabsTrigger value="retreat">Retreat</TabsTrigger>
              </TabsList>
            </div>

            {["100hr", "200hr", "300hr", "retreat"].map((tab) => {
              const courseSlugMap: Record<string, string> = {
                "100hr": "100-hour-yoga-teacher-training",
                "200hr": "200-hour-yoga-teacher-training",
                "300hr": "300-hour-yoga-teacher-training",
                retreat: "yoga-retreat",
              };
              const course = courses.find((c) => c.slug === courseSlugMap[tab]);
              const scheduleItems = course?.schedule ?? schedule200;
              return (
                <TabsContent key={tab} value={tab}>
                  <div className="space-y-0">
                    {scheduleItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 py-4 border-b border-stone-100 last:border-0 group hover:bg-terracotta-50/50 px-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-1.5 shrink-0 w-20">
                          <Clock className="w-3.5 h-3.5 text-terracotta-400" />
                          <span className="text-terracotta-600 font-bold text-sm">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-stone-700 font-medium text-sm">
                            {item.activity}
                          </p>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-terracotta-200 mt-2 group-hover:bg-terracotta-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-stone-400 text-xs mt-4 italic">
                    * Schedule may vary slightly based on program and teacher assignments
                  </p>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
