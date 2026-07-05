"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Courses", href: "/courses/200-hour-yoga-teacher-training" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const courseLinks = [
  { label: "100 Hour TTC", href: "/courses/100-hour-yoga-teacher-training" },
  { label: "200 Hour TTC", href: "/courses/200-hour-yoga-teacher-training" },
  { label: "300 Hour TTC", href: "/courses/300-hour-yoga-teacher-training" },
  { label: "500 Hour TTC", href: "/courses/500-hour-yoga-teacher-training" },
  { label: "Yoga Retreat", href: "/courses/yoga-retreat" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || !isHome
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/50"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="container-yoga flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Surya Yoga Rishikesh — Home"
        >
          <div className="w-9 h-9 rounded-full bg-terracotta-500 flex items-center justify-center group-hover:bg-terracotta-600 transition-colors">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span
              className={cn(
                "block font-serif text-lg font-bold tracking-tight transition-colors",
                scrolled || !isHome ? "text-stone-900" : "text-white"
              )}
            >
              Surya Yoga
            </span>
            <span
              className={cn(
                "block text-xs font-medium uppercase tracking-widest transition-colors",
                scrolled || !isHome
                  ? "text-terracotta-500"
                  : "text-cream-200"
              )}
            >
              Rishikesh
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {/* Courses dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                scrolled || !isHome
                  ? "text-stone-700 hover:text-terracotta-600 hover:bg-terracotta-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
              aria-haspopup="true"
              aria-expanded={coursesOpen}
            >
              Courses ▾
            </button>
            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden"
                  role="menu"
                >
                  <div className="p-2">
                    {courseLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-stone-700 hover:bg-terracotta-50 hover:text-terracotta-700 transition-colors"
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                  pathname === link.href
                    ? "text-terracotta-600 bg-terracotta-50"
                    : scrolled || !isHome
                    ? "text-stone-700 hover:text-terracotta-600 hover:bg-terracotta-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/book"
              className="ml-2 px-5 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/30 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            scrolled || !isHome
              ? "text-stone-800 hover:bg-stone-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-cream-50/98 backdrop-blur-md border-t border-stone-200/50"
          >
            <div className="container-yoga py-4 flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-terracotta-500 px-3 py-2">
                Courses
              </p>
              {courseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-stone-700 font-medium hover:bg-terracotta-50 hover:text-terracotta-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-stone-200" />
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-stone-700 font-medium hover:bg-terracotta-50 hover:text-terracotta-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-3 mx-2 py-4 bg-terracotta-500 text-white font-bold text-center rounded-full hover:bg-terracotta-600 transition-colors"
              >
                Book Your Course
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
