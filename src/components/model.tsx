import { useGLTF } from '@react-three/drei';

useGLTF.preload('/glb/golden_globe_decoration.glb');

export function Model() {
  const { scene } = useGLTF('/glb/golden_globe_decoration.glb');

  return <primitive object={scene} />;
}
