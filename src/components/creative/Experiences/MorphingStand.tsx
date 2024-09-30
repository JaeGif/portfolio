import React from 'react';
import { Stand } from './Stand';
import { Float } from '@react-three/drei';
import Morphing from './Morphing';

function MorphingStand() {
  return (
    <group rotation={[0, -Math.PI / 4, 0]} position={[25, 0, -10]}>
      <Stand />
      <Float>
        <group position={[0.1, 7.5, 0]} scale={0.75}>
          <Morphing />
        </group>
      </Float>
    </group>
  );
}

export default MorphingStand;
