import React, { useState, useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame } from '@react-three/fiber';
import Boat from './Boat';
import useExperienceStore from '@/components/stores/useExperienceStore';
import TextTemplate from './texts/TextTemplate';
import HtmlTemplate from './texts/HtmlTemplate';
import LinksTemplate from './texts/LinksTemplate';

function BoatStand() {
  // states
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  // stores
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  //refs
  const boatRef = useRef<any>(null);
  // constants

  // effects
  useEffect(() => {
    if (selected === 'boat') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);
  // frameCalls
  useFrame((state, delta) => {
    if (active) boatRef.current!.rotation.y += delta * 0.2;
    /*       if (looking) handleLookAt(state.camera, 0.1);
     */
  });
  /* 


  // misc funcs
  const handleLookAt = (camera: THREE.Camera, transition: number) => {
    camera.lookAt(boatRef.current.position);
    camera.position.lerp(vec3.set(3, 1, 3), transition);
    camera.updateMatrix();
  };
 */
  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => {
        select('boat');
      }}
      rotation={[0, 1.2, 0]}
      position={[-10, 0, 7]}
    >
      <Stand hovered={hovered} />
      {active && (
        <>
          <TextTemplate scale={1} position={[-15, 10, 0]}>
            GP-GPU Computations
          </TextTemplate>
          <TextTemplate
            position={[-15, 8, 0]}
            scale={0.75}
            maxWidth={12}
            align='left'
          >
            Flow Field
          </TextTemplate>
          <TextTemplate
            scale={0.75}
            maxWidth={12}
            align='left'
            position={[-15, 6, 0]}
          >
            Built with Three.js
          </TextTemplate>
          <TextTemplate
            scale={0.75}
            maxWidth={12}
            align='left'
            position={[-15, 5, 0]}
          >
            GLSL, and Frame
          </TextTemplate>
          <TextTemplate
            scale={0.75}
            maxWidth={12}
            align='left'
            position={[-15, 4, 0]}
          >
            Buffer Objects
          </TextTemplate>
          <LinksTemplate
            scale={1}
            position={[5, 7.5, 0]}
            live='https://gpgpu-flow-field.vercel.app/#debug'
            source='https://github.com/JaeGif/GPGPU-Flow-Field/tree/main/41-gpgpu-flow-field-particles-shaders'
          />
          {/* <HtmlTemplate
            position={[5, 7.5, 0]}
            live='https://gpgpu-flow-field.vercel.app/#debug'
            source='https://github.com/JaeGif/GPGPU-Flow-Field/tree/main/41-gpgpu-flow-field-particles-shaders'
          /> */}
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
