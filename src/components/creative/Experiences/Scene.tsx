import React from 'react';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';
import BoatStand from './BoatStand';
import MarbleStand from './MarbleStand';
import Island from '../projects/island/Island';
import { useFrame, useThree } from '@react-three/fiber';

function Scene() {
  // look at camera

  useFrame((state, delta) => {});

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
