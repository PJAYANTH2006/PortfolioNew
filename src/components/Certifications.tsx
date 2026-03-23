"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        title="Certifications"
        subtitle="Learning track progress and ongoing upskilling."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {cert.issuer}
            </p>
            <h3 className="mt-3 font-display text-xl text-text">
              {cert.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{cert.note}</p>
            <span className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-muted">
              {cert.year}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
