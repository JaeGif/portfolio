import React, { useEffect, useState } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import Island from '../projects/island/Island';
import useExperienceStore from '@/components/stores/useExperienceStore';

function IslandStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (selected === 'island') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      position={[-15, 0, -20]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group position={[0.1, 7.5, 0]} scale={0.75}>
          <Island />
        </group>
      </Float>
    </group>
  );
}

export default IslandStand;
