import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { SpotLight, useDepthBuffer } from '@react-three/drei';
import { Vector3 } from 'three';

type LightsProps = {
  position: [number, number, number];
  color?: string;
  anglePower?: number;
  intensity?: number;
  attenuation?: number;
  angle?: number;
  distance?: number;
  penumbra?: number;
};

function Lights({
  position,
  color = 'white',
  anglePower = 4,
  intensity = 5,
  attenuation = 20,
  angle = 0.5,
  distance = 20,
  penumbra = 1,
}: LightsProps) {
  return (
    <>
      <MovingSpot
        color={color}
        position={position}
        anglePower={anglePower}
        intensity={intensity}
        attenuation={attenuation}
        angle={angle}
        distance={distance}
        penumbra={penumbra}
      />
    </>
  );
}
export function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef<any>(null);
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    if (!light.current) return;
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current?.target.updateMatrixWorld();
  });
  return <SpotLight castShadow ref={light} {...props} />;
}
export default Lights;
