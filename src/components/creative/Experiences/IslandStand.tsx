import React from 'react';
import { useTexture } from '@react-three/drei';
import { Stand } from './Stand';

function IslandStand() {
  const marbleTextures = useTexture({
    map: '/assets/creative/textures/quartzite/Poliigon_StoneQuartzite_8060_BaseColor.jpg',
    arm: '/assets/creative/textures/quartzite/Poliigon_StoneQuartzite_8060_ORM.jpg',
  });

  return (
    <group>
      <Stand {...marbleTextures} />
    </group>
  );
}

export default IslandStand;
