import React, { useState, useEffect, useRef } from 'react';
import { Float } from '@react-three/drei';
import { Stand } from './Stand';
import { useFrame } from '@react-three/fiber';
import ProceduralTerrain from '../projects/procedural/ProceduralTerrain';
import useExperienceStore from '@/components/stores/useExperienceStore';
import ProjectDescription from './ProjectDescription';

function ProceduralTerrainStand() {
  const [hovered, setHovered] = useState(false);
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const marbleRef = useRef<any>(null);

  useEffect(() => {
    if (selected === 'terrain') setActive(true);
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
      onClick={() => select('terrain')}
      rotation={[0, -1, 0]}
      position={[10, 0, 22]}
    >
      <Stand hovered={hovered} />
      <Float>
        <group ref={marbleRef} position={[0.1, 5, 0]} scale={0.5}>
          <ProceduralTerrain />
        </group>
      </Float>
      {active && (
        <ProjectDescription
          title='Procedural Terrain'
          headline='Taking Flight'
          live='https://procedural-terrain-mu.vercel.app/#debug'
          source='https://github.com/JaeGif/Procedural-Terrain/tree/main/44-procedural-terrain-shader'
        >
          {
            'A challenging project,\n I learned alot\n about Blender, GLSL,\n and structuring.'
          }
        </ProjectDescription>
      )}
    </group>
  );
}

export default ProceduralTerrainStand;
