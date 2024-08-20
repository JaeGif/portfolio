import React from 'react';
import Island from '../projects/island/Island';
import Trophy from './Trophy';
import Floor from './Floor';
import { useTexture } from '@react-three/drei';
import IslandStand from './IslandStand';

function Scene() {
  return (
    <>
      <IslandStand />
      <Trophy />
      <Floor />
    </>
  );
}

export default Scene;
