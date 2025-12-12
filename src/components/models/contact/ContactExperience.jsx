import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Cockpit from "./Cockpit";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 2], fov: 25 }}>
      <ambientLight intensity={0.4} color="#ffffff" />

      <directionalLight position={[3, 4, 2]} intensity={1.5} color="#ffffff" />

      <directionalLight
        position={[0, 5, 3]}
        castShadow
        intensity={1.2}
        color="#e6f3ff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      <group scale={0.5} position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <Cockpit />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
