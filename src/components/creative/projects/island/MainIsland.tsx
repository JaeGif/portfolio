import React from 'react';
import { useGLTF } from '@react-three/drei';
import {
  Bloom,
  ToneMapping,
  EffectComposer,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';
function MainIsland() {
  const fullScene = useGLTF('/assets/creative/models/portal.glb');

  console.log(fullScene.nodes);
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.001} intensity={0.2} />
      </EffectComposer>
      <mesh
        geometry={fullScene.nodes.grass.geometry}
        position={fullScene.nodes.grass.position}
        rotation={fullScene.nodes.grass.rotation}
        scale={fullScene.nodes.grass.scale}
      >
        <meshStandardMaterial color={'#95E761'} />
      </mesh>
      <mesh
        geometry={fullScene.nodes.dirt.geometry}
        position={fullScene.nodes.dirt.position}
        rotation={fullScene.nodes.dirt.rotation}
        scale={fullScene.nodes.dirt.scale}
      >
        <meshStandardMaterial color={'#51423C'} />
      </mesh>
      <mesh
        geometry={fullScene.nodes.pond.geometry}
        position={fullScene.nodes.pond.position}
        rotation={fullScene.nodes.pond.rotation}
        scale={fullScene.nodes.pond.scale}
      >
        <meshStandardMaterial color={'#538CE7'} />
      </mesh>
      <mesh
        geometry={fullScene.nodes.pondWalls.geometry}
        position={fullScene.nodes.pondWalls.position}
        rotation={fullScene.nodes.pondWalls.rotation}
        scale={fullScene.nodes.pondWalls.scale}
      >
        <meshStandardMaterial color={'#51423C'} />
      </mesh>
      <mesh
        geometry={fullScene.nodes.crystals.geometry}
        position={fullScene.nodes.crystals.position}
        rotation={fullScene.nodes.crystals.rotation}
        scale={fullScene.nodes.crystals.scale}
      >
        <meshPhysicalMaterial
          metalness={0.13}
          roughness={0.08}
          color={'#322CFF'}
          emissive={[0.06, 0.05, 2]}
          emissiveIntensity={5}
        />
      </mesh>
    </>
  );
}

export default MainIsland;
