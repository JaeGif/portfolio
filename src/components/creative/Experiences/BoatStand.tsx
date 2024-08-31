import React from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import Boat from './Boat';
function BoatStand() {
  return (
    <group rotation={[0, Math.PI / 4, 0]} position={[-25, 0, -10]}>
      <Stand />
      <Float>
        <group position={[0.1, 6, 0]} scale={0.5}>
          <Boat />
        </group>
      </Float>
    </group>
  );
}

export default BoatStand;
