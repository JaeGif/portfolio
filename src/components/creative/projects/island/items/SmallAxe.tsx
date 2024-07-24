import React from 'react';
import { GLTFNodesMaterials } from '../types';

function SmallAxe({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='handle'
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials.wood}
        position={[1.25388, 0.16178, 1.10747]}
        rotation={[2.51797, 1.19332, -2.22488]}
      />
      <mesh
        name='head'
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.axeBite}
        position={[1.25388, 0.16178, 1.10747]}
        rotation={[2.51797, 1.19332, -2.22488]}
      />
    </>
  );
}

export default SmallAxe;
