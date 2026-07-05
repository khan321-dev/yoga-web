import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Yoga Course Enquiries",
  description:
    "Have questions about yoga teacher training in Rishikesh? Contact the Surya Yoga team for personalised guidance on courses and accommodation. We reply within 24 hours.",
  keywords: [
    "contact yoga school rishikesh",
    "yoga teacher training enquiries",
    "rishikesh yoga school contact",
    "surya yoga rishikesh address",
    "book yoga course rishikesh",
  ],
  alternates: {
    canonical: "https://suryayogarishikesh.com/contact",
  },
  openGraph: {
    title: "Contact — Yoga Course Enquiries | Surya Yoga Rishikesh",
    description:
      "Get in touch with the Surya Yoga Rishikesh team. We answer all course enquiries, booking questions, and travel advice within 24 hours.",
    url: "https://suryayogarishikesh.com/contact",
    siteName: "Surya Yoga Rishikesh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Surya Yoga Rishikesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Surya Yoga Rishikesh | Yoga Teacher Training Enquiries",
    description:
      "Get in touch with Surya Yoga Rishikesh for course enquiries, booking questions, and travel advice.",
    images: ["/images/og-image.jpg"],
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Tapovan, Laxman Jhula Road", "Rishikesh, Uttarakhand 249192", "India"],
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    lines: ["+91 98765 43210"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@suryayogarishikesh.com"],
    href: "mailto:info@suryayogarishikesh.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 7:00 PM IST"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-16 bg-stone-900 text-center">
        <p className="text-terracotta-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Have questions about our courses? We&apos;re here to help. Our team responds within 24 hours.
        </p>
      </div>

      <div className="bg-cream-50 py-20">
        <div className="container-yoga">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
                Find Us in Rishikesh
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, title, lines, href }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-terracotta-50 border border-terracotta-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-terracotta-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm mb-1">{title}</p>
                      {lines.map((line, i) =>
                        href && i === 0 ? (
                          <a key={i} href={href} className="block text-stone-600 text-sm hover:text-terracotta-600 transition-colors">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-stone-500 text-sm">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4397374088!2d78.31879987619879!3d30.142398574861044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093ed07cfd31b5%3A0x23d2e8f04dcc7fd3!2sRishikesh%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1720000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surya Yoga Rishikesh location on Google Maps"
                />
              </div>
            </div>

            {/* Client-side form component */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
