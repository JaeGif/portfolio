import React from 'react';
import Island from '../projects/island/Island';

import Floor from './Floor';
import { useTexture } from '@react-three/drei';
import IslandStand from './IslandStand';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';
import { Stand } from './Stand';
import BoatStand from './BoatStand';

function Scene() {
  return (
    <>
      <group>
        {/*    <IslandStand />
        <TrophyStand />
        <ProceduralTerrainStand /> */}
        <BoatStand />
      </group>
      <Floor />
    </>
  );
}

export default Scene;
