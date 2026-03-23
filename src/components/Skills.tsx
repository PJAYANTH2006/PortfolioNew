"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";
import {
  Braces,
  Blocks,
  Database,
  Code2,
  Cpu,
  Wrench,
} from "lucide-react";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills that power production"
        subtitle="Depth across languages, frameworks, and tools that keep shipping velocity high."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-3xl p-6 transition hover:shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Languages
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-muted">
            <Braces size={18} />
            <Code2 size={18} />
            <Cpu size={18} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.languages.map((item) => (
              <span
                key={item.name}
                className="rounded-full bg-white/10 px-3 py-2 text-xs text-text transition hover:bg-white/20"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6 transition hover:shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Frameworks
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-muted">
            <Blocks size={18} />
            <Code2 size={18} />
            <Braces size={18} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.frameworks.map((item) => (
              <span
                key={item.name}
                className="rounded-full bg-white/10 px-3 py-2 text-xs text-text transition hover:bg-white/20"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6 transition hover:shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Tools / Platforms
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-muted">
            <Database size={18} />
            <Wrench size={18} />
            <Blocks size={18} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.tools.map((item) => (
              <span
                key={item.name}
                className="rounded-full bg-white/10 px-3 py-2 text-xs text-text transition hover:bg-white/20"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
