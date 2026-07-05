import type { Course } from "./courses";

const BASE_URL = "https://suryayogarishikesh.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Surya Yoga Rishikesh",
    description:
      "Premier yoga teacher training school in Rishikesh, India offering Yoga Alliance certified 100, 200, 300 and 500 hour yoga teacher training courses.",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/school-exterior.jpg`,
    telephone: "+91-9876543210",
    email: "info@suryayogarishikesh.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tapovan, Laxman Jhula Road",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249192",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1377,
      longitude: 78.3218,
    },
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "412",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/suryayogarishikesh",
      "https://www.instagram.com/suryayogarishikesh",
      "https://www.youtube.com/suryayogarishikesh",
    ],
  };
}

export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${BASE_URL}/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: "Surya Yoga Rishikesh",
      url: BASE_URL,
    },
    courseMode: "In person",
    educationalLevel: course.level,
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/book?course=${course.slug}`,
    },
    hasCourseInstance: course.nextDates.map((date) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      location: {
        "@type": "Place",
        name: "Surya Yoga Rishikesh",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rishikesh",
          addressCountry: "IN",
        },
      },
      startDate: date,
      courseWorkload: `P${course.duration}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
