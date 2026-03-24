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
          className="relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="relative flex h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 items-center justify-center rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden shadow-[0_0_40px_rgba(var(--brand),0.3)] border-[3px] border-brand/40"
            animate={{ 
              y: [0, -20, 0],
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
              ]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src="/images/passport.png" 
              alt="Professional Profile" 
              className="h-full w-full object-cover scale-[1.02]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
