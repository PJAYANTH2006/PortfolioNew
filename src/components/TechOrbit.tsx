"use client";

import { motion } from "framer-motion";
import { Database, Server, Component, GitBranch, Terminal } from "lucide-react";

const stack = [
  { name: "React", Icon: Component, color: "text-[#61DAFB]", radius: 100, duration: 15, delay: 0 },
  { name: "Node.js", Icon: Server, color: "text-[#339933]", radius: 140, duration: 25, delay: 0 },
  { name: "MongoDB", Icon: Database, color: "text-[#47A248]", radius: 90, duration: 12, delay: 0 },
  { name: "MySQL", Icon: Database, color: "text-[#4479A1]", radius: 150, duration: 20, delay: 0 },
  { name: "Git", Icon: GitBranch, color: "text-[#F05032]", radius: 110, duration: 18, delay: 0 },
];

export default function TechOrbit() {
  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden">
      {/* Central Glowing Icon */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-brand/50 bg-brand/10 shadow-[0_0_30px_rgba(var(--brand),0.3)] backdrop-blur-md">
        <Terminal className="text-brand h-8 w-8" />
      </div>

      {/* Orbit Rings Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-border" />
        <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-border" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-border" />
      </div>

      {/* Orbiting Stack Icons */}
      {stack.map((item, i) => {
        const startAngle = (360 / stack.length) * i;
        return (
          <motion.div
            key={item.name}
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [startAngle, startAngle + 360] }}
            transition={{
              repeat: Infinity,
              duration: item.duration,
              ease: "linear",
            }}
          >
            <div style={{ transform: `translateX(${item.radius}px)` }}>
              {/* Counter-rotate to keep icon upright */}
              <motion.div
                animate={{ rotate: [-startAngle, -(startAngle + 360)] }}
                transition={{
                  repeat: Infinity,
                  duration: item.duration,
                  ease: "linear",
                }}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-[#0b0f19] shadow-lg transition duration-300 hover:scale-110 cursor-pointer"
                title={item.name}
              >
                <item.Icon className={`h-5 w-5 ${item.color} saturate-50 transition duration-300 group-hover:saturate-100`} />
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 pointer-events-none">
                  {item.name}
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
