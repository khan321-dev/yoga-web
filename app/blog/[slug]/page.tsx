import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}> = {
  "complete-guide-rishikesh-yoga": {
    title: "The Complete Guide to Yoga Teacher Training in Rishikesh",
    date: "June 15, 2025",
    readTime: "8 min read",
    category: "Travel Guide",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    content: `
Rishikesh, nestled at the foothills of the Himalayas where the sacred Ganges emerges from the mountains,
has long been known as the yoga capital of the world. Since the Beatles visited Maharishi Mahesh Yogi in
1968, the city has drawn seekers, teachers, and practitioners from every corner of the globe.

Today, Rishikesh is home to hundreds of yoga schools offering everything from weekend retreats to intensive
multi-month teacher training programmes. Choosing the right programme can feel overwhelming — but this guide
will walk you through everything you need to know.

## When to Go

The ideal time to visit Rishikesh for yoga teacher training is **October to May**. The monsoon season
(July–September) brings heavy rains and the risk of flooding. March–May and October–November offer the
perfect balance of comfortable temperatures and clear skies.

## How to Get There

**By Air:** The nearest airport is Jolly Grant Airport in Dehradun (DED), about 35km from Rishikesh.
Flights connect to Delhi, Mumbai, and Bangalore.

**By Train:** Haridwar Railway Station (20km away) is the nearest major rail hub, well-connected to
Delhi (5 hours) and other major cities.

**By Road:** Private taxis from Delhi take approximately 6–7 hours via the Delhi–Haridwar expressway.

## What to Pack

- Light, modest clothing (no shorts or sleeveless tops in the ashram)
- A yoga mat (most schools provide them, but your own is always nice)
- Layers for cool mountain mornings
- Reusable water bottle
- A journal — you will want to write
- An open heart and beginner's mind

## Choosing the Right School

Look for schools that are **Yoga Alliance registered** (RYS 200 or RYS 300). Beyond certification,
consider the teaching style, student-to-teacher ratio, accommodation quality, and whether the school
resonates with your personal yoga values.

Smaller class sizes (12–20 students) allow for more personalised attention. Visit the school's social media,
read verified reviews on Google, and don't hesitate to email with specific questions before enrolling.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

const BASE_URL = "https://suryayogarishikesh.com";

const postDescriptions: Record<string, string> = {
  "complete-guide-rishikesh-yoga":
    "Planning your yoga teacher training in Rishikesh? This guide covers when to go, how to get there, what to pack, and how to choose the best school. Start planning now!",
};

const postKeywords: Record<string, string[]> = {
  "complete-guide-rishikesh-yoga": [
    "yoga teacher training rishikesh guide",
    "rishikesh travel tips",
    "what to pack for yoga teacher training",
    "best yoga school rishikesh",
    "how to choose yoga teacher training",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };

  const description = postDescriptions[slug] ?? post.content.substring(0, 160).trim();

  return {
    title: post.title,
    description,
    keywords: postKeywords[slug],
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: "Surya Yoga Rishikesh",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Surya Yoga Rishikesh`,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug] ?? {
    title: "Blog Post Coming Soon",
    date: "2025",
    readTime: "5 min read",
    category: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    content: "This article is being written with care. Please check back soon for the full post.",
  };

  return (
    <>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 bg-stone-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
      </div>

      <div className="bg-cream-50 min-h-screen">
        <article className="container-yoga max-w-3xl py-16">
          {/* Back */}
          <Link
            href="/blog"
            className="flex items-center gap-2 text-stone-500 hover:text-terracotta-600 transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-stone-500">
            <span className="flex items-center gap-1.5 text-terracotta-500 font-semibold bg-terracotta-50 px-3 py-1 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-stone prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-serif text-2xl font-bold text-stone-900 mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-stone-600 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-terracotta-50 rounded-2xl border border-terracotta-100">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              Ready to train in Rishikesh?
            </h3>
            <p className="text-stone-600 mb-5">
              Join us for an upcoming 200 Hour Yoga Teacher Training at Surya Yoga Rishikesh.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-full transition-all"
            >
              Book Now
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
