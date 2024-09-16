import React, { Suspense, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Environment, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import Postprocessing from './Postprocessing';
import StaticLights from './StaticLights';
import Loading from './Loading';

function Experience() {
  const [start, setStart] = useState(false);
  const { progress } = useProgress();

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
      {start && progress === 100 ? (
        <>
          <Environment
            preset='sunset'
            background
            backgroundBlurriness={0.9}
            environmentIntensity={0.25}
          />
          <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
          <Postprocessing />
          <StaticLights />
          <Scene />
        </>
      ) : (
        <Loading progress={progress} start={setStart} />
      )}
    </Canvas>
  );
}

export default Experience;
