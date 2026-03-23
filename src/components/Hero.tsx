"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";
import { Github, Linkedin, Mail } from "lucide-react";
import StaggerReveal from "./StaggerReveal";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const phrases = [
  "Full Stack Developer",
  "Real-Time Systems Builder",
  "AI Workflow Engineer",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(() => {
      if (forward) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
        } else {
          setForward(false);
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, forward ? 70 : 35);
    return () => clearTimeout(timeout);
  }, [display, forward, index]);

  return (
    <span className="text-gradient font-display text-sm font-semibold uppercase tracking-[0.3em]">
      {display}
      <span className="ml-1 inline-block h-4 w-[2px] animate-pulse rounded-full bg-brand" />
    </span>
  );
}

function LiveBadge() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3 mb-2">
      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-white/5 py-1.5 px-3 text-xs font-medium text-text backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        Available for work
      </div>
      {time && (
        <div className="flex items-center gap-2 rounded-full border border-border/50 bg-white/5 py-1.5 px-3 text-xs font-medium text-text backdrop-blur-md">
          <span>📍 Local Time</span>
          <span className="text-muted">{time}</span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28">
      <HeroScene />
      <div className="mx-auto grid w-full max-w-6xl gap-10 pb-24 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-2">
            <LiveBadge />
            <div>
              <TypingText />
            </div>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl flex flex-col gap-1">
            <StaggerReveal text={profile.name} />
            <span className="block text-gradient">
              <StaggerReveal text="Full Stack Developer" delay={0.4} />
            </span>
          </h1>
          <p className="text-lg text-muted sm:text-xl">{profile.headline}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:shadow-glow"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:shadow-glow"
              >
                Contact Me
              </a>
            </Magnetic>
          </div>
          <div className="flex items-center gap-4 text-muted mt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-text"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-text"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-text"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="glass relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="gradient-border flex h-40 w-40 items-center justify-center rounded-full p-[3px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0f19]">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-secondary text-3xl font-display text-white">
                SJ
              </div>
            </div>
          </motion.div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Portfolio Focus
            </p>
            <p className="mt-3 text-base text-text">
              Real-time systems, AI-guided workflows, and refined product
              experiences.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Stack
              </p>
              <p className="mt-2 text-sm text-text">React • Node • MongoDB</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Focus
              </p>
              <p className="mt-2 text-sm text-text">Collaboration tooling</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
