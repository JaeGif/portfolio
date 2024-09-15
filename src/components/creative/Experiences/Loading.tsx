import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Text } from '@react-three/drei';
import Lights from './Lights';
function Loading() {
  const iconsRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y += Math.sin(state.clock.elapsedTime) / 15;
    }
  });

  return (
    <>
      <Lights position={[-5, 5, 0]} color='pink' intensity={5} />
      <Lights position={[5, 5, 0]} color='lightblue' intensity={5} />

      <Text
        rotation={[0, 0.3, 0]}
        font='/fonts/montserrat-alt.ttf'
        position={[0, 3.5, 0]}
      >
        Loading
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
