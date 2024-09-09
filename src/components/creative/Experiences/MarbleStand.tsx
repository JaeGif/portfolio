import React, { useState } from 'react';
import { Stand } from './Stand';
import { Float } from '@react-three/drei';
import Marble from './Marble';

function MarbleStand() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      rotation={[0, -Math.PI / 4, 0]}
      position={[25, 0, -10]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group
          rotation={[0, -Math.PI / 2, 0]}
          position={[-3.5, 5.5, 0]}
          scale={0.6}
        >
          <Marble />
        </group>
      </Float>
    </group>
  );
}

export default MarbleStand;
