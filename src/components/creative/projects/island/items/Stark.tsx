import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Stark({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <group
        name='axe_handle'
        position={[-0.49299, 4.45524, -0.72292]}
        rotation={[2.84892, -0.01416, 0.13646]}
      >
        <mesh
          name='Cylinder'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.gilding}
        />
        <mesh
          name='Cylinder_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.wood}
        />
      </group>
      <group
        name='large_axe_bite'
        position={[-2.30709, -2.45862, 1.40771]}
        rotation={[2.76138, 0.55694, 0.16094]}
      >
        <mesh
          name='Cylinder008'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['axe head base']}
        />
        <mesh
          name='Cylinder008_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['starks axe bite']}
        />
      </group>
      <group
        name='small_axe_bite'
        position={[-0.74219, -2.68858, 1.44026]}
        rotation={[-0.38452, -0.57911, 2.97834]}
        scale={0.9715}
      >
        <mesh
          name='Cylinder009'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['axe head base']}
        />
        <mesh
          name='Cylinder009_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials['starks axe bite']}
        />
      </group>
    </>
  );
}

export default Stark;
