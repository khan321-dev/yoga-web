import Link from "next/link";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

// Inline social SVGs to ensure cross-version compatibility
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.7 15 15.3 12 9.7 9 9.7 15" />
  </svg>
);

const courseLinks = [
  { label: "100 Hour TTC", href: "/courses/100-hour-yoga-teacher-training" },
  { label: "200 Hour TTC", href: "/courses/200-hour-yoga-teacher-training" },
  { label: "300 Hour TTC", href: "/courses/300-hour-yoga-teacher-training" },
  { label: "500 Hour TTC", href: "/courses/500-hour-yoga-teacher-training" },
  { label: "Yoga Retreat", href: "/courses/yoga-retreat" },
];

const quickLinks = [
  { label: "Accommodation", href: "/accommodation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "/book" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/suryayogarishikesh" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/suryayogarishikesh" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/suryayogarishikesh" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      {/* Upper CTA bar */}
      <div className="bg-terracotta-500">
        <div className="container-yoga py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif text-2xl font-bold">
              Begin Your Yoga Journey Today
            </p>
            <p className="text-terracotta-100 text-sm mt-1">
              Limited seats available. Next batch starts August 2025.
            </p>
          </div>
          <Link
            href="/book"
            className="px-8 py-3.5 bg-white text-terracotta-600 font-bold rounded-full hover:bg-cream-100 transition-colors shrink-0"
          >
            Book Your Course
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-yoga py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-terracotta-500 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white">
                  Surya Yoga
                </span>
                <span className="block text-xs font-medium uppercase tracking-widest text-terracotta-400">
                  Rishikesh
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Yoga Alliance certified school nestled in the Himalayan foothills
              of Rishikesh — the yoga capital of the world. Transforming lives
              through authentic yoga education since 2016.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-terracotta-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-terracotta-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-terracotta-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-terracotta-400 mt-0.5 shrink-0" />
                <span className="text-stone-400 text-sm">
                  Tapovan, Laxman Jhula Road,
                  <br />
                  Rishikesh, Uttarakhand 249192,
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-stone-400 hover:text-terracotta-400 transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a
                  href="mailto:info@suryayogarishikesh.com"
                  className="text-stone-400 hover:text-terracotta-400 transition-colors text-sm"
                >
                  info@suryayogarishikesh.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container-yoga py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Surya Yoga Rishikesh. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-stone-500 hover:text-stone-300 transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-stone-500 hover:text-stone-300 transition-colors text-xs"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
