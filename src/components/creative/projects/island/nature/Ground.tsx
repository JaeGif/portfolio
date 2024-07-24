import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Ground({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <group position={[0, -1.87264, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials.grass}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube058_1.geometry}
          material={materials.dirt}
        />
      </group>
      <mesh
        name='pondWalls'
        receiveShadow
        geometry={nodes.pondWalls.geometry}
        material={materials.dirt}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='dirt'
        receiveShadow
        geometry={nodes.dirt.geometry}
        material={materials.path}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='crystals'
        receiveShadow
        geometry={nodes.crystals.geometry}
        material={materials['blue gemstone']}
        position={[0, -1.87264, 0]}
      />
    </>
  );
}

export default Ground;
