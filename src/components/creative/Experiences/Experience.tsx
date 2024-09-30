import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Environment, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import Postprocessing from './Postprocessing';
import StaticLights from './StaticLights';
import Loading from './Loading';
import ControlOverlay from './ControlOverlay';

function Experience() {
  const [start, setStart] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const { progress } = useProgress();
  const cameraControls = useRef(null);

  useEffect(() => {
    if (!overlayVisible && start) {
      window.setTimeout(() => {
        setOverlayVisible(true), 1000;
      });
    }
  }, [start]);

  return (
    <>
      {start && overlayVisible && <ControlOverlay />}
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
            <OrbitControls
              ref={cameraControls}
              makeDefault
              maxPolarAngle={Math.PI / 2 - 0.1}
            />
            <Postprocessing />
            <StaticLights />
            <Scene cameraControls={cameraControls.current} />
          </>
        ) : (
          <Loading progress={progress} start={setStart} />
        )}
      </Canvas>
    </>
  );
}

export default Experience;
