import React from 'react';
import { useGLTF } from '@react-three/drei';
import Staff from './items/Staff';
import { GLTFResult } from './types';
import Path from './nature/Path';
import Portal from './portal/Portal';
import Rocks from './nature/Rocks';
import Lights from './items/Lights';
import Stark from './items/Stark';
import SmallAxe from './items/SmallAxe';
import Stumps from './nature/Stumps';
import Ground from './nature/Ground';
import Trees from './nature/Trees';
import Fireflies from './nature/Fireflies';
import Waterfall from './nature/Waterfall';
import SunDial from './items/SunDial';

import ProjectDescription from '../../Experiences/ProjectDescription';

import { useState, useRef, useEffect } from 'react';
import useExperienceStore from '@/components/stores/useExperienceStore';

function Island(props: any) {
  const { nodes, materials } = useGLTF(
    '/assets/creative/models/portalData.glb'
  ) as GLTFResult;

  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const islandRef = useRef<any>(null);

  useEffect(() => {
    if (selected === 'island') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  return (
    <>
      <group
        onClick={() => select('island')}
        ref={islandRef}
        {...props}
        dispose={null}
      >
        <Staff nodes={nodes} materials={materials} />
        <Stark nodes={nodes} materials={materials} />
        <Path nodes={nodes} materials={materials} />
        <Portal nodes={nodes} materials={materials} />
        <Rocks nodes={nodes} materials={materials} />
        <Lights nodes={nodes} materials={materials} />
        <SunDial nodes={nodes} materials={materials} />
        <SmallAxe nodes={nodes} materials={materials} />
        <Stumps nodes={nodes} materials={materials} />
        <Ground nodes={nodes} materials={materials} />
        <Trees nodes={nodes} materials={materials} />
        <Waterfall nodes={nodes} materials={materials} />
        <Fireflies />
      </group>
      {active && (
        <ProjectDescription
          title='Portal Island'
          headline='Details'
          live='https://portal-r3f-pied.vercel.app/'
          source='https://github.com/JaeGif/Portal-R3F'
        >
          {
            'The island was\n particularly challenging.\n So many small\n details to meticulously\n craft. I hope\n you enjoy!'
          }
        </ProjectDescription>
      )}
    </>
  );
}

useGLTF.preload('/assets/creative/models/portalData.glb');

export default React.memo(Island);
