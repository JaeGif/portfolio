import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
// Shaders
import firefliesVertexShader from '../shaders/fireflies/vertex.glsl';
import firefliesFragmentShader from '../shaders/fireflies/fragment.glsl';
// R3F
import { extend, useFrame } from '@react-three/fiber';
// Drei
import { shaderMaterial } from '@react-three/drei';

function Fireflies() {
  // extend shader materials
  const FirefliesMaterial = shaderMaterial(
    {
      uPixelRatio: Math.min(window.devicePixelRatio, 2),
      uTime: 0,
    },
    firefliesVertexShader,
    firefliesFragmentShader
  );

  extend({ FirefliesMaterial });
  const firefliesRef = useRef<any>(null);

  const firefliesCount = 50;

  const { firefliesPositions, firefliesScale } = useMemo(() => {
    const firefliesPositions = new Float32Array(firefliesCount * 3);

    const firefliesScale = new Float32Array(firefliesCount);

    for (let i = 0; i < firefliesCount; i++) {
      firefliesPositions[i * 3 + 0] = (Math.random() - 0.5) * 8;
      firefliesPositions[i * 3 + 1] = Math.random() * 1.5 * 2;
      firefliesPositions[i * 3 + 2] = (Math.random() - 0.5) * 7;
      firefliesScale[i] = Math.random();
    }
    return { firefliesPositions, firefliesScale };
  }, [firefliesCount]);

  useFrame((state, delta) => {
    firefliesRef.current.uTime += delta;
  });
  return (
    <points>
      <bufferGeometry attach={'geometry'}>
        <bufferAttribute
          attach='attributes-position'
          count={firefliesPositions.length / 3}
          array={firefliesPositions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
        <bufferAttribute
          attach='attributes-aScale'
          count={firefliesScale.length}
          array={firefliesScale}
          itemSize={1}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      {/* @ts-ignore */}
      <firefliesMaterial
        ref={firefliesRef}
        transparent
        attach={'material'}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default Fireflies;
