import React from 'react';
import { Center, useGLTF, OrbitControls } from '@react-three/drei';
function Experience() {
  const fullScene = useGLTF('/assets/creative/models/portal-2_0.glb');
  console.log(fullScene);
  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <Center>
        <mesh
          geometry={fullScene.nodes.main_island.geometry}
          position={fullScene.nodes.main_island.position}
          rotation={fullScene.nodes.main_island.rotation}
          scale={fullScene.nodes.main_island.scale}
        ></mesh>
      </Center>
    </>
  );
}

export default Experience;
