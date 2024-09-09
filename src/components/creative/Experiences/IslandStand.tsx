import React, { useState } from 'react';
import { Float, useTexture, Outlines } from '@react-three/drei';
import { Stand } from './Stand';

import Island from '../projects/island/Island';

function IslandStand() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      position={[-15, 0, -20]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group position={[0.1, 7.5, 0]} scale={0.75}>
          <Island />
        </group>
      </Float>
    </group>
  );
}

export default IslandStand;
