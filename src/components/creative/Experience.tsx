import React, { useRef } from 'react';
import { Center, OrbitControls, useHelper, Circle } from '@react-three/drei';
import Island from './projects/island/Island';
import { DirectionalLightHelper } from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function Experience() {
  const dirLightRef = useRef<any>(null);
  useHelper(dirLightRef, DirectionalLightHelper, 2, 'red');
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={0.05} />
      </EffectComposer>

      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <ambientLight intensity={0.75} />
      <directionalLight
        shadow-bias={-0.0002}
        shadow-mapSize={[512, 512]}
        castShadow
        position={[10, 5, -2]}
        intensity={3}
        ref={dirLightRef}
      />

      <Center>
        <Island />
      </Center>
    </>
  );
}

export default Experience;
