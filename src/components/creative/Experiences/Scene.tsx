import React, { Suspense } from 'react';

import Floor from './Floor';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';
import BoatStand from './BoatStand';
import MarbleStand from './MarbleStand';
import Island from '../projects/island/Island';

function Scene() {
  return (
    <>
      <group scale={0.075}>
        <TrophyStand />
        <ProceduralTerrainStand />
        <BoatStand />
        <MarbleStand />
      </group>
      <Island />
    </>
  );
}

export default Scene;
