import React from 'react';
import Island from '../projects/island/Island';

import Floor from './Floor';
import { useTexture } from '@react-three/drei';
import IslandStand from './IslandStand';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';

function Scene() {
  return (
    <>
      <group>
        {/*         <IslandStand />
        <TrophyStand /> */}
        <ProceduralTerrainStand />
      </group>
      <Floor />
    </>
  );
}

export default Scene;
