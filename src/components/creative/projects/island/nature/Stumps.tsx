import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Stumps({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <group name='axeStump' position={[4.79118, 0.00626, -0.37176]}>
        <mesh
          name='Cylinder002'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder002_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group name='staffStump' position={[4.81168, 0.00013, 0.67319]}>
        <mesh
          name='Cylinder001'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder001_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped1'
        position={[1.71186, 0.05354, 0.77196]}
        rotation={[1.0217, -0.25684, 0.00051]}
      >
        <mesh
          name='Cylinder004'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder004_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped2'
        position={[1.49876, -0.0012, 0.67194]}
        rotation={[1.5729, -0.38678, 0.00079]}
      >
        <mesh
          name='Cylinder005'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder005_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped3'
        position={[1.66219, -0.0012, 0.98882]}
        rotation={[1.66926, -0.27938, 0.39672]}
      >
        <mesh
          name='Cylinder006'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder006_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped4'
        position={[1.45647, -0.0012, 1.22058]}
        rotation={[-3.1354, -0.0127, -1.59148]}
      >
        <mesh
          name='Cylinder007'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder007_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.innerWood}
        />
      </group>
    </>
  );
}

export default Stumps;
