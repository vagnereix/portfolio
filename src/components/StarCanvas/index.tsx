'use client';

import { Canvas } from '@react-three/fiber';
import { StarBackground } from './StarBackground';

const StarsCanvas = () => (
  <div className='w-full h-auto fixed inset-0 -z-[1]'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
