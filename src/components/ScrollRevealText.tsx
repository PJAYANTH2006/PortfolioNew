"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
}

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={container}
      className="mb-24 flex flex-wrap justify-center text-center font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl lg:text-[64px] lg:leading-[1.1] max-w-5xl mx-auto px-4"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative mr-2 mb-2 inline-block md:mr-3 md:mb-3 lg:mr-4 lg:mb-4">
      <span className="absolute opacity-15">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className="text-text drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      >
        {children}
      </motion.span>
    </span>
  );
};
