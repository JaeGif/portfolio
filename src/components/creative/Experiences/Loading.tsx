import { useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { Float, Text3D } from '@react-three/drei';
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
        <Lights position={[-5, 5, 0]} color='pink' intensity={6} />
        <Lights position={[5, 5, 0]} color='lightblue' intensity={6} />
      </Suspense>

      <ambientLight intensity={0.03} />
      <directionalLight
        position={[5, 5, 1]}
        color={'lightblue'}
        intensity={0.25}
      />
      <directionalLight position={[-5, 5, 1]} color={'pink'} intensity={0.25} />
      <Text3D
        rotation={[0, 0.3, 0]}
        font='/assets/fonts/pixeloidtf.json'
        position={[-1.5, 3.5, 0]}
      >
        {Math.round(progress)}%
        <meshStandardMaterial color={'white'} />
      </Text3D>
      <Float>
        <mesh ref={iconsRef} receiveShadow castShadow>
          <torusKnotGeometry args={[1, 0.3, 128, 128]} />
          <meshToonMaterial />
        </mesh>
      </Float>
      {progress === 100 && (
        <>
          <Text3D
            rotation={[-0.2, 0.3, 0.03]}
            font='/assets/fonts/pixeloidtf.json'
            position={[-3.5, -3, 2]}
            scale={0.25}
          >
            Hint: Click, drag, pan, and zoom to interact
            <meshStandardMaterial color={'white'} />
          </Text3D>
          <Text3D
            onPointerEnter={onPointer}
            onPointerLeave={offPointer}
            onClick={handleStart}
            rotation={[-0.2, 0.3, 0.03]}
            font='/assets/fonts/pixeloidtf.json'
            position={[-1.5, -4.5, 2]}
          >
            Start
            <meshStandardMaterial color={'white'} />
          </Text3D>
        </>
      )}
      {/*       <mesh
        position={[0, -2, 0]}
        rotation={[Math.PI / 2, 0, -0.26]}
        receiveShadow
      >
        <planeGeometry args={[52, 52, 16]} />
        <meshStandardMateri side={2} color={'black'} />
      </mesh> */}
    </>
  );
}

export default Loading;
