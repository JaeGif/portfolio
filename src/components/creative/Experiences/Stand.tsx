import * as THREE from 'three';
import React from 'react';
import { useGLTF, useTexture, Outlines } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
  };
  materials: {};
};

const marbleMaterial = new THREE.MeshStandardMaterial();

export function Stand({ hovered = false }: { hovered?: boolean }) {
  const { nodes } = useGLTF('/assets/creative/models/stand.glb') as GLTFResult;

  const { map, arm } = useTexture({
    map: '/assets/creative/textures/quartzite/Poliigon_StoneQuartzite_8060_BaseColor.jpg',
    arm: '/assets/creative/textures/quartzite/Poliigon_StoneQuartzite_8060_ORM.jpg',
  });

  marbleMaterial.map = map;
  marbleMaterial.aoMap =
    marbleMaterial.roughnessMap =
    marbleMaterial.metalnessMap =
      arm;

  return (
    <group name='stand' scale={2.5} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={marbleMaterial}
        position={[0, 0.305, 0]}
        scale={[1.057, 0.304, 1.057]}
      >
        {hovered && <Outlines thickness={0.05} color='lightblue' />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={marbleMaterial}
        position={[0, 0.944, 0]}
        scale={[0.78, 0.378, 0.78]}
      >
        {hovered && <Outlines thickness={0.05} color='lightblue' />}
      </mesh>
    </group>
  );
}

useGLTF.preload('/assets/creative/models/stand.glb');
