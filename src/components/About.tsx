"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

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
                {profile.name} is a {profile.role} who builds real-time
                collaboration tools, AI-guided workflows, and scalable
                full-stack platforms. I focus on measurable impact, from latency
                reduction to smoother onboarding and safer data handling.
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
          <div className="gradient-border flex h-full flex-col justify-between rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-secondary text-2xl font-display text-white">
                SJ
              </div>
              <div>
                <p className="text-sm font-semibold text-text">
                  {profile.name}
                </p>
                <p className="text-xs text-muted">{profile.role}</p>
                <p className="text-xs text-muted">Open to collaboration</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-muted">
              <div className="flex items-center justify-between">
                <span>Education</span>
                <span className="text-text">B.Tech CSE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Certifications</span>
                <span className="text-text">Oracle, NPTEL</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Availability</span>
                <span className="text-text">Internships, Freelance</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:shadow-glow"
              >
                Start a project
              </a>
              <a
                href="/Sai_Jayanth_Pothala_CV.pdf"
                download
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition hover:shadow-glow"
              >
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
