export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  hours: number;
  duration: string;
  level: string;
  price: number;
  currency: string;
  description: string;
  tagline: string;
  color: string;
  badge: string;
  highlights: string[];
  curriculum: CurriculumModule[];
  inclusions: string[];
  schedule: ScheduleItem[];
  nextDates: string[];
  image: string;
}

export interface CurriculumModule {
  week: string;
  title: string;
  topics: string[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export const courses: Course[] = [
  {
    slug: "100-hour-yoga-teacher-training",
    title: "100 Hour Yoga Teacher Training",
    shortTitle: "100 Hour TTC",
    hours: 100,
    duration: "12 Days",
    level: "Beginner",
    price: 999,
    currency: "USD",
    description:
      "Begin your transformative yoga journey with our intensive 100-hour foundation course in the heart of Rishikesh. Perfect for beginners and those wishing to deepen their personal practice.",
    tagline: "Your First Step Toward Mastery",
    color: "terracotta",
    badge: "Foundation",
    highlights: [
      "Yoga Alliance Certified",
      "Daily Asana Practice",
      "Pranayama & Meditation",
      "Ayurvedic Nutrition",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Foundations of Yoga",
        topics: [
          "History & Philosophy of Yoga",
          "Introduction to Asana Practice",
          "Sun Salutations A & B",
          "Pranayama Basics",
          "Meditation Introduction",
        ],
      },
      {
        week: "Week 2",
        title: "Deepening the Practice",
        topics: [
          "Standing & Balancing Poses",
          "Anatomy for Yoga Teachers",
          "Hands-on Adjustments",
          "Yoga Nidra",
          "Teaching Methodology Intro",
        ],
      },
    ],
    inclusions: [
      "Shared accommodation",
      "3 vegetarian meals daily",
      "Course materials & books",
      "Yoga Alliance certificate",
      "Weekend excursion to Ganges",
    ],
    schedule: [
      { time: "05:30", activity: "Morning Bell & Meditation" },
      { time: "06:00", activity: "Pranayama Practice" },
      { time: "07:00", activity: "Asana Practice" },
      { time: "09:00", activity: "Breakfast" },
      { time: "10:00", activity: "Yoga Philosophy Lecture" },
      { time: "12:00", activity: "Lunch & Rest" },
      { time: "14:00", activity: "Anatomy & Teaching Methodology" },
      { time: "16:00", activity: "Evening Asana Practice" },
      { time: "18:00", activity: "Dinner" },
      { time: "19:00", activity: "Evening Meditation / Kirtan" },
      { time: "21:00", activity: "Lights Out" },
    ],
    nextDates: [
      "August 1–12, 2025",
      "September 1–12, 2025",
      "October 1–12, 2025",
    ],
    image: "/images/course-100.jpg",
  },
  {
    slug: "200-hour-yoga-teacher-training",
    title: "200 Hour Yoga Teacher Training",
    shortTitle: "200 Hour TTC",
    hours: 200,
    duration: "28 Days",
    level: "All Levels",
    price: 1799,
    currency: "USD",
    description:
      "Our flagship 200-hour teacher training is a Yoga Alliance-accredited program that equips you with the skills, knowledge, and confidence to teach yoga professionally worldwide.",
    tagline: "Become a Certified Yoga Teacher",
    color: "sage",
    badge: "Most Popular",
    highlights: [
      "Yoga Alliance RYS 200 Certified",
      "Hatha & Ashtanga Traditions",
      "Teaching Practicum Included",
      "Lifetime Alumni Community",
    ],
    curriculum: [
      {
        week: "Week 1–2",
        title: "Foundation & Asana",
        topics: [
          "Yoga Philosophy & Sutras",
          "Hatha Yoga Fundamentals",
          "Alignment & Adjustments",
          "Breath & Body Awareness",
          "Mantra & Chanting",
        ],
      },
      {
        week: "Week 3",
        title: "Anatomy & Teaching Methods",
        topics: [
          "Functional Anatomy",
          "Kinesiology for Yoga",
          "Sequencing Principles",
          "Cueing Language",
          "Class Observation",
        ],
      },
      {
        week: "Week 4",
        title: "Teaching Practicum",
        topics: [
          "Teaching Practice (Daily)",
          "Feedback & Refinement",
          "Business of Yoga",
          "Exam & Assessment",
          "Graduation Ceremony",
        ],
      },
    ],
    inclusions: [
      "Shared or private accommodation",
      "3 organic vegetarian meals daily",
      "All course materials",
      "Yoga Alliance registration support",
      "Weekend excursions",
      "Satsang & kirtan evenings",
    ],
    schedule: [
      { time: "05:30", activity: "Morning Bell & Meditation" },
      { time: "06:00", activity: "Pranayama Practice" },
      { time: "07:00", activity: "Morning Asana (Hatha/Ashtanga)" },
      { time: "09:00", activity: "Breakfast" },
      { time: "10:30", activity: "Yoga Philosophy / Anatomy Lecture" },
      { time: "12:30", activity: "Lunch & Rest" },
      { time: "14:00", activity: "Teaching Methodology" },
      { time: "16:00", activity: "Evening Asana / Yin Yoga" },
      { time: "18:00", activity: "Dinner" },
      { time: "19:00", activity: "Satsang / Kirtan / Self Study" },
      { time: "21:00", activity: "Lights Out" },
    ],
    nextDates: [
      "August 1–28, 2025",
      "September 1–28, 2025",
      "November 1–28, 2025",
    ],
    image: "/images/course-200.jpg",
  },
  {
    slug: "300-hour-yoga-teacher-training",
    title: "300 Hour Yoga Teacher Training",
    shortTitle: "300 Hour TTC",
    hours: 300,
    duration: "30 Days",
    level: "Intermediate",
    price: 2499,
    currency: "USD",
    description:
      "Deepen your knowledge with our advanced 300-hour program designed for certified 200-hour teachers ready to specialize in advanced asana, philosophy, and therapeutic yoga.",
    tagline: "Elevate Your Teaching to Advanced Level",
    color: "gold",
    badge: "Advanced",
    highlights: [
      "Advanced Asana & Inversions",
      "Yoga Therapy Modules",
      "Sanskrit & Sacred Texts",
      "Business & Marketing for Yogis",
    ],
    curriculum: [
      {
        week: "Weeks 1–2",
        title: "Advanced Asana & Philosophy",
        topics: [
          "Advanced Vinyasa & Inversions",
          "Yoga Sutras Deep Dive",
          "Upanishads & Bhagavad Gita",
          "Mudra & Bandha",
          "Advanced Pranayama",
        ],
      },
      {
        week: "Weeks 3–4",
        title: "Therapeutic & Specialty",
        topics: [
          "Restorative & Yin Yoga",
          "Yoga for Special Populations",
          "Chakra & Energy Body",
          "Ayurveda & Lifestyle",
          "Mentorship Teaching",
        ],
      },
    ],
    inclusions: [
      "Private accommodation available",
      "3 Ayurvedic meals daily",
      "Advanced course materials",
      "Yoga Alliance 500 upgrade eligibility",
      "Specialized workshop sessions",
    ],
    schedule: [
      { time: "05:00", activity: "Silent Meditation & Sadhana" },
      { time: "06:00", activity: "Advanced Pranayama" },
      { time: "07:00", activity: "Advanced Asana Practice" },
      { time: "09:00", activity: "Breakfast" },
      { time: "10:30", activity: "Philosophy / Sanskrit Lecture" },
      { time: "12:30", activity: "Lunch & Rest" },
      { time: "14:00", activity: "Therapeutic Yoga / Specialty" },
      { time: "16:00", activity: "Evening Practice & Teaching" },
      { time: "18:00", activity: "Dinner" },
      { time: "19:00", activity: "Deep Study / Satsang" },
    ],
    nextDates: ["September 1–30, 2025", "January 1–30, 2026"],
    image: "/images/course-300.jpg",
  },
  {
    slug: "500-hour-yoga-teacher-training",
    title: "500 Hour Yoga Teacher Training",
    shortTitle: "500 Hour TTC",
    hours: 500,
    duration: "58 Days",
    level: "Advanced",
    price: 3999,
    currency: "USD",
    description:
      "The ultimate yoga teacher training combining our 200-hour and 300-hour programs into a transformative two-month immersion. Graduate as a Yoga Alliance E-RYT 500 certified master teacher.",
    tagline: "The Complete Path to Mastery",
    color: "deep",
    badge: "Complete",
    highlights: [
      "E-RYT 500 Certification",
      "200 + 300 Hour Combined",
      "Master Teacher Mentorship",
      "Global Teaching Opportunities",
    ],
    curriculum: [
      {
        week: "Month 1",
        title: "200 Hour Foundation",
        topics: [
          "Complete 200 Hour Curriculum",
          "Hatha & Ashtanga Mastery",
          "Teaching Certification",
          "Philosophy & Anatomy",
        ],
      },
      {
        week: "Month 2",
        title: "300 Hour Advanced",
        topics: [
          "Complete 300 Hour Curriculum",
          "Advanced Specializations",
          "Therapeutic Applications",
          "Master Teaching Practice",
        ],
      },
    ],
    inclusions: [
      "Private accommodation",
      "3 Ayurvedic meals daily",
      "All course materials",
      "E-RYT 500 registration support",
      "Weekend excursions & retreats",
      "Lifelong alumni network",
    ],
    schedule: [
      { time: "05:00", activity: "Morning Sadhana" },
      { time: "06:00", activity: "Pranayama & Meditation" },
      { time: "07:00", activity: "Asana Practice" },
      { time: "09:00", activity: "Breakfast" },
      { time: "10:30", activity: "Theory & Philosophy" },
      { time: "12:30", activity: "Lunch & Rest" },
      { time: "14:00", activity: "Specialty Modules" },
      { time: "16:00", activity: "Evening Practice" },
      { time: "18:00", activity: "Dinner" },
      { time: "19:00", activity: "Satsang & Self Study" },
    ],
    nextDates: ["August 1 – September 27, 2025", "January 1 – February 27, 2026"],
    image: "/images/course-500.jpg",
  },
  {
    slug: "yoga-retreat",
    title: "Yoga & Meditation Retreat",
    shortTitle: "Yoga Retreat",
    hours: 0,
    duration: "7 or 14 Days",
    level: "All Levels",
    price: 499,
    currency: "USD",
    description:
      "Rejuvenate body and soul with our immersive yoga and meditation retreats nestled in the Himalayan foothills of Rishikesh. Ideal for practitioners seeking rest, renewal, and spiritual connection.",
    tagline: "Rest. Restore. Reconnect.",
    color: "rose",
    badge: "Retreat",
    highlights: [
      "Daily Yoga & Meditation",
      "Ayurvedic Treatments",
      "Himalayan Excursions",
      "Ganges Ceremony",
    ],
    curriculum: [
      {
        week: "Daily Schedule",
        title: "Retreat Program",
        topics: [
          "Morning Meditation",
          "Hatha or Yin Yoga",
          "Guided Breathwork",
          "Optional Ayurvedic Massage",
          "Evening Fire Ceremony",
        ],
      },
    ],
    inclusions: [
      "Comfortable accommodation",
      "3 organic vegetarian meals",
      "Daily yoga & meditation sessions",
      "Guided Rishikesh city tour",
      "Evening Ganga Aarti ceremony",
      "Ayurvedic consultation",
    ],
    schedule: [
      { time: "06:00", activity: "Morning Meditation" },
      { time: "07:00", activity: "Hatha / Yin Yoga" },
      { time: "09:00", activity: "Breakfast" },
      { time: "11:00", activity: "Excursion / Free Time" },
      { time: "13:00", activity: "Lunch" },
      { time: "14:00", activity: "Ayurvedic Treatment / Rest" },
      { time: "16:00", activity: "Evening Yoga Practice" },
      { time: "18:00", activity: "Dinner" },
      { time: "19:30", activity: "Ganga Aarti Ceremony" },
    ],
    nextDates: [
      "Available Every Month",
      "Contact for Custom Dates",
    ],
    image: "/images/retreat.jpg",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((c) => c.slug);
}
