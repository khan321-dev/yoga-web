import type { Metadata } from "next";
import { CheckCircle, Wifi, Wind, Utensils, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Ashram Accommodation in Rishikesh",
  description:
    "Experience comfortable ashram accommodation at Surya Yoga Rishikesh in the Himalayas. Private and shared rooms with Ayurvedic meals, Wi-Fi, and mountain views. Book your stay!",
  keywords: [
    "yoga school accommodation rishikesh",
    "ashram stay rishikesh",
    "yoga teacher training accommodation",
    "places to stay in rishikesh for yoga",
    "yoga retreat accommodation india",
  ],
  alternates: {
    canonical: "https://suryayogarishikesh.com/accommodation",
  },
  openGraph: {
    title: "Ashram Accommodation in Rishikesh — Serene & Comfortable",
    description:
      "Comfortable, peaceful ashram accommodation at Surya Yoga Rishikesh. Shared and private rooms with Ayurvedic meals, Wi-Fi, and stunning Himalayan mountain views.",
    url: "https://suryayogarishikesh.com/accommodation",
    siteName: "Surya Yoga Rishikesh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Yoga Rishikesh Accommodation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga School Accommodation in Rishikesh | Surya Yoga Rishikesh",
    description:
      "Comfortable ashram accommodation at Surya Yoga Rishikesh — private and shared rooms with Ayurvedic meals and mountain views.",
    images: ["/images/og-image.jpg"],
  },
};

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Utensils, label: "3 Ayurvedic Meals Daily" },
  { icon: Wind, label: "Hot Water & En-Suite" },
  { icon: Trees, label: "Mountain & Garden Views" },
];

const rooms = [
  {
    type: "Shared Room",
    description: "Comfortable twin-sharing rooms with natural ventilation, storage, and en-suite bathroom. Perfect for building connections with fellow students.",
    price: "Included in course fee",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=70",
    features: ["Twin beds", "En-suite bathroom", "Study desk", "Window with garden view"],
  },
  {
    type: "Private Room",
    description: "Your own peaceful sanctuary with a comfortable double bed, private bathroom, and a writing desk. Ideal for those who need personal space for journaling and self-study.",
    price: "+$200/month upgrade",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=70",
    features: ["Private double bed", "Private en-suite", "Wardrobe & safe", "Mountain or river view (subject to availability)"],
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=70", alt: "Yoga shala at sunrise with Himalayan backdrop" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=70", alt: "Outdoor meditation garden with lush greenery" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=70", alt: "Nourishing Ayurvedic vegetarian meal spread" },
  { src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=70", alt: "Student writing in journal on rooftop terrace" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70", alt: "Evening sunset view over the Ganges River" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=70", alt: "Morning yoga practice in open-air shala" },
];

export default function AccommodationPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-24 bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=60')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900/80" />
        <div className="relative container-yoga text-center">
          <p className="text-terracotta-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Where You&apos;ll Stay</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
            Serene Ashram Living
          </h1>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto">
            Our campus is a peaceful sanctuary nestled in the Himalayan foothills,
            designed for deep rest, focused study, and spiritual renewal.
          </p>
        </div>
      </div>

      {/* Amenities strip */}
      <div className="bg-terracotta-500 py-8">
        <div className="container-yoga">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-white/80" />
                <span className="text-white font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room types */}
      <div className="bg-cream-50 py-20">
        <div className="container-yoga">
          <div className="text-center mb-16">
            <p className="text-terracotta-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">Room Options</p>
            <h2 className="font-serif text-4xl font-bold text-stone-900">
              Find Your Perfect Space
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room.type} className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.image}
                  alt={`${room.type} at Surya Yoga Rishikesh`}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-2xl font-bold text-stone-900">{room.type}</h3>
                    <span className="text-terracotta-600 font-bold text-sm bg-terracotta-50 px-3 py-1 rounded-full">{room.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">{room.description}</p>
                  <ul className="space-y-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-stone-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-sage-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-warm-gradient py-20">
        <div className="container-yoga">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-stone-900">
              Life at Surya Yoga
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
