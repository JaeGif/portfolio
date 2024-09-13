import React from 'react';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';

import { ToneMappingMode } from 'postprocessing';

function Postprocessing() {
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={0.2} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </>
  );
}

export default Postprocessing;
