import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Text, useProgress } from '@react-three/drei';
import Lights from './Lights';
function Loading() {
  const iconsRef = useRef<any>(null);
  const { progress } = useProgress();
  useFrame((state, delta) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y += Math.sin(state.clock.elapsedTime) / 15;
    }
  });

  useEffect(() => {
    // unmount and fade out
    return () => {};
  }, []);

  return (
    <>
      <Lights position={[-5, 5, 0]} color='pink' intensity={5} />
      <Lights position={[5, 5, 0]} color='lightblue' intensity={5} />

      <Text
        rotation={[0, 0.3, 0]}
        font='/fonts/montserrat-alt.ttf'
        position={[0, 3.5, 0]}
      >
        {Math.round(progress)}%
        <meshStandardMaterial />
      </Text>
      <mesh ref={iconsRef} receiveShadow castShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 128]} />
        <meshToonMaterial />
      </mesh>
    </>
  );
}

export default Loading;
