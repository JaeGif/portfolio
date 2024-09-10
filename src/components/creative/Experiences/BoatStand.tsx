import React, { useState, useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame } from '@react-three/fiber';
import Boat from './Boat';
import useExperienceStore from '@/components/stores/useExperienceStore';
function BoatStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const boatRef = useRef(null);

  useEffect(() => {
    if (selected === 'boat') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  useFrame((state, delta) => {
    if (active) {
      boatRef.current!.rotation.y += delta;
      // can animate on frame it works!
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
