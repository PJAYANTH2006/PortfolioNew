"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        title="Internship experience"
        subtitle="Driving measurable impact while shipping production-grade features."
      />
      <div className="relative border-l border-border pl-6">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            className="relative mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-brand shadow-glow" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-text">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted">{item.company}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-muted">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.summary.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
