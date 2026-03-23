"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.05 * (-targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.6, 120, 120]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            roughness={0.2}
            metalness={0.6}
            distort={0.35}
            speed={1.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.6]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
