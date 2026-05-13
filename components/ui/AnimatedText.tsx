"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function AnimatedLine({
  text,
  className,
  delayOffset = 0,
  wordDelay = 0.12,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
  wordDelay?: number;
}) {
  const words = text.trim().split(/\s+/);
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.2em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delayOffset + i * wordDelay,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
