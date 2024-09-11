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

  useEffect(() => {
    if (selected === 'trophy') setActive(true);
    else if (selected) setActive(false);
  }, [selected]);

  const objectRotate = () => {
    gsap.to(trophyRef.current.rotation, {
      duration: 1,
      ease: 'power2.out',
      y: `+=${Math.PI}`,
    });
  };

  return (
    <group position={[0, 3, -25]}>
      <Float floatIntensity={3} speed={3} rotationIntensity={0}>
        <group
          onClick={() => {
            select('trophy');
            objectRotate();
          }}
          ref={trophyRef}
        >
          <Trophy />
        </group>
      </Float>
    </group>
  );
}

export default TrophyStand;
