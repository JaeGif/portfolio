import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
// Shaders
import waterfallVertexShader from '../shaders/waterfall/vertex.glsl';
import waterfallFragmentShader from '../shaders/waterfall/fragment.glsl';

import waterfallWaveVertexShader from '../shaders/waterfallWaves/vertex.glsl';
import waterfallWaveFragmentShader from '../shaders/waterfallWaves/fragment.glsl';
// R3F
import { extend, useFrame } from '@react-three/fiber';
// Drei
import { shaderMaterial } from '@react-three/drei';
import { GLTFNodesMaterials } from '../types';
function Waterfall({ nodes, materials }: GLTFNodesMaterials) {
  // extend shader materials
  const WaterfallMaterial = shaderMaterial(
    {
      uPixelRatio: Math.min(window.devicePixelRatio, 2),
      uTime: 0,
    },
    waterfallVertexShader,
    waterfallFragmentShader
  );

  extend({ WaterfallMaterial });

  const waterfallRef = useRef<any>(null);
  const waterFallWaveRef = useRef<any>(null);

  const waterfallCount = 100;

  const { waterfallPositions, waterfallScale } = useMemo(() => {
    const waterfallPositions = new Float32Array(waterfallCount * 3);

    const waterfallScale = new Float32Array(waterfallCount);

    for (let i = 0; i < waterfallCount; i++) {
      waterfallPositions[i * 3 + 0] = Math.random() - 0.5 - 3;
      waterfallPositions[i * 3 + 1] = Math.random() * 2 - 1;
      waterfallPositions[i * 3 + 2] = 2;
      waterfallScale[i] = Math.random() * 3;
    }
    return { waterfallPositions, waterfallScale };
  }, [waterfallCount]);

  useFrame((state, delta) => {
    waterfallRef.current.uTime += delta;
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
      <points rotation={[0, 0, 0]}>
        <bufferGeometry attach={'geometry'}>
          <bufferAttribute
            attach='attributes-position'
            count={waterfallPositions.length / 3}
            array={waterfallPositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach='attributes-aScale'
            count={waterfallScale.length}
            array={waterfallScale}
            itemSize={1}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        {/* @ts-ignore */}
        <waterfallMaterial
          ref={waterfallRef}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default Waterfall;
