import React, { useRef } from 'react';
import { GLTFNodesMaterials } from '../types';
import FloatingRocks from './FloatingRocks';

// R3F
import { extend, useFrame } from '@react-three/fiber';
// Drei
import { shaderMaterial } from '@react-three/drei';
// Shaders
import portalVertexShader from '../shaders/portal/vertex.glsl';
import portalFragmentShader from '../shaders/portal/fragment.glsl';
// portal extend shaderMaterials
const PortalMaterial = shaderMaterial(
  { uTime: 0 },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

function Portal({ nodes, materials }: GLTFNodesMaterials) {
  const portalLightRef = useRef<any>(null);
  useFrame((state, delta) => {
    portalLightRef.current.uTime += delta;
  });

  return (
    <>
      <mesh
        name='Circle'
        geometry={nodes.Circle.geometry}
        position={[0.08775, 0.99519, -0.42208]}
        rotation={nodes.Circle.rotation}
        scale={nodes.Circle.scale}
      >
        {/* @ts-ignore */}
        <portalMaterial ref={portalLightRef} transparent side={2} />
      </mesh>
      <FloatingRocks nodes={nodes} materials={materials} />
    </>
  );
}

export default Portal;
