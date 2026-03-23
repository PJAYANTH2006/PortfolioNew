"use client";

import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export default function ScrollSkew({ children, className }: { children: React.ReactNode, className?: string }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const skewY = useTransform(skewVelocity, [-1000, 1000], [2, -2]);

  return (
    <motion.div style={{ skewY, transformOrigin: "center" }} className={className}>
      {children}
    </motion.div>
  );
}
