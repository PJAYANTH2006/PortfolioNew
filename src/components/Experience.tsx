"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { ZoomIn } from "lucide-react";

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Section id="experience">
        <SectionHeader
          title="Internship experience"
          subtitle="Driving measurable impact while shipping production-grade features."
        />
        <div className="relative border-l border-border pl-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              className="relative mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-brand shadow-glow" />
              <div className="glass rounded-2xl p-6">
                {(item as any).image && (
                  <div 
                    className="group relative h-48 w-full overflow-hidden rounded-xl mb-6 cursor-pointer border border-border"
                    onClick={() => setSelectedImage((item as any).image)}
                  >
                    <Image 
                      src={(item as any).image} 
                      alt={`${item.company} certificate preview`} 
                      fill 
                      className="object-cover opacity-50 transition duration-700 group-hover:opacity-100 group-hover:scale-105" 
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-black/60 px-4 py-2 flex items-center gap-2 text-sm font-medium text-white backdrop-blur-md">
                        <ZoomIn size={16} /> View Certificate
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-text">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.summary.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <ImageModal src={selectedImage} alt="Certificate view" onClose={() => setSelectedImage(null)} />
    </>
  );
}
