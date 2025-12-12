import { useGLTF } from "@react-three/drei";

export function Cockpit(props) {
  const { nodes, materials } = useGLTF("/cockpit.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes.Root || Object.values(nodes)[0]} />
    </group>
  );
}

useGLTF.preload("/cockpit.glb");

export default Cockpit;