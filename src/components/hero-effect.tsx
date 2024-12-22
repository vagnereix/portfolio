"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() =>
  import("./model").then(({ Model }) => ({ default: Model }))
);

export function HeroEffect() {
  return (
    <Canvas className="w-full">
      <Environment preset="studio" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        maxZoom={0.2}
        enableZoom={false}
      />

      <group scale={1} rotation={[0, 0, 0]} position={[0, -1.45, 0]}>
        <Model />
      </group>
    </Canvas>
  );
}
