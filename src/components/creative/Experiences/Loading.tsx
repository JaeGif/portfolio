import { useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { AsciiRenderer, Float, Text, useProgress } from '@react-three/drei';
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
  const onPointer = () => {
    if (document.body.style.cursor !== 'pointer')
      document.body.style.cursor = 'pointer';
  };
  const offPointer = () => {
    if (document.body.style.cursor === 'pointer')
      document.body.style.cursor = 'default';
  };

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
        <meshBasicMaterial />
      </Text>
      <Float>
        <mesh ref={iconsRef} receiveShadow castShadow>
          <torusKnotGeometry args={[1, 0.3, 128, 128]} />
          <meshToonMaterial />
        </mesh>
      </Float>

      {progress === 100 && (
        <>
          <Text
            rotation={[-0.05, 0.3, 0]}
            font='/fonts/montserrat-alt.ttf'
            characters='Hint:Clickdragpnzome,'
            position={[0, -2.5, 0]}
            scale={0.25}
          >
            Hint: Click, drag, pan, and zoom to interact
            <meshBasicMaterial />
          </Text>
          <Text
            onPointerEnter={onPointer}
            onPointerLeave={offPointer}
            onClick={handleStart}
            rotation={[-0.05, 0.3, 0]}
            font='/fonts/montserrat-alt.ttf'
            characters='Star'
            position={[0, -3.5, 0]}
          >
            Start
            <meshBasicMaterial />
          </Text>
        </>
      )}
    </>
  );
}

export default Loading;
