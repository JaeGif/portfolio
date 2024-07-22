import React, { useRef } from 'react';
import { Center, OrbitControls, Sky } from '@react-three/drei';
import Island from '../projects/island/Island';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';

function Experience() {
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={0.1} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <ambientLight intensity={0.75} />
      <directionalLight
        shadow-bias={-0.0002}
        shadow-mapSize={[512, 512]}
        castShadow
        position={[-10, 5, 5]}
        intensity={2}
      />
      <Sky
        sunPosition={[0, -1, 0]}
        distance={450000}
        turbidity={10}
        rayleigh={1}
        mieCoefficient={0.05}
        mieDirectionalG={0.95}
        azimuth={-167.2}
      />
      <Center position-y={0}>
        <Island />
      </Center>
    </>
  );
}

export default Experience;
