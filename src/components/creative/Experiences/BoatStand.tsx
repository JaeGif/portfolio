import React, { useState, useRef, useEffect } from 'react';
import { Float, Html } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame } from '@react-three/fiber';
import Boat from './Boat';
import useExperienceStore from '@/components/stores/useExperienceStore';
import TextTemplate from './texts/TextTemplate';
import Link from 'next/link';
function BoatStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const boatRef = useRef<any>(null);

  useEffect(() => {
    if (selected === 'boat') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useFrame((state, delta) => {
    if (active) {
      boatRef.current!.rotation.y += delta * 0.2;
    }
  });
  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => select('boat')}
      rotation={[0, Math.PI / 4, 0]}
      position={[-25, 0, -10]}
    >
      <Stand hovered={hovered} />

      <Float>
        <TextTemplate>GP-GPU Computations</TextTemplate>
        <Html>
          <Link
            href={'https://gpgpu-flow-field.vercel.app/#debug'}
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 96 960 960'
              width='36'
            >
              <path
                fill={'#000000'}
                d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
              />
            </svg>
          </Link>
        </Html>
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
