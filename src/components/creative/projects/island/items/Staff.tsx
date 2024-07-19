import React from 'react';
import { GLTFNodesMaterials } from './types';

function Staff({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <group
        name='crescent'
        position={[0.83757, 0.21618, 2.24492]}
        rotation={[-1.39063, -0.05106, -1.09074]}
        scale={0.2254}
      >
        <mesh
          name='Cylinder014'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials['staff gold']}
        />
        <mesh
          name='Cylinder014_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials['red gemstone']}
        />
      </group>
      <group
        name='staff'
        position={[0.83902, 0.21577, 2.24755]}
        rotation={[-1.39063, -0.05106, -1.09074]}
        scale={0.2254}
      >
        <mesh
          name='Cylinder013'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['staff wood']}
        />
        <mesh
          name='Cylinder013_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials['staff gold']}
        />
      </group>
    </>
  );
}

export default Staff;
