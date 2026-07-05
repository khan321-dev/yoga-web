"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { faqSchema } from "@/lib/structured-data";

const faqs = [
  {
    question: "Do I need prior yoga experience to join the 200 Hour TTC?",
    answer:
      "No prior teaching experience is required, but we recommend at least 6–12 months of personal yoga practice before enrolling in the 200 Hour TTC. For the 100 Hour course, even complete beginners are welcome.",
  },
  {
    question: "Is the certificate internationally recognised?",
    answer:
      "Yes. Surya Yoga Rishikesh is registered with Yoga Alliance USA as an RYS 200 and RYS 300 school. Upon completion, you can register with Yoga Alliance as an RYT 200 or RYT 500, which is the gold standard for yoga teacher certification worldwide.",
  },
  {
    question: "What is included in the course fee?",
    answer:
      "All course fees include: shared accommodation, three Ayurvedic vegetarian meals per day, all course materials and textbooks, a Yoga Alliance certificate, weekend excursions (Ganga Aarti, Rishikesh city tour), and lifetime access to our alumni community.",
  },
  {
    question: "Can I upgrade from a shared to a private room?",
    answer:
      "Yes! Private room upgrades are available subject to availability. Please mention your preference when you book. Private room pricing varies by season — contact us for a current quote.",
  },
  {
    question: "What is the refund and cancellation policy?",
    answer:
      "If you cancel more than 60 days before your course start date, you receive a full refund minus a $100 administration fee. Cancellations 30–60 days prior receive a 50% refund. Within 30 days of the start date, fees are non-refundable, but we will happily transfer you to a future batch.",
  },
  {
    question: "How do I get to Rishikesh from Delhi?",
    answer:
      "The nearest airport is Dehradun (Jolly Grant Airport), 45 minutes from Rishikesh. From Delhi, you can fly to Dehradun (1 hour), take a train to Haridwar and then a taxi (5–6 hours total), or hire a direct cab from Delhi (~6–7 hours). We provide airport/railway station pickup for an additional fee.",
  },
  {
    question: "What should I bring to Rishikesh?",
    answer:
      "We recommend light, modest clothing for yoga practice (no shorts in the ashram), a good pair of walking sandals, sunscreen, a reusable water bottle, any personal medications, and an open heart. We provide yoga mats, props, and all course materials.",
  },
  {
    question: "Is Rishikesh safe for solo female travelers?",
    answer:
      "Rishikesh is one of the safest cities in India for solo travelers, including women. It is a spiritual town with a strong international yoga community. Our campus has 24/7 security, and we are happy to advise on local safety tips and recommended areas to stay and explore.",
  },
];

export function FAQSection() {
  const jsonLd = faqSchema(faqs);

  return (
    <section
      className="py-24 bg-cream-50"
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-yoga">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-5"
          >
            Everything You
            <em className="block not-italic text-terracotta-500">
              Want to Know
            </em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden p-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="px-4">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-stone-500 mt-10 text-sm"
        >
          Still have questions?{" "}
          <a
            href="/contact"
            className="text-terracotta-600 font-semibold hover:underline"
          >
            Contact us directly
          </a>{" "}
          — we reply within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
