import React, { useState, useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame, useThree } from '@react-three/fiber';
import Boat from './Boat';
import useExperienceStore from '@/components/stores/useExperienceStore';
import TextTemplate from './texts/TextTemplate';
import HtmlTemplate from './texts/HtmlTemplate';
import * as THREE from 'three';
function BoatStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const boatRef = useRef<any>(null);
  const three = useThree();

  useEffect(() => {
    if (selected === 'boat') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useFrame((state, delta) => {
    if (active) {
      boatRef.current!.rotation.y += delta * 0.2;
    }
  });

  const handleLookAt = () => {
    three.camera.position.set(0.7, 0.5, 2);
    three.camera.rotation.set(0, 5, 0);
  };
  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => {
        handleLookAt();
        select('boat');
      }}
      rotation={[0, 1.2, 0]}
      position={[-10, 0, 7]}
    >
      <Stand hovered={hovered} />
      {active && (
        <>
          <TextTemplate>GP-GPU Computations</TextTemplate>
          <TextTemplate
            scale={0.75}
            maxWidth={12}
            align='left'
            position={[-10, 5, 0]}
          >
            Flow field animation showing the power of general pupose GPU
            programming brought to life with Three.js, FBO's, and custom GLSL
            shaders.
          </TextTemplate>
          <HtmlTemplate
            position={[5, 7.5, 0]}
            live='https://gpgpu-flow-field.vercel.app/#debug'
            source='https://github.com/JaeGif/GPGPU-Flow-Field/tree/main/41-gpgpu-flow-field-particles-shaders'
          />
        </>
      )}
      <Float>
        <group
          ref={boatRef}
          rotation={[0, Math.PI / 2, 0]}
          position={[-0.2, 6, 0.1]}
          scale={0.5}
        >
          <Boat />
        </group>
      </Float>
    </group>
  );
}

export default BoatStand;
