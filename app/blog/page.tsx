import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
// Note: Category filtering would require a client component wrapper or URL params

export const metadata: Metadata = {
  title: "Yoga Blog — Philosophy & Travel Guide",
  description:
    "Discover expert articles on yoga philosophy, asana guides, and Rishikesh travel tips from experienced teachers at Surya Yoga Rishikesh. Start reading today!",
  keywords: [
    "yoga blog",
    "yoga tips rishikesh",
    "yoga philosophy articles",
    "rishikesh travel guide",
    "yoga teacher training blog",
    "ayurveda wellness",
  ],
  alternates: {
    canonical: "https://suryayogarishikesh.com/blog",
  },
  openGraph: {
    title: "Yoga Blog — Philosophy & Travel Guide | Surya Yoga",
    description:
      "Explore articles on yoga philosophy, asana guides, Rishikesh travel tips, Ayurveda, and student transformation stories from Surya Yoga Rishikesh.",
    url: "https://suryayogarishikesh.com/blog",
    siteName: "Surya Yoga Rishikesh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Yoga Rishikesh Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Blog — Philosophy & Travel Guide",
    description:
      "Expert articles on yoga philosophy, asana guides, Rishikesh travel tips, and student stories from Surya Yoga Rishikesh.",
    images: ["/images/og-image.jpg"],
  },
};

const posts = [
  {
    slug: "complete-guide-rishikesh-yoga",
    title: "The Complete Guide to Yoga Teacher Training in Rishikesh",
    excerpt: "Everything you need to know before travelling to Rishikesh for yoga teacher training: what to pack, how to get there, what to expect, and how to choose the right school.",
    category: "Travel Guide",
    readTime: "8 min read",
    date: "June 15, 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70",
  },
  {
    slug: "yoga-philosophy-patanjali-sutras",
    title: "Patanjali's Yoga Sutras: A Modern Interpretation",
    excerpt: "The 196 sutras of Patanjali form the philosophical backbone of classical yoga. Discover how these ancient teachings apply to our modern lives and yoga practice.",
    category: "Philosophy",
    readTime: "12 min read",
    date: "June 2, 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=70",
  },
  {
    slug: "sun-salutation-guide",
    title: "Mastering Sun Salutations: Alignment, Breath & Variations",
    excerpt: "Surya Namaskar is the foundation of most yoga practices. This comprehensive guide breaks down each of the 12 poses with alignment cues and breathing tips.",
    category: "Asana",
    readTime: "10 min read",
    date: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=70",
  },
  {
    slug: "ayurveda-yoga-diet",
    title: "Ayurvedic Eating for Yoga Practitioners",
    excerpt: "What you eat profoundly affects your yoga practice. Learn the Ayurvedic principles of food and how to align your diet with your dosha for optimal energy and clarity.",
    category: "Ayurveda",
    readTime: "7 min read",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=70",
  },
  {
    slug: "yoga-teacher-certification-worth-it",
    title: "Is a Yoga Teacher Certification Worth It in 2025?",
    excerpt: "With hundreds of yoga teacher training programmes available worldwide, is certification still valuable? We break down the real benefits, career opportunities, and what to look for in a quality programme.",
    category: "Career",
    readTime: "9 min read",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=70",
  },
  {
    slug: "pranayama-breathing-techniques",
    title: "5 Pranayama Techniques Every Yogi Should Know",
    excerpt: "Pranayama — the science of breath control — is one of yoga's most powerful tools for transformation. Master these five essential breathing techniques to deepen your practice.",
    category: "Pranayama",
    readTime: "6 min read",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=70",
  },
];

const categories = ["All", "Travel Guide", "Philosophy", "Asana", "Ayurveda", "Career", "Pranayama"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-16 bg-stone-900 text-center">
        <p className="text-terracotta-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Blog</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
          Yoga Wisdom & Travel
        </h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Insights on yoga philosophy, asana practice, Rishikesh travel tips, and
          student transformation stories.
        </p>
      </div>

      <div className="bg-cream-50 py-16">
        <div className="container-yoga">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  cat === "All"
                    ? "bg-terracotta-500 text-white"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-terracotta-300 hover:text-terracotta-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-12 bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 md:h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-terracotta-500 text-xs font-bold uppercase tracking-wider bg-terracotta-50 px-3 py-1 rounded-full w-fit mb-4">
                  {featured.category} · Featured
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-stone-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-stone-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-terracotta-200 hover:shadow-lg transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-terracotta-500 text-xs font-bold uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2 mb-3 group-hover:text-terracotta-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-stone-400 text-xs">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-terracotta-500 font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
