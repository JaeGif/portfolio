// @ts-nocheck
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { SpotLight, useDepthBuffer } from '@react-three/drei';
import { Vector3 } from 'three';

function Lights() {
  const depthBuffer = useDepthBuffer();

  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color='pink'
        position={[-5, 15, 0]}
      />
    </>
  );
}
export function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef(null);
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    if (!light.current) return;
    light.current?.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current?.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={20}
      angle={0.5}
      attenuation={20}
      anglePower={4}
      intensity={5}
      {...props}
    />
  );
}
export default Lights;
