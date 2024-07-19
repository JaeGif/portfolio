import React, { useRef } from 'react';
import {
  Center,
  useGLTF,
  OrbitControls,
  useHelper,
  Float,
} from '@react-three/drei';
import Island from './projects/island/Island';
import { DirectionalLightHelper } from 'three';

import { Bloom, EffectComposer } from '@react-three/postprocessing';

function Experience() {
  const dirLightRef = useRef<any>(null);
  useHelper(dirLightRef, DirectionalLightHelper, 2, 'red');
  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <directionalLight
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        castShadow
        position={[-5, 3, 2]}
        intensity={3}
        ref={dirLightRef}
      />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={0.05} />
      </EffectComposer>

      <Center>
        <Island />
      </Center>
    </>
  );
}

export default Experience;
