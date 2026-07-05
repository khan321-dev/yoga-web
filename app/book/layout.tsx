import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Yoga Teacher Training in Rishikesh",
  description:
    "Secure your place for Yoga Alliance certified yoga teacher training in Rishikesh, India. Choose from 100, 200, 300 & 500 hour TTC programs. Enrol online!",
  keywords: [
    "book yoga teacher training rishikesh",
    "enrol yoga course india",
    "yoga teacher training registration",
    "200 hour yoga ttc booking",
    "rishikesh yoga school enrollment",
  ],
  alternates: {
    canonical: "https://suryayogarishikesh.com/book",
  },
  openGraph: {
    title: "Book Yoga Teacher Training in Rishikesh — Secure Your Spot",
    description:
      "Secure your place for Yoga Alliance certified yoga teacher training in Rishikesh, India. Choose from 100, 200, 300 & 500 hour TTC programs.",
    url: "https://suryayogarishikesh.com/book",
    siteName: "Surya Yoga Rishikesh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Book Yoga Teacher Training at Surya Yoga Rishikesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Yoga Teacher Training in Rishikesh — Secure Your Spot",
    description:
      "Secure your place for Yoga Alliance certified yoga teacher training in Rishikesh, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
