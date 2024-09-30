import React, { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

const BALLSIZE = 0.5;
function Player() {
  return (
    <RigidBody
      canSleep={false}
      linearDamping={0.5}
      angularDamping={0.5}
      restitution={0.2}
      friction={1}
      colliders='ball'
      position={[0, 1, 0]}
    >
      <mesh>
        <icosahedronGeometry args={[BALLSIZE, 4]} />
        <meshStandardMaterial color={'yellow'} />
      </mesh>
    </RigidBody>
  );
}

export default Player;
