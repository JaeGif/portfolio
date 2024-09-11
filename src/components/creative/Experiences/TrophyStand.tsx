import React, { useState, useEffect, useRef } from 'react';
import Trophy from './Trophy';
import { Float } from '@react-three/drei';
import useExperienceStore from '@/components/stores/useExperienceStore';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

function TrophyStand() {
  const selected = useExperienceStore((state) => state.selected);
  const select = useExperienceStore((state) => state.select);
  const [active, setActive] = useState<boolean>(false);
  const trophyRef = useRef<any>(null);

  const objectRotate = () => {
    if (active) {
      //  rotate
    }
  };
  useEffect(() => {
    if (selected === 'trophy') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  return (
    <group position={[0, 3, -25]}>
      <Float floatIntensity={3} speed={3} rotationIntensity={0}>
        <group onClick={() => select('trophy')} ref={trophyRef}>
          <Trophy />
        </group>
      </Float>
    </group>
  );
}

export default TrophyStand;
