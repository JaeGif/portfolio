import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Staff from './items/Staff';
import { GLTFResult } from './types';
import Path from './nature/Path';
import Portal from './portal/Portal';
import Pond from './nature/Pond';
import Rocks from './nature/Rocks';
import Lights from './items/Lights';
import Stark from './items/Stark';
import SmallAxe from './items/SmallAxe';
import Stumps from './nature/Stumps';
import Ground from './nature/Ground';

export default function Island(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/creative/models/portalMaterials.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <Staff nodes={nodes} materials={materials} />
      <Stark nodes={nodes} materials={materials} />
      <Path nodes={nodes} materials={materials} />
      <Portal nodes={nodes} materials={materials} />
      <Pond nodes={nodes} materials={materials} />
      <Rocks nodes={nodes} materials={materials} />
      <Lights nodes={nodes} materials={materials} />
      <SmallAxe nodes={nodes} materials={materials} />
      <Stumps nodes={nodes} materials={materials} />
      <Ground nodes={nodes} materials={materials} />
      <mesh
        name='tree'
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={materials['tree wood']}
        position={[-0.06378, 0.99981, 0.01199]}
      />
      <mesh
        name='protruding_roots'
        castShadow
        receiveShadow
        geometry={nodes.protruding_roots.geometry}
        material={materials.roots}
        position={[-1.06492, -1.1637, -3.8598]}
      />
    </group>
  );
}

useGLTF.preload('/assets/creative/models/portalMaterials.glb');
