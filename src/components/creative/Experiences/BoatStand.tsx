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
  // states
  const [hovered, setHovered] = useState(false);
  const [looking, setLooking] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  // stores
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  //refs
  const boatRef = useRef<any>(null);
  // constants
  const vec3 = new THREE.Vector3();

  // effects
  useEffect(() => {
    if (selected === 'boat') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useEffect(() => {
    const listener = () => {
      if (looking) setLooking(false);
    };
    window.addEventListener('dblclick', listener);
    window.addEventListener('drag', listener);

    return () => {
      window.removeEventListener('dblclick', listener);
      window.removeEventListener('drag', listener);
    };
  }, []);

  useEffect(() => {
    console.log(looking);
  }, [looking]);

  // frameCalls
  useFrame((state, delta) => {
    if (active) boatRef.current!.rotation.y += delta * 0.2;
    if (looking) handleLookAt(state.camera, 0.1);
  });

  // misc funcs
  const handleLookAt = (camera: THREE.Camera, transition: number) => {
    camera.lookAt(boatRef.current.position);
    camera.position.lerp(vec3.set(3, 1, 3), transition);
    camera.updateMatrix();
  };

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => {
        setLooking(true);
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
