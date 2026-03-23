"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        title="Education"
        subtitle="Academic foundation grounding the engineering craft."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.school} className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {item.period}
            </p>
            <h3 className="mt-3 font-display text-xl text-text">
              {item.degree}
            </h3>
            <p className="mt-2 text-sm text-muted">{item.school}</p>
            {"detail" in item && item.detail ? (
              <p className="mt-2 text-xs text-muted">{item.detail}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
