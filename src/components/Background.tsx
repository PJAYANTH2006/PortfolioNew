"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.08]" />
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />
      <motion.div
        className="absolute left-[10%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-[140px]"
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[5%] h-[22rem] w-[22rem] rounded-full bg-brand-secondary/25 blur-[140px]"
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[35%] h-[24rem] w-[24rem] rounded-full bg-brand-accent/20 blur-[160px]"
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
