import React from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';

import ProceduralTerrain from '../projects/procedural/ProceduralTerrain';

function ProceduralTerrainStand() {
  return (
    <group position={[15, 0, -20]}>
      <Stand />
      <Float>
        <group position={[0.1, 6, 0]} scale={0.5}>
          <ProceduralTerrain />
        </group>
      </Float>
    </group>
  );
}

export default ProceduralTerrainStand;
