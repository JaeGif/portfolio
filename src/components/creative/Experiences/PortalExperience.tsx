import React, { useRef, useState } from 'react';
import { Center, OrbitControls, Sky } from '@react-three/drei';
import Island from '../projects/island/Island';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';
import { Canvas } from '@react-three/fiber';

function Experience() {
  const [dirLightPosition, setDirLightPosition] = useState<{
    x: number;
    y: number;
    z: number;
  }>({
    x: -10,
    y: 5,
    z: 7,
  });

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.01,
        far: 200,
        position: [3, 5, 11],
      }}
    >
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
        position={[dirLightPosition.x, dirLightPosition.y, dirLightPosition.z]}
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
    </Canvas>
  );
}

export default Experience;
