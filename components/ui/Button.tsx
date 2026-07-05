import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-lg hover:shadow-terracotta-500/30 hover:shadow-xl",
  secondary:
    "bg-sage-500 hover:bg-sage-600 text-white shadow-lg hover:shadow-sage-500/30 hover:shadow-xl",
  outline:
    "border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-500 hover:text-white",
  ghost: "text-stone-700 hover:bg-stone-100 hover:text-stone-900",
  gold: "bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-gold-500/30 hover:shadow-xl",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full",
    "transition-all duration-300 ease-out cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
