import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Path({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='rock4006'
        castShadow
        receiveShadow
        geometry={nodes.rock4006.geometry}
        material={materials.path}
        position={[-0.20084, 0.02072, -1.39367]}
        rotation={[0, 0, 0.01724]}
      />
      <mesh
        name='rock4007'
        castShadow
        receiveShadow
        geometry={nodes.rock4007.geometry}
        material={materials.path}
        position={[0.53364, 0.04279, -1.07499]}
      />
      <mesh
        name='rock4008'
        castShadow
        receiveShadow
        geometry={nodes.rock4008.geometry}
        material={materials.path}
        position={[0.31668, 0.03522, -0.11832]}
      />
      <mesh
        name='rock4009'
        castShadow
        receiveShadow
        geometry={nodes.rock4009.geometry}
        material={materials.path}
        position={[-0.05539, 0.02999, 1.03487]}
        rotation={[0, 0.90919, 0]}
      />
      <mesh
        name='rock4010'
        castShadow
        receiveShadow
        geometry={nodes.rock4010.geometry}
        material={materials.path}
        position={[-0.37477, 0.00392, 0.59111]}
      />
      <mesh
        name='rock4011'
        castShadow
        receiveShadow
        geometry={nodes.rock4011.geometry}
        material={materials.path}
        position={[-0.16752, -0.011, -0.32474]}
      />
      <mesh
        name='rock4012'
        castShadow
        receiveShadow
        geometry={nodes.rock4012.geometry}
        material={materials.path}
        position={[0.59076, 0.03224, 1.40255]}
      />
      <mesh
        name='rock3008'
        castShadow
        receiveShadow
        geometry={nodes.rock3008.geometry}
        material={materials.path}
        position={[0.31422, -0.04662, 0.4854]}
        rotation={[-Math.PI, 1.16295, -Math.PI]}
      />
      <mesh
        name='rock3009'
        castShadow
        receiveShadow
        geometry={nodes.rock3009.geometry}
        material={materials.path}
        position={[0.01466, 0.05046, 1.32974]}
        rotation={[-3.13739, 0.26961, 3.1258]}
      />
      <mesh
        name='rock4013'
        castShadow
        receiveShadow
        geometry={nodes.rock4013.geometry}
        material={materials.dirt}
        position={[-0.27602, 0.08247, 0.02332]}
        rotation={[0, 0.96551, 0.15463]}
      />
      <mesh
        name='rock4014'
        castShadow
        receiveShadow
        geometry={nodes.rock4014.geometry}
        material={materials.dirt}
        position={[0.02233, 0.08601, 0.19073]}
        rotation={[0, -0.72528, 0]}
      />
      <mesh
        name='rock4015'
        castShadow
        receiveShadow
        geometry={nodes.rock4015.geometry}
        material={materials.dirt}
        position={[-0.36288, 0.064, -0.44658]}
      />
      <mesh
        name='rock4016'
        castShadow
        receiveShadow
        geometry={nodes.rock4016.geometry}
        material={materials.dirt}
        position={[-0.28467, 0.07731, -0.89026]}
      />
      <mesh
        name='rock4017'
        castShadow
        receiveShadow
        geometry={nodes.rock4017.geometry}
        material={materials.dirt}
        position={[-0.3472, 0.04952, 0.95197]}
      />
    </>
  );
}

export default Path;
