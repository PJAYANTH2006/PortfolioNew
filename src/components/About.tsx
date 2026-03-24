"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import TechOrbit from "./TechOrbit";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeader
            title="Product-first engineering, end to end"
            subtitle="I blend UX clarity with reliable backend systems to ship experiences that feel fast, collaborative, and trustworthy."
          />
          <Reveal>
            <div className="glass rounded-3xl p-6">
              <p className="text-sm text-muted">
                I am a {profile.role} who builds real-time
                collaboration tools, AI-guided workflows, and scalable
                full-stack platforms. I focus on delivering measurable impact—from latency
                reduction to smoother onboarding and highly secure data handling.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-text">
                  Real-time systems
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-text">
                  AI-assisted UX
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-text">
                  Performance tuning
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-text">
                  Secure auth flows
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Now
                </p>
                <p className="mt-2 text-sm text-text">
                  Building collaborative products with real-time sync and
                  WebRTC.
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Previously
                </p>
                <p className="mt-2 text-sm text-text">
                  Optimized API performance by 30% during internship.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative flex h-full flex-col items-center justify-center p-4 sm:p-8 overflow-visible">
            <div className="mb-8 relative z-20">
              <p className="text-xs uppercase tracking-[0.4em] text-muted text-center font-semibold">
                Core Stack
              </p>
            </div>
            
            <TechOrbit />

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 relative z-20">
              <p className="text-xs font-semibold text-muted text-center uppercase tracking-widest">Open to opportunities</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/SaiJayanth_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-secondary hover:scale-105"
                >
                  View CV
                </a>
                <a
                  href="/SaiJayanth_CV.pdf"
                  download
                  className="rounded-full border border-border/50 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-text transition hover:bg-white/10 hover:border-border hover:scale-105"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
