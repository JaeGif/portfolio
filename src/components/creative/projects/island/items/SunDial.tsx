import React, { useRef } from 'react';
import { GLTFNodesMaterials } from '../types';

import { useFrame } from '@react-three/fiber';

function SunDial({ nodes, materials }: GLTFNodesMaterials) {
  const sunRef = useRef<any>(null);

  useFrame((state, delta) => {});
  return (
    <>
      <group name='sunDial' position={[-0.704, 0.097, 2.632]}>
        <group ref={sunRef} name='sun' position={[0.0315, 0, -0.15]}>
          <mesh position-y={0.2}>
            <sphereGeometry attach={'geometry'} args={[0.025]} />
            <meshStandardMaterial
              color={'rgb(300, 300, 0)'}
              transparent
              attach={'material'}
            />
          </mesh>
        </group>
        <mesh
          name='Cylinder003'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.rocks}
        />
        <mesh
          name='Cylinder003_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.axeBite}
        />
      </group>
    </>
  );
}

export default SunDial;
