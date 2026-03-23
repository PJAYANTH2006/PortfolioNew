"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function StaggerReveal({ text, className, delay = 0 }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn("flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-flex mr-[0.25em]">
          <motion.span variants={child}>{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
}
