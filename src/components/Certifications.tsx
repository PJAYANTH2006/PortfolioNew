"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { certifications } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { ZoomIn } from "lucide-react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Section id="certifications">
        <SectionHeader
          title="Certifications"
          subtitle="Learning track progress and ongoing upskilling."
        />
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {certifications.map((cert) => (
            <div 
              key={cert.title} 
              className="glass group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-glow min-h-[160px]"
              onClick={() => setSelectedImage((cert as any).image)}
            >
              {(cert as any).image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={(cert as any).image} 
                    alt={`${cert.title} preview`} 
                    fill 
                    className="object-cover opacity-20 transition duration-700 group-hover:opacity-40 group-hover:scale-105" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/70 to-[#0b0f19]/30" />
                </div>
              )}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      {cert.issuer}
                    </p>
                    <div className="opacity-0 transition-opacity bg-black/40 rounded-full p-1.5 text-white backdrop-blur-md group-hover:opacity-100">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                  <h3 className="mt-2 font-display text-xl text-text">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{cert.note}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-muted backdrop-blur-md">
                    {cert.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <ImageModal src={selectedImage} alt="Certificate view" onClose={() => setSelectedImage(null)} />
    </>
  );
}
