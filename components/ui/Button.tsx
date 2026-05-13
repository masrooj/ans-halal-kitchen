import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
};

export function Button({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-sans text-sm font-semibold transition-all";
  const variants = {
    primary: "bg-ans-emerald text-white shadow-sm hover:bg-ans-emerald-mid hover:shadow-md",
    outline:
      "border border-ans-emerald text-ans-emerald hover:bg-ans-emerald hover:text-white",
    ghost: "text-ans-gold hover:text-ans-emerald",
  }[variant];

  if (href) {
    return (
      <Link href={href} className={cn(base, variants, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn(base, variants, className)} {...props}>
      {children}
    </button>
  );
}
