"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";
import {
  Braces,
  Blocks,
  Database,
  Code2,
  Cpu,
  Wrench,
  Terminal,
  Layout,
  Layers
} from "lucide-react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="flex justify-between items-center text-[13px] font-semibold tracking-wide">
        <span className="text-text group-hover:text-brand transition-colors duration-300">
          {name}
        </span>
        <span className="text-muted font-mono"><AnimatedNumber value={level} />%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.5, delay: 0.1 * index, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-brand to-brand-secondary rounded-full relative"
        >
          {/* Shimmer effect inside the bar */}
          <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills that power production"
        subtitle="Depth across languages, frameworks, and tools that keep shipping velocity high."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {/* Languages Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Languages</p>
              <Terminal size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-col gap-5">
              {skills.languages.map((item, index) => (
                <SkillBar key={item.name} name={item.name} level={item.level} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Frameworks Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Frameworks</p>
              <Layout size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-col gap-5">
              {skills.frameworks.map((item, index) => (
                <SkillBar key={item.name} name={item.name} level={item.level} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 transition-all hover:shadow-glow flex flex-col gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Tools / Platforms</p>
              <Layers size={18} className="text-brand opacity-80" />
            </div>
            <div className="flex flex-col gap-5">
              {skills.tools.map((item, index) => (
                <SkillBar key={item.name} name={item.name} level={item.level} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
