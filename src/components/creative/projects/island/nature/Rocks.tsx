import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Rocks({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
      <mesh
        name='rock2'
        castShadow
        receiveShadow
        geometry={nodes.rock2.geometry}
        material={materials.rocks}
        position={[1.49957, 0.04859, -0.81071]}
        rotation={[0, 1.27354, 0]}
      />
      <mesh
        name='rock4'
        castShadow
        receiveShadow
        geometry={nodes.rock4.geometry}
        material={materials.rocks}
        position={[1.45353, 1.02202, -1.54524]}
        rotation={[1.66645, 0.31733, 1.54839]}
      />
      <mesh
        name='rock1'
        castShadow
        receiveShadow
        geometry={nodes.rock1.geometry}
        material={materials.rocks}
        position={[-2.07357, 0.09162, -0.72663]}
      />
      <mesh
        name='rock2001'
        castShadow
        receiveShadow
        geometry={nodes.rock2001.geometry}
        material={materials.rocks}
        position={[1.67803, 0.18289, -1.18278]}
      />
      <mesh
        name='rock3001'
        castShadow
        receiveShadow
        geometry={nodes.rock3001.geometry}
        material={materials.rocks}
        position={[1.23117, 0.11841, -1.39944]}
        rotation={[0, 0.49546, 0]}
      />
      <mesh
        name='rock1001'
        castShadow
        receiveShadow
        geometry={nodes.rock1001.geometry}
        material={materials.rocks}
        position={[-1.20221, 0.20941, -1.05447]}
        rotation={[0.07189, -0.10664, 0.55327]}
      />
      <mesh
        name='rock4001'
        castShadow
        receiveShadow
        geometry={nodes.rock4001.geometry}
        material={materials.rocks}
        position={[1.17404, 0.62647, -1.75314]}
        rotation={[0, -1.55638, 0]}
      />
      <mesh
        name='rock4002'
        castShadow
        receiveShadow
        geometry={nodes.rock4002.geometry}
        material={materials.rocks}
        position={[-1.14436, 0.63545, -1.73775]}
        rotation={[-3.13287, 1.10137, -3.11402]}
      />
      <mesh
        name='rock4003'
        castShadow
        receiveShadow
        geometry={nodes.rock4003.geometry}
        material={materials.rocks}
        position={[-1.03828, 0.14078, -0.56529]}
      />
      <mesh
        name='rock3002'
        castShadow
        receiveShadow
        geometry={nodes.rock3002.geometry}
        material={materials.rocks}
        position={[-2.87124, 0.10794, -0.71336]}
        rotation={[0, 0.63739, 0]}
      />
      <mesh
        name='rock3003'
        castShadow
        receiveShadow
        geometry={nodes.rock3003.geometry}
        material={materials.rocks}
        position={[1.76796, 0.03511, -0.0218]}
        rotation={[-Math.PI, 1.16295, -Math.PI]}
      />
      <mesh
        name='rock3006'
        castShadow
        receiveShadow
        geometry={nodes.rock3006.geometry}
        material={materials.rocks}
        position={[-2.12817, 0.07144, -0.0581]}
        rotation={[-3.13739, 0.26961, 3.1258]}
      />
      <mesh
        name='rock4004'
        castShadow
        receiveShadow
        geometry={nodes.rock4004.geometry}
        material={materials.rocks}
        position={[-1.47094, 1.00714, -1.56157]}
        rotation={[1.45437, -0.30392, -1.71557]}
      />
      <mesh
        name='rock3004'
        castShadow
        receiveShadow
        geometry={nodes.rock3004.geometry}
        material={materials.rocks}
        position={[1.31378, 0.01875, -0.12549]}
        rotation={[-Math.PI, 1.16295, -Math.PI]}
      />
      <mesh
        name='rock3005'
        castShadow
        receiveShadow
        geometry={nodes.rock3005.geometry}
        material={materials.rocks}
        position={[1.97578, 0.029, -0.56103]}
        rotation={[-2.62902, 0.04534, 2.5826]}
      />
      <mesh
        name='rock4005'
        castShadow
        receiveShadow
        geometry={nodes.rock4005.geometry}
        material={materials.rocks}
        position={[-1.67625, 0.46594, -0.58692]}
        rotation={[-3.01502, -1.43767, -3.0475]}
      />
      <mesh
        name='rock3007'
        castShadow
        receiveShadow
        geometry={nodes.rock3007.geometry}
        material={materials.rocks}
        position={[1.76796, 0.03511, -0.0218]}
        rotation={[-Math.PI, 1.16295, -Math.PI]}
      />
    </>
  );
}

export default Rocks;
