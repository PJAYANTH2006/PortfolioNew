"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"]
  });
  
  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Glow effect intensifies as scroll completes
  const trackGlow = useTransform(scrollYProgress, [0, 1], ["0px 0px 5px rgba(59,130,246,0.2)", "0px 0px 20px rgba(59,130,246,0.8)"]);

  return (
    <Section id="education">
      <SectionHeader
        title="Education"
        subtitle="Academic foundation grounding the engineering craft."
      />
      <div 
        ref={containerRef} 
        className="relative mx-auto max-w-2xl px-4 sm:px-10 mt-10 liquid-float-alt-1"
      >
        {/* Core Timeline Track Base */}
        <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-border/40 sm:left-[33px]" />
        
        {/* Glowing Scroll-Synced Overlay Line */}
        <motion.div 
           style={{ height: trackHeight, boxShadow: trackGlow }}
           className="absolute left-[23px] top-0 w-[2px] bg-brand shadow-[0_0_15px_rgba(var(--brand),0.5)] sm:left-[33px] origin-top rounded-full z-10" 
        />

        <div className="space-y-12">
          {education.map((item, index) => (
             <div key={item.school} className="relative pl-10 sm:pl-16">
               {/* Fixed Timeline Node Points */}
               <div className="absolute left-[18px] top-2 h-3.5 w-3.5 rounded-full border-[3px] border-brand bg-[#0b0f19] sm:left-[28px] z-20 shadow-[0_0_10px_rgba(var(--brand),0.5)]" />
               
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-10% 0px" }}
                 transition={{ delay: index * 0.1 }}
                 className="glass rounded-2xl p-6 transition duration-300 hover:shadow-glow hover:-translate-y-1"
               >
                 <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand">
                   {item.period}
                 </p>
                 <h3 className="mt-3 font-display text-xl font-medium text-text">
                   {item.degree}
                 </h3>
                 <p className="mt-2 text-sm text-text/90 font-medium">{item.school}</p>
                 {"detail" in item && item.detail ? (
                   <p className="mt-3 text-xs text-muted leading-relaxed relative before:content-[''] before:absolute before:-left-3 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-brand/40 before:rounded-full pl-3">{item.detail}</p>
                 ) : null}
               </motion.div>
             </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
