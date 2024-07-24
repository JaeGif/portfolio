import React, { useEffect, useRef } from 'react';
import { GLTFNodesMaterials } from '../types';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// shaders
import grassVertexShader from '../shaders/grass/vertex.glsl';
import grassFragmentShader from '../shaders/grass/fragment.glsl';

function Grass({ nodes, materials }: GLTFNodesMaterials) {
  // send a shader
  const grassRef = useRef<any>(null);

  const GrassMaterial = shaderMaterial(
    {
      uPixelRatio: Math.min(window.devicePixelRatio, 2),
      uTime: 0,
    },
    grassVertexShader,
    grassFragmentShader
  );

  extend({ GrassMaterial });

  useFrame((state, delta) => {
    grassRef.current.uTime += delta;
  });

  return (
    <>
      <mesh
        name='grassPieces'
        castShadow
        receiveShadow
        geometry={nodes.grassPieces001.geometry}
        position={[-10.648, 0.686, -2.284]}
        rotation={[-1.612, 0, 0]}
      >
        {/* @ts-ignore */}
        <grassMaterial vertexColors ref={grassRef} />
      </mesh>
    </>
  );
}

export default Grass;
