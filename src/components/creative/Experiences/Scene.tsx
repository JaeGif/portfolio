import React from 'react';

import Floor from './Floor';
import IslandStand from './IslandStand';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';
import BoatStand from './BoatStand';
import MarbleStand from './MarbleStand';

function Scene() {
  return (
    <>
      <group>
        {/*         <IslandStand />
        <TrophyStand />
        <ProceduralTerrainStand /> */}
        <BoatStand />
        {/*         <MarbleStand />
         */}{' '}
      </group>
      <Floor />
    </>
  );
}

export default Scene;
