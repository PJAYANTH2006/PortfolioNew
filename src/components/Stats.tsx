"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = Math.floor(progress * value);
      if (next !== start) {
        start = next;
        setDisplay(next);
      }
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-semibold text-text">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-12 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl p-6">
          <Counter value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted">
            {stat.label}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
