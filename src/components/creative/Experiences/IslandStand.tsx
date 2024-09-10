import React, { useEffect, useRef, useState } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import Island from '../projects/island/Island';
import useExperienceStore from '@/components/stores/useExperienceStore';
import { useFrame } from '@react-three/fiber';

function IslandStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const islandRef = useRef(null);

  useEffect(() => {
    if (selected === 'island') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useFrame((state, delta) => {
    if (active) {
      islandRef.current!.rotation.y += delta;
      // can animate on frame it works!
    }
  });

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => select('island')}
      position={[-15, 0, -20]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group ref={islandRef} position={[0.1, 7.5, 0]} scale={0.75}>
          <Island />
        </group>
      </Float>
    </group>
  );
}

export default IslandStand;
