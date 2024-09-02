import React from 'react';
import { Float, useTexture } from '@react-three/drei';
import { Stand } from './Stand';

import Island from '../projects/island/Island';

function IslandStand() {
  return (
    <group position={[-15, 0, -20]}>
      <Stand />
      <Float>
        <group position={[0.1, 7.5, 0]} scale={0.75}>
          <Island />
        </group>
      </Float>
    </group>
  );
}

export default IslandStand;
