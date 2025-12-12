import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

// Auto-rotating container for the Room model
const AutoRotatingRoom = ({ isMobile }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && isMobile) {
      // Very subtle auto-rotation on mobile only
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      scale={isMobile ? 0.9 : 0.7}
      position={isMobile ? [.8, -1.4, 0] : [.5, -1.1, 0]}
      rotation={[0, Math.PI / 6, 0]}
    >
      <Room />
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls for mobile-friendly interaction */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={false} // Disables zoom
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        touches={{
          ONE: null, // Disable one-finger rotation (allows scrolling)
          TWO: isMobile ? 2 : 0 // Two-finger rotation on mobile, normal on desktop
        }}
        mouseButtons={{
          LEFT: 0, // Normal mouse rotation on desktop
          MIDDLE: null,
          RIGHT: null
        }}
        enableRotate={true}
        rotateSpeed={isMobile ? 0.5 : 1} // Slower rotation on mobile
        enableDamping={true} // Smooth rotation
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <AutoRotatingRoom isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
