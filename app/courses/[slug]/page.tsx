import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug, getAllCourseSlugs, courses } from "@/lib/courses";
import { courseSchema, breadcrumbSchema } from "@/lib/structured-data";
import { Clock, Calendar, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

const BASE_URL = "https://suryayogarishikesh.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };

  const title = `${course.title} in Rishikesh, India`;
  const ogImageUrl = `/images/courses/${course.slug}-og.jpg`;

  return {
    title,
    description: course.description,
    keywords: [
      `${course.hours} hour yoga teacher training rishikesh`,
      `${course.shortTitle.toLowerCase()} rishikesh`,
      "yoga teacher training india",
      "yoga alliance certified courses",
      "yoga school rishikesh",
    ],
    alternates: {
      canonical: `${BASE_URL}/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | Surya Yoga Rishikesh`,
      description: course.description,
      url: `${BASE_URL}/courses/${course.slug}`,
      siteName: "Surya Yoga Rishikesh",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${course.title} at Surya Yoga Rishikesh`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Surya Yoga Rishikesh`,
      description: course.description,
      images: [ogImageUrl],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const jsonLd = courseSchema(course);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://suryayogarishikesh.com" },
    { name: "Courses", url: "https://suryayogarishikesh.com/courses/200-hour-yoga-teacher-training" },
    { name: course.title, url: `https://suryayogarishikesh.com/courses/${course.slug}` },
  ]);

  const relatedCourses = courses.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div className="relative pt-24 pb-20 bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=60')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900" />

        <div className="relative container-yoga">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-stone-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><Link href="/courses/200-hour-yoga-teacher-training" className="hover:text-white transition-colors">Courses</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-white font-medium">{course.shortTitle}</li>
            </ol>
          </nav>

          <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            {course.badge}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-stone-300 text-xl max-w-2xl mb-8">{course.tagline}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white">
              <Clock className="w-4 h-4 text-gold-400" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white">
              <Calendar className="w-4 h-4 text-gold-400" />
              {course.level}
            </div>
            {course.hours > 0 && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white">
                <span className="text-gold-400 font-bold">{course.hours}h</span>
                Yoga Alliance Certified
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-full transition-all hover:shadow-lg"
            >
              Book This Course — ${course.price.toLocaleString()}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-cream-50">
        <div className="container-yoga py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="font-serif text-3xl font-bold text-stone-900 mb-4">
                  Course Overview
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed">{course.description}</p>
              </section>

              {/* Highlights */}
              <section aria-labelledby="highlights-heading">
                <h2 id="highlights-heading" className="font-serif text-3xl font-bold text-stone-900 mb-6">
                  Course Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-100">
                      <CheckCircle className="w-5 h-5 text-sage-500 shrink-0" />
                      <span className="text-stone-700 font-medium text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum */}
              <section aria-labelledby="curriculum-heading">
                <h2 id="curriculum-heading" className="font-serif text-3xl font-bold text-stone-900 mb-6">
                  Curriculum Breakdown
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module) => (
                    <div key={module.week} className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
                      <div className="bg-terracotta-50 px-6 py-4 flex items-center justify-between">
                        <span className="text-terracotta-500 text-sm font-bold uppercase tracking-wider">{module.week}</span>
                        <h3 className="font-semibold text-stone-900">{module.title}</h3>
                      </div>
                      <ul className="p-6 grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-stone-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section aria-labelledby="schedule-heading">
                <h2 id="schedule-heading" className="font-serif text-3xl font-bold text-stone-900 mb-6">
                  Daily Schedule
                </h2>
                <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden divide-y divide-stone-50">
                  {course.schedule.map((item, i) => (
                    <div key={i} className="flex items-center gap-6 px-6 py-4 hover:bg-terracotta-50/50 transition-colors">
                      <span className="text-terracotta-600 font-bold text-sm w-12 shrink-0">{item.time}</span>
                      <span className="text-stone-700 text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Inclusions */}
              <section aria-labelledby="inclusions-heading">
                <h2 id="inclusions-heading" className="font-serif text-3xl font-bold text-stone-900 mb-6">
                  What&apos;s Included
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {course.inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl border border-sage-100">
                      <CheckCircle className="w-5 h-5 text-sage-600 shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking card */}
                <div className="bg-white rounded-3xl border border-stone-100 shadow-xl p-7">
                  <p className="text-stone-500 text-sm mb-1">Starting from</p>
                  <p className="font-serif text-4xl font-bold text-terracotta-600 mb-4">
                    ${course.price.toLocaleString()}
                    <span className="text-stone-400 text-base font-normal ml-1">USD</span>
                  </p>

                  <Link
                    href="/book"
                    className="block w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-center rounded-full mb-3 transition-all hover:shadow-lg"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full py-4 border-2 border-terracotta-500 text-terracotta-600 font-semibold text-center rounded-full hover:bg-terracotta-50 transition-all"
                  >
                    Ask a Question
                  </Link>

                  <hr className="my-5 border-stone-100" />
                  <h3 className="font-semibold text-stone-900 mb-3 text-sm uppercase tracking-wider">
                    Next Available Dates
                  </h3>
                  <ul className="space-y-2">
                    {course.nextDates.map((date) => (
                      <li key={date} className="flex items-center gap-2 text-sm text-stone-600">
                        <Calendar className="w-3.5 h-3.5 text-terracotta-400" />
                        {date}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back link */}
                <Link
                  href="/"
                  className="flex items-center gap-2 text-stone-500 hover:text-terracotta-600 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all courses
                </Link>
              </div>
            </aside>
          </div>

          {/* Related courses */}
          <section className="mt-20 pt-16 border-t border-stone-200" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-serif text-3xl font-bold text-stone-900 mb-8">
              Explore Other Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/courses/${rc.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-stone-100 hover:border-terracotta-200 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta-500 bg-terracotta-50 px-3 py-1 rounded-full">
                    {rc.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-3 mb-2 group-hover:text-terracotta-600 transition-colors">
                    {rc.shortTitle}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-2 mb-4">{rc.description}</p>
                  <p className="text-terracotta-600 font-bold">${rc.price.toLocaleString()} USD</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
