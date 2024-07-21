import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Pond({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='water_surface'
        receiveShadow
        geometry={nodes.water_surface.geometry}
        material={materials.waterfall}
        position={[-1.54113, -0.12209, 1.71592]}
        rotation={[0.00754, 0.76818, -0.01133]}
        scale={[0.86721, 0.91915, 1.41586]}
      />
      <mesh
        name='pond'
        receiveShadow
        geometry={nodes.pond.geometry}
        material={materials.basin}
        position={[0, -1.87264, 0]}
      />
    </>
  );
}

export default Pond;
