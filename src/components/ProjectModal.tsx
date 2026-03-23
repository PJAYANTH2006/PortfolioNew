"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  demo: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handler);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="gradient-border relative w-full max-w-2xl rounded-3xl p-8"
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-text transition hover:bg-white/20"
              aria-label="Close project modal"
              type="button"
            >
              <X size={18} />
            </button>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Project Spotlight
            </p>
            <h3 className="mt-3 font-display text-2xl text-text">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {project.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
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
      ) : null}
    </AnimatePresence>
  );
}
