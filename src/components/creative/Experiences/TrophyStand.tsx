import React, { useState } from 'react';
import Trophy from './Trophy';
import { Float } from '@react-three/drei';
function TrophyStand() {
  return (
    <group position={[0, 3, -25]}>
      <Float floatIntensity={3} speed={3} rotationIntensity={0}>
        <Trophy />
      </Float>
    </group>
  );
}

export default TrophyStand;
