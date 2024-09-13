import React, { useState, useRef, useEffect } from 'react';
import { Stand } from './Stand';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Marble from './Marble';
import useExperienceStore from '@/components/stores/useExperienceStore';

function MarbleStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const marbleRef = useRef<any>(null);

  useEffect(() => {
    if (selected === 'marble') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useFrame((state, delta) => {
    if (active) {
      marbleRef.current!.rotation.y += delta * 0.2;
    }
  });

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => select('marble')}
      rotation={[0, 0.1, 0]}
      position={[12, 0, -7]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group ref={marbleRef} position={[0, 5.5, 3.5]} scale={0.6}>
          <Marble />
        </group>
      </Float>
    </group>
  );
}

export default MarbleStand;
