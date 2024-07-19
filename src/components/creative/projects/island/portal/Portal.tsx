import React from 'react';
import { GLTFNodesMaterials } from '../types';
import FloatingRocks from './FloatingRocks';

function Portal({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='Circle'
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0.08775, 0.99519, -0.42208]}
      />
      <FloatingRocks nodes={nodes} materials={materials} />
    </>
  );
}

export default Portal;
