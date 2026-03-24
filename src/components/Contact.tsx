"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, CheckCircle2, Github, Linkedin, Globe, Phone } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { profile, socialLinks } from "@/lib/data";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') setCopiedEmail(true);
    if (type === 'phone') setCopiedPhone(true);
    setTimeout(() => {
      if (type === 'email') setCopiedEmail(false);
      if (type === 'phone') setCopiedPhone(false);
    }, 2000);
  };

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
          <div className="mt-8 space-y-6 text-sm text-text">
            {/* Email Copy Micro-interaction */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Email Address</p>
              <Magnetic strength={15}>
                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="group relative flex w-full items-center justify-between rounded-xl border border-border bg-white/5 p-4 transition duration-300 hover:bg-brand/10 hover:border-brand/40"
                >
                  <span className={`font-medium transition-colors ${copiedEmail ? "text-brand" : "text-text"}`}>
                    {copiedEmail ? "Copied to clipboard!" : profile.email}
                  </span>
                  <div className="relative h-5 w-5">
                    <AnimatePresence mode="wait">
                      {copiedEmail ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <CheckCircle2 size={20} className="text-brand" />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Copy size={20} className="text-muted transition group-hover:text-brand" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </Magnetic>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Direct Line</p>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/5 p-4">
                <Phone size={18} className="text-muted" />
                <span className="font-medium text-text">{profile.phone}</span>
              </div>
            </div>

            {/* Social Links magnetic cluster */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Socials</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Magnetic key={link.label} strength={30}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white/5 transition duration-300 hover:bg-brand hover:border-brand hover:shadow-glow"
                      title={link.label}
                    >
                      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        {link.label === "GitHub" && <Github size={24} className="text-muted group-hover:text-white" />}
                        {link.label === "LinkedIn" && <Linkedin size={24} className="text-muted group-hover:text-white" />}
                        {link.label === "Portfolio" && <Globe size={24} className="text-muted group-hover:text-white" />}
                      </motion.div>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
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
            <Magnetic strength={10}>
              <button
                type="submit"
                className="w-full relative overflow-hidden rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:shadow-glow hover:bg-brand-secondary disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white" />
                      <span>Preparing...</span>
                    </>
                  ) : (
                    "Send message"
                  )}
                </div>
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </Section>
  );
}
