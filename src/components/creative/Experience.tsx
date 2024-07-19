import React from 'react';
import { Center, useGLTF, OrbitControls, useTexture } from '@react-three/drei';
import MainIsland from './projects/island/MainIsland';
function Experience() {
  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <Center>
        <ambientLight intensity={2} color={'white'} />
        <MainIsland />
      </Center>
    </>
  );
}

export default Experience;
