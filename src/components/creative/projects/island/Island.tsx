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
import Trees from './nature/Trees';

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
      <Trees nodes={nodes} materials={materials} />
    </group>
  );
}

useGLTF.preload('/assets/creative/models/portalMaterials.glb');
