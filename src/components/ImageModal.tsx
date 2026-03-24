"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

type ImageModalProps = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!src) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handler);
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl glass"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition hover:bg-brand/80"
              aria-label="Close image modal"
            >
              <X size={24} />
            </button>
            <div className="relative h-[80vh] w-full bg-[#0b0f19]/50">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
