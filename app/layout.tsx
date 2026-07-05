import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suryayogarishikesh.com"),
  title: {
    default: "Surya Yoga Rishikesh | Yoga Teacher Training in Rishikesh, India",
    template: "%s | Surya Yoga Rishikesh",
  },
  description:
    "Transform your life with Yoga Alliance certified 200 Hour, 300 Hour & 500 Hour Yoga Teacher Training in Rishikesh, India. Study in the yoga capital of the world.",
  keywords: [
    "yoga teacher training rishikesh",
    "200 hour yoga teacher training india",
    "yoga alliance certified",
    "300 hour yoga teacher training",
    "rishikesh yoga school",
    "yoga retreat india",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryayogarishikesh.com",
    siteName: "Surya Yoga Rishikesh",
    title: "Surya Yoga Rishikesh | Yoga Teacher Training in Rishikesh, India",
    description:
      "Transform your life with Yoga Alliance certified Yoga Teacher Training in Rishikesh, India.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Yoga Rishikesh — Yoga Teacher Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Yoga Rishikesh | Yoga Teacher Training India",
    description:
      "Yoga Alliance certified yoga teacher training in Rishikesh, the yoga capital of the world.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
