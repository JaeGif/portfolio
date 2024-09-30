import React, { useState, useEffect, useRef } from 'react';
import Trophy from './Trophy';
import useExperienceStore from '@/components/stores/useExperienceStore';
import TextTemplate from './texts/TextTemplate';
import LinksTemplate from './texts/LinksTemplate';
import ProjectDescription from './ProjectDescription';

function TrophyStand() {
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const trophyRef = useRef<any>(null);

  useEffect(() => {
    if (selected === 'trophy') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  return (
    <group position={[-8, 0, 35]} rotation={[0, 0.2, 0]}>
      <group
        onClick={(e) => {
          e.stopPropagation();
          select('trophy');
        }}
        ref={trophyRef}
      >
        <Trophy />
        {active && (
          <ProjectDescription
            title='Three.js Journey'
            headline='Completion Trophy'
            live='https://threejs-journey.com/certificate/view/40194'
          >
            {
              'The adventure begins!\n I learned shaders,\n Three.js, R3F, Drei\n and much more!'
            }
          </ProjectDescription>
        )}
      </group>
    </group>
  );
}

export default TrophyStand;
