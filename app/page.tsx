import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyRishikesh } from "@/components/sections/WhyRishikesh";
import { CourseCards } from "@/components/sections/CourseCards";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AccommodationPreview } from "@/components/sections/AccommodationPreview";
import { DailySchedule } from "@/components/sections/DailySchedule";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Rishikesh",
  description:
    "Yoga Alliance certified 100, 200, 300 & 500 Hour Yoga Teacher Training in Rishikesh, India. Study in the Himalayas and transform your life. Enrol today!",
  keywords: [
    "yoga teacher training rishikesh",
    "200 hour yoga teacher training india",
    "yoga alliance certified",
    "300 hour yoga teacher training",
    "yoga school rishikesh",
    "yoga retreat india",
    "best yoga teacher training in rishikesh",
  ],
  alternates: {
    canonical: "https://suryayogarishikesh.com",
  },
  openGraph: {
    title: "Yoga Teacher Training in Rishikesh — Yoga Alliance Certified",
    description:
      "Transform your life with authentic Yoga Alliance certified teacher training programs in the sacred city of Rishikesh, India. Study 100, 200, 300 & 500 hour courses.",
    url: "https://suryayogarishikesh.com",
    siteName: "Surya Yoga Rishikesh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Yoga Rishikesh — Yoga Teacher Training in Rishikesh, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Teacher Training in Rishikesh | Surya Yoga Rishikesh",
    description:
      "Yoga Alliance certified yoga teacher training in Rishikesh, the yoga capital of the world. Enrol in 100, 200, 300 & 500 hour programs.",
    images: ["/images/og-image.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = localBusinessSchema();

  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <WhyRishikesh />
      <CourseCards />
      <StatsSection />
      <WhyChooseUs />
      <AccommodationPreview />
      <DailySchedule />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
