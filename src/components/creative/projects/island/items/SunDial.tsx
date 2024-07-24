import React, { useRef } from 'react';
import { GLTFNodesMaterials } from '../types';

import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function SunDial({ nodes, materials }: GLTFNodesMaterials | any) {
  const sunRef = useRef<any>(null);

  const rotateYDegrees = (degrees: number) => {
    // rad = 180 / Math.PI
    // deg = Math.PI / 180
    const radians = (180 / Math.PI) * degrees;
    sunRef.current.rotation.y += radians;
  };

  useFrame((state, delta) => {
    rotateYDegrees(-0.00002);
  });

  return (
    <>
      <Float rotationIntensity={0.1} floatIntensity={0.5} speed={2.5}>
        <mesh
          ref={sunRef}
          name='sun'
          castShadow
          receiveShadow
          geometry={nodes.sun.geometry}
          material={nodes.sun.material}
          position={[-0.697, 0.35, 2.633]}
          rotation={[0, 0.551, 0]}
          scale={0.832}
        />
      </Float>
      <group name='sunDial' position={[-0.704, 0.097, 2.632]}>
        <mesh
          name='Cylinder003'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.rocks}
        />
        <mesh
          name='Cylinder003_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.axeBite}
        />
      </group>
    </>
  );
}

export default SunDial;
