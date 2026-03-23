"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  preview: string;
  github: string;
  demo: string;
};

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="[perspective:1000px] h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="gradient-border group relative flex h-full flex-col justify-between rounded-3xl p-6 shadow-[0_0_0_rgba(0,0,0,0)] transition-colors"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="pointer-events-none absolute -right-8 top-10 hidden w-64 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block" style={{ transform: "translateZ(50px)" }}>
          <div className="glass overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
            <Image
              src={project.preview}
              alt={`${project.title} preview`}
              width={512}
              height={320}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="space-y-4" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-start justify-between">
            <h3 className="font-display text-xl text-text">{project.title}</h3>
            <button
              onClick={onOpen}
              className="rounded-full bg-white/10 p-2 text-text transition hover:bg-white/20"
              type="button"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
          <p className="text-sm text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3" style={{ transform: "translateZ(20px)" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition hover:shadow-glow"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:shadow-glow"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
