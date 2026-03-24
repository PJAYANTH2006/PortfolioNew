"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { certifications } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { ZoomIn } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className, onClick }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-full z-50 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
        style={{ translateX: glareX, translateY: glareY }}
      />
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Section id="certifications">
        <SectionHeader
          title="Certifications"
          subtitle="Learning track progress and ongoing upskilling."
        />
        <div className="grid gap-6 md:grid-cols-2 mt-8 perspective-1000">
          {certifications.map((cert, index) => (
            <div key={cert.title} className={index % 3 === 0 ? "liquid-float" : index % 3 === 1 ? "liquid-float-alt-1" : "liquid-float-alt-2"}>
              <TiltCard 
                className="glass group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-shadow duration-300 hover:shadow-glow min-h-[160px] h-full"
                onClick={() => setSelectedImage((cert as any).image)}
              >
                {(cert as any).image && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={(cert as any).image} 
                      alt={`${cert.title} preview`} 
                      fill 
                      className="object-cover opacity-20 transition-all duration-700 group-hover:opacity-50 group-hover:scale-105" 
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/70 to-[#0b0f19]/30" />
                  </div>
                )}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted drop-shadow-md">
                        {cert.issuer}
                      </p>
                      <div className="opacity-0 transition-opacity bg-black/40 rounded-full p-1.5 text-white backdrop-blur-md group-hover:opacity-100">
                        <ZoomIn size={14} />
                      </div>
                    </div>
                    <h3 className="mt-2 font-display text-xl text-text drop-shadow-md">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-text/80 line-clamp-2 drop-shadow-sm">{cert.note}</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md border border-white/10 shadow-lg">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </Section>
      <ImageModal src={selectedImage} alt="Certificate view" onClose={() => setSelectedImage(null)} />
    </>
  );
}
