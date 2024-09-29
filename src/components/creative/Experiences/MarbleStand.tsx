import React, { useState, useRef, useEffect } from 'react';
import { Stand } from './Stand';
import { Float } from '@react-three/drei';

import Marble from './Marble';
import useExperienceStore from '@/components/stores/useExperienceStore';
import ProjectDescription from './ProjectDescription';

function MarbleStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (selected === 'marble') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        select('marble');
      }}
      rotation={[0, 0.1, 0]}
      position={[12, 0, -7]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group position={[0, 5.5, 4]} scale={0.6}>
          <Marble />
        </group>
      </Float>
      {active && (
        <ProjectDescription
          title='Marble Run'
          headline='Racing Platformer'
          live='https://procedural-terrain-mu.vercel.app/#debug'
          source='https://github.com/JaeGif/Procedural-Terrain/tree/main/44-procedural-terrain-shader'
        >
          {
            'My first game!\n A simple marble\n racing game with\n a bright future.'
          }
        </ProjectDescription>
      )}
    </group>
  );
}

export default MarbleStand;
