"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yFg = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" && "items-center text-center"
      )}
    >
      <motion.span 
        style={{ y: yBg }}
        className="text-xs uppercase tracking-[0.35em] text-muted inline-block"
      >
        Highlight
      </motion.span>
      <motion.h2 
        style={{ y: yFg }}
        className="font-display text-3xl font-semibold text-text sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p 
          style={{ y: yBg }}
          className="max-w-2xl text-base text-muted"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
