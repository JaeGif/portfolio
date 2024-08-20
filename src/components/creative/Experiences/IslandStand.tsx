import React from 'react';
import { Float, useTexture } from '@react-three/drei';
import { Stand } from './Stand';

import Island from '../projects/island/Island';

function IslandStand() {
  return (
    <group>
      <Stand />
      <Float>
        <group position={[0.1, 6, 0]} scale={0.5}>
          <Island />
        </group>
      </Float>
    </group>
  );
}

export default IslandStand;
