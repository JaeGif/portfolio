import React from 'react';
import Level from './marble/Level';
import Player from './marble/Player';
import { Physics } from '@react-three/rapier';
function Marble() {
  return (
    <>
      <Physics>
        <Level />
        <Player />
      </Physics>
    </>
  );
}

export default Marble;
