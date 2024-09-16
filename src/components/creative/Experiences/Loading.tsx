import { useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { AsciiRenderer, Text, useProgress } from '@react-three/drei';
import Lights from './Lights';
type LoadingProps = {
  start: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
};
function Loading({ start, progress }: LoadingProps) {
  const iconsRef = useRef<any>(null);

  const handleStart = () => {
    start(true);
  };
  useFrame((state, delta) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y += Math.sin(state.clock.elapsedTime) / 15;
    }
  });
  return (
    <>
      <Suspense>
        <Lights position={[-5, 5, 0]} color='pink' intensity={5} />
        <Lights position={[5, 5, 0]} color='lightblue' intensity={5} />
      </Suspense>
      <Text
        rotation={[0, 0.3, 0]}
        font='/fonts/montserrat-alt.ttf'
        characters='1234567890%'
        position={[0, 3.5, 0]}
      >
        {Math.round(progress)}%
        <meshStandardMaterial />
      </Text>
      <mesh ref={iconsRef} receiveShadow castShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 128]} />
        <meshToonMaterial />
      </mesh>
      {progress === 100 && (
        <Text
          onClick={() => handleStart()}
          rotation={[0, 0.3, 0]}
          font='/fonts/montserrat-alt.ttf'
          characters='Star'
          position={[0, -3.5, 0]}
        >
          Start
          <meshStandardMaterial />
        </Text>
      )}
    </>
  );
}

export default Loading;
