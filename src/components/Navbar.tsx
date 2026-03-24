"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [active, setActive] = useState<string>("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-4 z-50",
        scrolled && "drop-shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
      )}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-full border border-border bg-surface/80 px-4 py-3 backdrop-blur-xl liquid-float-alt-1">
        <a
          href="#top"
          className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-text"
        >
          sai jayanth
        </a>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-text",
                active === item.href && "text-text"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Magnetic className="hidden md:block">
            <a
              href="/SaiJayanth_CV.pdf"
              className="inline-flex rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition hover:shadow-glow"
              download
            >
              Download CV
            </a>
          </Magnetic>
          <Magnetic className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:shadow-glow"
            >
              Let&apos;s Talk
            </a>
          </Magnetic>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
