"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";
import { Terminal, Layout, Layers } from "lucide-react";

function AnimatedBadge({ name, index }: { name: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        opacity: { delay: index * 0.05, duration: 0.3 },
        scale: { delay: index * 0.05, duration: 0.3 },
        y: {
          repeat: Infinity,
          duration: 3 + (index % 3), // Varied duration for organic feel
          delay: index * 0.2,
          ease: "easeInOut",
        },
      }}
      className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text group cursor-default"
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              65px circle at ${x}px ${y}px,
              rgba(59, 130, 246, 0.4),
              transparent 80%
            )
          `,
        }}
      />
      <span className="relative z-10">{name}</span>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills that power production"
        subtitle="Depth across languages, frameworks, and tools that keep shipping velocity high."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ staggerChildren: 0.15 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {/* Languages Card */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Languages</p>
              <Terminal size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((item, index) => (
                <AnimatedBadge key={item.name} name={item.name} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Frameworks Card */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Frameworks</p>
              <Layout size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((item, index) => (
                <AnimatedBadge key={item.name} name={item.name} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Card */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Tools / Platforms</p>
              <Layers size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((item, index) => (
                <AnimatedBadge key={item.name} name={item.name} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
