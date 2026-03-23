"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.6]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
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
      </Canvas>
    </div>
  );
}
