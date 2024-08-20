import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
  };
  materials: {};
};

const marbleMaterial = new THREE.MeshStandardMaterial();

export function Stand({
  map,
  arm,
}: {
  map: THREE.Texture;
  arm: THREE.Texture;
}) {
  const { nodes, materials } = useGLTF(
    '/assets/creative/models/stand.glb'
  ) as GLTFResult;
  marbleMaterial.map = map;
  marbleMaterial.aoMap =
    marbleMaterial.roughnessMap =
    marbleMaterial.metalnessMap =
      arm;

  return (
    <group scale={2} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={marbleMaterial}
        position={[0, 0.305, 0]}
        scale={[1.057, 0.304, 1.057]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={marbleMaterial}
        position={[0, 0.944, 0]}
        scale={[0.78, 0.378, 0.78]}
      />
    </group>
  );
}

useGLTF.preload('/assets/creative/models/stand.glb');
