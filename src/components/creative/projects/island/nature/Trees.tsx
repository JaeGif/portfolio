import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Trees({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='tree'
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={materials['tree wood']}
        position={[-0.06378, 0.99981, 0.01199]}
      />
      <mesh
        name='protruding_roots'
        castShadow
        receiveShadow
        geometry={nodes.protruding_roots.geometry}
        material={materials.roots}
        position={[-1.06492, -1.1637, -3.8598]}
      />
    </>
  );
}

export default Trees;
