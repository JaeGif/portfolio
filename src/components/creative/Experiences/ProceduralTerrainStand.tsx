import React, { useState } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';

import ProceduralTerrain from '../projects/procedural/ProceduralTerrain';

function ProceduralTerrainStand() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      position={[15, 0, -20]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group position={[0.1, 5, 0]} scale={0.5}>
          <ProceduralTerrain />
        </group>
      </Float>
    </group>
  );
}

export default ProceduralTerrainStand;
