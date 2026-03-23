"use client";

import { useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { profile, socialLinks } from "@/lib/data";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setLoading(false);
  };

  return (
    <Section id="contact">
      <SectionHeader
        title="Let’s build something memorable"
        subtitle="Open to internships, freelance builds, and collaborative product experiments."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="glass rounded-3xl p-6">
          <p className="text-sm text-muted">
            Reach out directly through email or connect on socials. I respond
            quickly and love collaborating on ambitious builds.
          </p>
          <div className="mt-6 space-y-3 text-sm text-text">
            <p>Email: {profile.email}</p>
            <p>Mobile: {profile.phone}</p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-muted transition hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-6"
        >
          <div className="grid gap-4">
            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-brand/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-brand/40"
            />
            <textarea
              name="message"
              placeholder="Tell me about the project..."
              rows={5}
              required
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-brand/40"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:shadow-glow"
              disabled={loading}
            >
              {loading ? "Preparing..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
