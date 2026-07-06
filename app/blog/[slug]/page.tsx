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
  "yoga-philosophy-patanjali-sutras": {
    title: "Patanjali's Yoga Sutras: A Modern Interpretation",
    date: "June 2, 2025",
    readTime: "12 min read",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    content: `
The Yoga Sutras of Patanjali are a collection of 196 Sanskrit sutras (aphorisms) on the theory and practice of yoga. Compiled prior to 400 CE by the sage Patanjali, this text is the philosophical cornerstone of classical Ashtanga/Raja Yoga.

In today's fast-paced world, the Sutras offer a profound psychological map to navigate stress, anxiety, and the distractions of modern life.

## The Eight Limbs of Yoga (Ashtanga)

Perhaps the most famous section of the Sutras outlines the eightfold path (Ashtanga) leading to liberation:

1. **Yamas** (Ethical disciplines)
2. **Niyamas** (Self-observations)
3. **Asana** (Physical postures)
4. **Pranayama** (Breath control)
5. **Pratyahara** (Withdrawal of the senses)
6. **Dharana** (Concentration)
7. **Dhyana** (Meditation)
8. **Samadhi** (Absorption/Union)

## Applying the Sutras to Modern Life

Yoga is much more than physical exercise. The second sutra, *Yoga Chitta Vritti Nirodha*, translates to "Yoga is the calming of the fluctuations of the mind."

By practicing mindfulness, non-attachment (*Vairagya*), and consistent effort (*Abhyasa*), we can achieve mental clarity and emotional stability.
    `,
  },
  "sun-salutation-guide": {
    title: "Mastering Sun Salutations: Alignment, Breath & Variations",
    date: "May 20, 2025",
    readTime: "10 min read",
    category: "Asana",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    content: `
Surya Namaskar, or Sun Salutation, is a sequence of 12 powerful yoga poses. Historically performed to pay reverence to the sun, it acts as a complete cardiovascular workout and dynamic stretch.

Whether you are a beginner or an advanced practitioner, mastering the alignment and breathing pattern of Sun Salutations is crucial.

## Step-by-Step Sequence

1. **Pranamasana** (Prayer Pose) - Exhale and bring hands to the chest.
2. **Hastauttanasana** (Raised Arms Pose) - Inhale and stretch back.
3. **Hastapadasana** (Standing Forward Bend) - Exhale and fold forward.
4. **Ashwa Sanchalanasana** (Equestrian Pose) - Inhale and push the right leg back.
5. **Dandasana** (Plank Pose) - Hold the breath and align the body.
6. **Ashtanga Namaskara** (Eight-Limbed Salute) - Exhale and lower knees, chest, and chin.
7. **Bhujangasana** (Cobra Pose) - Inhale and lift the chest.
8. **Adho Mukha Svanasana** (Downward-Facing Dog) - Exhale and lift the hips.
9. **Ashwa Sanchalanasana** (Equestrian Pose) - Inhale and bring the right foot forward.
10. **Hastapadasana** (Standing Forward Bend) - Exhale and step the left foot forward.
11. **Hastauttanasana** (Raised Arms Pose) - Inhale, stand up, and stretch back.
12. **Tadasana** (Mountain Pose) - Exhale and return to standing.

## Key Tips for Practice

Focus on matching your movement to the breath. Let the breath lead the transition between each pose to build internal heat and calm the nervous system.
    `,
  },
  "ayurveda-yoga-diet": {
    title: "Ayurvedic Eating for Yoga Practitioners",
    date: "May 8, 2025",
    readTime: "7 min read",
    category: "Ayurveda",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    content: `
Ayurveda, the sister science of Yoga, is a 5,000-year-old system of natural healing. It teaches that health is a state of balance between the mind, body, and environment.

A yogic diet is traditionally *Sattvic* (pure, clean, and wholesome), which supports a calm mind and flexible body.

## Understanding the Doshas

Ayurveda classifies individuals into three primary energy patterns or *Doshas*:

- **Vata** (Wind & Ether) - Benefits from warm, grounding, and nourishing foods.
- **Pitta** (Fire & Water) - Benefits from cooling, sweet, and hydrating foods.
- **Kapha** (Earth & Water) - Benefits from light, spicy, and stimulating foods.

## Tips for a Yogic Diet

1. **Eat Fresh:** Choose whole, unprocessed foods.
2. **Align with the Seasons:** Eat local and seasonal produce.
3. **Mindful Eating:** Eat in a quiet environment and chew your food thoroughly.
4. **Hydration:** Drink warm or room-temperature water, avoiding ice water.
    `,
  },
  "yoga-teacher-certification-worth-it": {
    title: "Is a Yoga Teacher Certification Worth It in 2025?",
    date: "April 25, 2025",
    readTime: "9 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    content: `
A Yoga Teacher Training (YTT) course is a significant investment of time, money, and energy. If you are wondering whether a yoga certification is worth it in 2025, the answer depends on your goals.

Whether you want to teach professionally or simply deepen your personal practice, a certified course can be highly rewarding.

## Benefits of Certification

- **Deepen Your Practice:** You will learn anatomy, alignment, and philosophy in detail.
- **Global Recognition:** A Yoga Alliance certification allows you to teach anywhere in the world.
- **Personal Growth:** A YTT is a journey of self-discovery, building confidence and mindfulness.
- **Community:** Connect with like-minded individuals from all over the world.

## What to Look For

Choose a school registered with **Yoga Alliance (RYS 200 or RYS 300)**. Check the curriculum, read student reviews, and ensure the teachers have solid experience.
    `,
  },
  "pranayama-breathing-techniques": {
    title: "5 Pranayama Techniques Every Yogi Should Know",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Pranayama",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    content: `
Pranayama is the practice of breath control in yoga. In Sanskrit, *Prana* means life energy and *Yama* means control or extension.

By consciously regulating your breath, you can calm the mind, increase oxygenation, and boost overall energy levels.

## 5 Essential Pranayama Techniques

1. **Nadi Shodhana** (Alternate Nostril Breathing) - Restores balance and calms the nervous system.
2. **Kapalabhati** (Skull Shining Breath) - Energizes the body and clears the respiratory system.
3. **Bhastrika** (Bellows Breath) - Increases vitality and warms the body.
4. **Bhramari** (Bee Breath) - Relieves stress, anxiety, and improves sleep.
5. **Sheetali** (Cooling Breath) - Cools the body and calms anger or irritation.

## How to Practice Safely

Always practice Pranayama on an empty stomach. Sit in a comfortable, upright position, and never force or hold your breath beyond comfort.
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
  "yoga-philosophy-patanjali-sutras":
    "The 196 sutras of Patanjali form the philosophical backbone of classical yoga. Discover how these ancient teachings apply to modern life.",
  "sun-salutation-guide":
    "Mastering Sun Salutations: Learn alignment, breathing patterns, and variations of Surya Namaskar for a perfect daily practice.",
  "ayurveda-yoga-diet":
    "What you eat affects your yoga practice. Learn the Ayurvedic principles of diet and align your food with your dosha.",
  "yoga-teacher-certification-worth-it":
    "Is a Yoga Teacher Certification Worth It? We break down the real benefits, costs, and career opportunities of YTT.",
  "pranayama-breathing-techniques":
    "Discover 5 essential pranayama breathing techniques to increase energy, reduce stress, and calm your mind.",
};

const postKeywords: Record<string, string[]> = {
  "complete-guide-rishikesh-yoga": [
    "yoga teacher training rishikesh guide",
    "rishikesh travel tips",
    "what to pack for yoga teacher training",
    "best yoga school rishikesh",
    "how to choose yoga teacher training",
  ],
  "yoga-philosophy-patanjali-sutras": [
    "patanjali yoga sutras",
    "8 limbs of yoga",
    "yoga philosophy",
    "ashtanga yoga",
  ],
  "sun-salutation-guide": [
    "surya namaskar guide",
    "sun salutation alignment",
    "how to do sun salutation",
    "yoga poses breath coordination",
  ],
  "ayurveda-yoga-diet": [
    "ayurvedic diet",
    "sattvic diet",
    "yoga nutrition",
    "eating for your dosha",
  ],
  "yoga-teacher-certification-worth-it": [
    "yoga teacher training worth it",
    "yoga alliance certification",
    "teach yoga professionally",
    "ytt cost and benefits",
  ],
  "pranayama-breathing-techniques": [
    "pranayama techniques",
    "alternate nostril breathing",
    "nadi shodhana",
    "yoga breathing exercises",
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
