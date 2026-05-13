import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ans-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[40px] leading-tight text-ans-emerald md:text-[52px]",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ans-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
