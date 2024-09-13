import React, { useState, useEffect, useRef } from 'react';
import Trophy from './Trophy';
import useExperienceStore from '@/components/stores/useExperienceStore';

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
      <group onClick={() => select('trophy')} ref={trophyRef}>
        <Trophy />
      </group>
    </group>
  );
}

export default TrophyStand;
