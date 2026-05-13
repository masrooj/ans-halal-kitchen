import { cn } from "@/lib/cn";

type HalalBadgeProps = {
  size?: "sm" | "md" | "lg";
  compact?: boolean;
  className?: string;
};

export function HalalBadge({
  size = "sm",
  compact = false,
  className,
}: HalalBadgeProps) {
  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
    lg: "text-xs px-4 py-1.5",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 font-sans font-medium text-green-800",
        sizes[size],
        className,
      )}
      aria-label="Zabiha Halal certified"
    >
      <span className="text-[0.65rem]" aria-hidden>
        🟢
      </span>
      {compact ? "Zabiha Halal" : "Zabiha Halal Certified"}
    </span>
  );
}
