import React, { useState, useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame } from '@react-three/fiber';
import Boat from './Boat';
import useExperienceStore from '@/components/stores/useExperienceStore';
import TextTemplate from './texts/TextTemplate';
import LinksTemplate from './texts/LinksTemplate';
import ProjectDescription from './ProjectDescription';

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
        <ProjectDescription
          title='GP-GPU Computations'
          headline='Flow Field'
          live='https://gpgpu-flow-field.vercel.app/#debug'
          source='https://github.com/JaeGif/GPGPU-Flow-Field/tree/main/41-gpgpu-flow-field-particles-shaders'
        >
          {'Built with Three.js\n GLSL, and Frame\n Buffer Objects.'}
        </ProjectDescription>
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
