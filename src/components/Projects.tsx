"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null
  );

  const filters = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.stack.forEach((tech) => set.add(tech)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = active === "All"
    ? projects
    : projects.filter((project) => project.stack.includes(active));

  return (
    <Section id="projects">
      <SectionHeader
        title="Signature builds"
        subtitle="High-impact projects shaped around real-time collaboration, AI-assisted workflows, and polished UX."
      />
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              active === filter
                ? "bg-brand text-white shadow-glow"
                : "glass text-text"
            )}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: index * 0.08 }}
          >
            <ProjectCard
              project={project}
              onOpen={() => setSelected(project)}
            />
          </motion.div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
