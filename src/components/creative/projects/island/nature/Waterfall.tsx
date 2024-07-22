import React, { useRef, useMemo } from 'react';
import { GLTFNodesMaterials } from '../types';
import * as THREE from 'three';

// Shaders
import waterfallWaveVertexShader from '../shaders/waterfallWaves/vertex.glsl';
import waterfallWaveFragmentShader from '../shaders/waterfallWaves/fragment.glsl';

import sprayVertexShader from '../shaders/spray/vertex.glsl';
import sprayFragmentShader from '../shaders/spray/fragment.glsl';
// R3F
import { useFrame, extend } from '@react-three/fiber';
// Drei
import { shaderMaterial, useTexture } from '@react-three/drei';

function Waterfall({ nodes, materials }: GLTFNodesMaterials) {
  // extend shader materials
  const particleTexture = useTexture('/assets/creative/textures/particle.png');

  const SprayMaterial = shaderMaterial(
    {
      uPixelRatio: Math.min(window.devicePixelRatio, 2),
      uTime: 0,
      uTexture: particleTexture,
    },
    sprayVertexShader,
    sprayFragmentShader
  );

  extend({ SprayMaterial });
  const sprayRef = useRef<any>(null);

  const sprayCount = 200;

  const { sprayPositions, sprayScale } = useMemo(() => {
    const sprayPositions = new Float32Array(sprayCount * 3);

    const sprayScale = new Float32Array(sprayCount);

    for (let i = 0; i < sprayCount; i++) {
      sprayPositions[i * 3 + 0] = Math.random() * 0.4 - 0.5;
      sprayPositions[i * 3 + 1] = Math.random() * 0.4;
      sprayPositions[i * 3 + 2] = Math.random() - 0.5;
      sprayScale[i] = Math.random();
    }
    return { sprayPositions, sprayScale };
  }, [sprayCount]);

  useFrame((state, delta) => {
    sprayRef.current.uTime += delta;
  });
  const waterFallRef = useRef<any>(null);

  useFrame((state, delta) => {
    waterFallRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <>
      <group>
        <points
          position={[-2, -3.5, 2.5]}
          rotation={[0.00754, 0.76818, -0.01133]}
        >
          <bufferGeometry attach={'geometry'}>
            <bufferAttribute
              attach='attributes-position'
              count={sprayPositions.length / 3}
              array={sprayPositions}
              itemSize={3}
              usage={THREE.DynamicDrawUsage}
            />
            <bufferAttribute
              attach='attributes-aScale'
              count={sprayScale.length}
              array={sprayScale}
              itemSize={1}
              usage={THREE.DynamicDrawUsage}
            />
          </bufferGeometry>
          {/* @ts-ignore */}
          <sprayMaterial
            depthWrite={false}
            transparent
            ref={sprayRef}
            attach={'material'}
          />
        </points>
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
      </group>
    </>
  );
}

export default Waterfall;
