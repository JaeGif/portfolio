import React from 'react';
import Trophy from './Trophy';
import { Stand } from './Stand';

function TrophyStand() {
  return (
    <group position={[0, 0, -25]}>
      <Trophy />
    </group>
  );
}

export default TrophyStand;
