import React, { useRef } from 'react';
import {
  Center,
  useGLTF,
  OrbitControls,
  useHelper,
  Float,
} from '@react-three/drei';
import MainIsland from './projects/island/MainIsland';
import Island from './projects/island/Island';
import { DirectionalLightHelper } from 'three';
function Experience() {
  const dirLightRef = useRef<any>(null);
  useHelper(dirLightRef, DirectionalLightHelper, 2, 'red');
  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        intensity={10}
        ref={dirLightRef}
      />
      <Center>
        <Island />
      </Center>
    </>
  );
}

export default Experience;
