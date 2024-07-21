import React, { useRef } from 'react';
// Shaders
import waterfallVertexShader from '../shaders/waterfall/vertex.glsl';
import waterfallFragmentShader from '../shaders/waterfall/fragment.glsl';

import waterfallWaveVertexShader from '../shaders/waterfallWaves/vertex.glsl';
import waterfallWaveFragmentShader from '../shaders/waterfallWaves/fragment.glsl';
// R3F
import { useFrame } from '@react-three/fiber';
// Drei
import { GLTFNodesMaterials } from '../types';
function Waterfall({ nodes, materials }: GLTFNodesMaterials) {
  const waterFallWaveRef = useRef<any>(null);

  useFrame((state, delta) => {
    waterFallWaveRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <>
      <mesh
        name='waterfall'
        castShadow
        receiveShadow
        geometry={nodes.waterfall.geometry}
        position={[-2.21782, 1.44812, 7.27783]}
        rotation={[-1.662, 0.05586, -0.5481]}
      >
        <shaderMaterial
          transparent
          depthWrite={false}
          ref={waterFallWaveRef}
          uniforms={{ uTime: { value: 0 } }}
          vertexShader={waterfallWaveVertexShader}
          fragmentShader={waterfallWaveFragmentShader}
          side={2}
        />
      </mesh>
    </>
  );
}

export default Waterfall;
