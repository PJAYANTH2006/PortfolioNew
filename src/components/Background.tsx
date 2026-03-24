"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.08]" />
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />
      <motion.div
        className="absolute left-[10%] top-[8%] h-[28rem] w-[28rem] bg-brand/20 blur-3xl"
        animate={{ 
          y: [0, 40, 0], 
          opacity: [0.6, 1, 0.6],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[5%] h-[25rem] w-[25rem] bg-brand-secondary/20 blur-3xl"
        animate={{ 
          y: [0, -50, 0], 
          x: [0, -30, 0],
          opacity: [0.6, 0.9, 0.6],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[2%] left-[30%] h-[30rem] w-[30rem] bg-brand-accent/15 blur-3xl"
        animate={{ 
          y: [0, 30, 0], 
          opacity: [0.5, 0.8, 0.5],
          borderRadius: [
            "30% 70% 50% 50% / 50% 30% 70% 50%",
            "50% 50% 30% 70% / 30% 70% 50% 50%",
            "30% 70% 50% 50% / 50% 30% 70% 50%"
          ]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 40% 80%, rgba(34,211,238,0.12), transparent 45%)",
          backgroundSize: "120% 120%",
        }}
      />
    </div>
  );
}
