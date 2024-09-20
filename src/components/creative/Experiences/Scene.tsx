import React, { useEffect, useState } from 'react';
import TrophyStand from './TrophyStand';
import ProceduralTerrainStand from './ProceduralTerrainStand';
import BoatStand from './BoatStand';
import MarbleStand from './MarbleStand';
import Island from '../projects/island/Island';
import { useFrame, useThree } from '@react-three/fiber';
import useExperienceStore from '@/components/stores/useExperienceStore';
import * as THREE from 'three';

interface TargetLocationsDict {
  [index: string]: { x: number; y: number; z: number };
}

const TARGET_LOCATIONS = {
  trophy: { x: 0, y: 0, z: 0 },
  terrain: { x: 1, y: 1, z: 1 },
  boat: { x: 2, y: 2, z: 2 },
  marble: { x: 3, y: 3, z: 3 },
} as TargetLocationsDict;

function Scene({ cameraControls }: any) {
  const selected = useExperienceStore((state) => state.selected);
  const [target, setTarget] = useState<{
    x: number;
    y: number;
    z: number;
  } | null>(null);

  // look at camera
  useEffect(() => {
    console.log(cameraControls);
  }, [cameraControls]);

  useEffect(() => {
    // update state to look at new location
    if (selected) setTarget(TARGET_LOCATIONS[selected]);
  }, [selected]);
  useEffect(() => {
    if (target && cameraControls) {
      const targetPos = new THREE.Vector3(target.x, target.y, target.z);
      cameraControls.target.lerp(targetPos, 0.1);
      cameraControls.update();
    }
  }, [target, cameraControls]);

  useFrame((state, delta) => {
    if (target && cameraControls) {
      const targetPos = new THREE.Vector3(target.x, target.y, target.z);
      cameraControls.target.lerp(targetPos, 0.01);
      cameraControls.update();
    }
  });

  useEffect(() => {
    console.log(target);
  }, [target]);

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
