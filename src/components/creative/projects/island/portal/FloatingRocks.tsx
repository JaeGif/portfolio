import React from 'react';
import { GLTFNodesMaterials } from '../types';
import { Float } from '@react-three/drei';

function FloatingRocks({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float1'
          castShadow
          receiveShadow
          geometry={nodes.float1.geometry}
          material={nodes.float1.material}
          position={[-0.20177, 0.86323, -1.59856]}
        />
      </Float>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float2'
          castShadow
          receiveShadow
          geometry={nodes.float2.geometry}
          material={nodes.float2.material}
          position={[-0.00957, 1.30075, -1.83003]}
          rotation={[-0.00692, 0.02286, 0.09332]}
        />
      </Float>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float5'
          castShadow
          receiveShadow
          geometry={nodes.float5.geometry}
          material={nodes.float5.material}
          position={[0.08702, 0.94411, -1.53629]}
        />
      </Float>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float4'
          castShadow
          receiveShadow
          geometry={nodes.float4.geometry}
          material={nodes.float4.material}
          position={[0.37968, 1.04557, -1.49171]}
        />
      </Float>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float3'
          castShadow
          receiveShadow
          geometry={nodes.float3.geometry}
          material={nodes.float3.material}
          position={[1.56252, 1.18291, -1.95205]}
        />
      </Float>
      <Float speed={1.5} floatIntensity={0.9} rotationIntensity={0.2}>
        <mesh
          name='float6'
          castShadow
          receiveShadow
          geometry={nodes.float6.geometry}
          material={nodes.float6.material}
          position={[-0.23783, 0.74407, -1.72631]}
          rotation={[0.00212, -0.00887, -0.04512]}
        />
      </Float>
    </>
  );
}

export default FloatingRocks;
