import React, { useState } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import Boat from './Boat';
function BoatStand() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      rotation={[0, Math.PI / 4, 0]}
      position={[-25, 0, -10]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group
          rotation={[0, Math.PI / 2, 0]}
          position={[-0.2, 6, 0.1]}
          scale={0.5}
        >
          <Boat />
        </group>
      </Float>
    </group>
  );
}

export default BoatStand;
