import React from 'react';
import { GLTFNodesMaterials } from '../types';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function Ground({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='grass'
        castShadow
        receiveShadow
        geometry={nodes.grass.geometry}
        material={materials.grass}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='pondWalls'
        castShadow
        receiveShadow
        geometry={nodes.pondWalls.geometry}
        material={materials.dirt}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='dirt'
        castShadow
        receiveShadow
        geometry={nodes.dirt.geometry}
        material={materials.path}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='crystals'
        castShadow
        receiveShadow
        geometry={nodes.crystals.geometry}
        material={materials['blue gemstone']}
        position={[0, -1.87264, 0]}
      />
    </>
  );
}

export default Ground;
