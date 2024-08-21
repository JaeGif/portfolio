import React from 'react';
import Island from '../projects/island/Island';

import Floor from './Floor';
import { useTexture } from '@react-three/drei';
import IslandStand from './IslandStand';
import TrophyStand from './TrophyStand';

function Scene() {
  return (
    <>
      <group>
        <IslandStand />
        <TrophyStand />
      </group>
      <Floor />
    </>
  );
}

export default Scene;
