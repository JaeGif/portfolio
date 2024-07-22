import React, { useRef } from 'react';
// Shaders
import waterfallWaveVertexShader from '../shaders/waterfallWaves/vertex.glsl';
import waterfallWaveFragmentShader from '../shaders/waterfallWaves/fragment.glsl';
// R3F
import { useFrame } from '@react-three/fiber';
// Drei
import { GLTFNodesMaterials } from '../types';
function Waterfall({ nodes, materials }: GLTFNodesMaterials) {
  const waterFallRef = useRef<any>(null);

  useFrame((state, delta) => {
    waterFallRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <>
      <mesh
        name='water_surface'
        castShadow
        receiveShadow
        geometry={nodes.water_surface.geometry}
        position={[-1.54113, -0.13857, 1.71592]}
        rotation={[0.00754, 0.76818, -0.01133]}
        scale={[0.86721, 0.91915, 1.41586]}
      >
        <shaderMaterial
          ref={waterFallRef}
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
