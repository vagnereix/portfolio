// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import type { Points as P } from 'three';

export function StarBackground() {
  const ref = useRef(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    const { current } = ref as unknown as { current: P };
    if (!current) return;

    current.rotation.x -= delta / 10;

    current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#fff'
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
}
