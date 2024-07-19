import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Staff from './items/Staff';
import { GLTFResult } from './items/types';

export default function Island(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/creative/models/portalMaterials.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <Staff nodes={nodes} materials={materials} />
      <mesh
        name='light1'
        castShadow
        receiveShadow
        geometry={nodes.light1.geometry}
        material={materials.lampLightEmissive}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='light2'
        castShadow
        receiveShadow
        geometry={nodes.light2.geometry}
        material={materials.lampLightEmissive}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='Circle'
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0.08775, 0.99519, -0.42208]}
      />
      <mesh
        name='water_surface'
        castShadow
        receiveShadow
        geometry={nodes.water_surface.geometry}
        material={materials.waterfall}
        position={[-1.54113, -0.12209, 1.71592]}
        rotation={[0.00754, 0.76818, -0.01133]}
        scale={[0.86721, 0.91915, 1.41586]}
      />
      <mesh
        name='float1'
        castShadow
        receiveShadow
        geometry={nodes.float1.geometry}
        material={nodes.float1.material}
        position={[-0.20177, 0.86323, -1.59856]}
      />
      <mesh
        name='float2'
        castShadow
        receiveShadow
        geometry={nodes.float2.geometry}
        material={nodes.float2.material}
        position={[-0.00957, 1.30075, -1.83003]}
        rotation={[-0.00692, 0.02286, 0.09332]}
      />
      <mesh
        name='float5'
        castShadow
        receiveShadow
        geometry={nodes.float5.geometry}
        material={nodes.float5.material}
        position={[0.08702, 0.94411, -1.53629]}
      />
      <mesh
        name='float4'
        castShadow
        receiveShadow
        geometry={nodes.float4.geometry}
        material={nodes.float4.material}
        position={[0.37968, 1.04557, -1.49171]}
      />
      <mesh
        name='float3'
        castShadow
        receiveShadow
        geometry={nodes.float3.geometry}
        material={nodes.float3.material}
        position={[1.56252, 1.18291, -1.95205]}
      />
      <mesh
        name='float6'
        castShadow
        receiveShadow
        geometry={nodes.float6.geometry}
        material={nodes.float6.material}
        position={[-0.23783, 0.74407, -1.72631]}
        rotation={[0.00212, -0.00887, -0.04512]}
      />
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
      <mesh
        name='rock4006'
        castShadow
        receiveShadow
        geometry={nodes.rock4006.geometry}
        material={materials.path}
        position={[-0.20084, 0.02072, -1.39367]}
        rotation={[0, 0, 0.01724]}
      />
      <mesh
        name='rock4007'
        castShadow
        receiveShadow
        geometry={nodes.rock4007.geometry}
        material={materials.path}
        position={[0.53364, 0.04279, -1.07499]}
      />
      <mesh
        name='rock4008'
        castShadow
        receiveShadow
        geometry={nodes.rock4008.geometry}
        material={materials.path}
        position={[0.31668, 0.03522, -0.11832]}
      />
      <mesh
        name='rock4009'
        castShadow
        receiveShadow
        geometry={nodes.rock4009.geometry}
        material={materials.path}
        position={[-0.05539, 0.02999, 1.03487]}
        rotation={[0, 0.90919, 0]}
      />
      <mesh
        name='rock4010'
        castShadow
        receiveShadow
        geometry={nodes.rock4010.geometry}
        material={materials.path}
        position={[-0.37477, 0.00392, 0.59111]}
      />
      <mesh
        name='rock4011'
        castShadow
        receiveShadow
        geometry={nodes.rock4011.geometry}
        material={materials.path}
        position={[-0.16752, -0.011, -0.32474]}
      />
      <mesh
        name='rock4012'
        castShadow
        receiveShadow
        geometry={nodes.rock4012.geometry}
        material={materials.path}
        position={[0.59076, 0.03224, 1.40255]}
      />
      <mesh
        name='rock3008'
        castShadow
        receiveShadow
        geometry={nodes.rock3008.geometry}
        material={materials.path}
        position={[0.31422, -0.04662, 0.4854]}
        rotation={[-Math.PI, 1.16295, -Math.PI]}
      />
      <mesh
        name='rock3009'
        castShadow
        receiveShadow
        geometry={nodes.rock3009.geometry}
        material={materials.path}
        position={[0.01466, 0.05046, 1.32974]}
        rotation={[-3.13739, 0.26961, 3.1258]}
      />
      <mesh
        name='rock4013'
        castShadow
        receiveShadow
        geometry={nodes.rock4013.geometry}
        material={materials.dirt}
        position={[-0.27602, 0.08247, 0.02332]}
        rotation={[0, 0.96551, 0.15463]}
      />
      <mesh
        name='rock4014'
        castShadow
        receiveShadow
        geometry={nodes.rock4014.geometry}
        material={materials.dirt}
        position={[0.02233, 0.08601, 0.19073]}
        rotation={[0, -0.72528, 0]}
      />
      <mesh
        name='rock4015'
        castShadow
        receiveShadow
        geometry={nodes.rock4015.geometry}
        material={materials.dirt}
        position={[-0.36288, 0.064, -0.44658]}
      />
      <mesh
        name='rock4016'
        castShadow
        receiveShadow
        geometry={nodes.rock4016.geometry}
        material={materials.dirt}
        position={[-0.28467, 0.07731, -0.89026]}
      />
      <mesh
        name='rock4017'
        castShadow
        receiveShadow
        geometry={nodes.rock4017.geometry}
        material={materials.dirt}
        position={[-0.3472, 0.04952, 0.95197]}
      />
      <mesh
        name='base'
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.lampMetal}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='base2'
        castShadow
        receiveShadow
        geometry={nodes.base2.geometry}
        material={materials.lampMetal}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='rope2'
        castShadow
        receiveShadow
        geometry={nodes.rope2.geometry}
        material={materials.innerWood}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='stand2'
        castShadow
        receiveShadow
        geometry={nodes.stand2.geometry}
        material={materials.fencing1}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='arm2'
        castShadow
        receiveShadow
        geometry={nodes.arm2.geometry}
        material={materials.fencing1}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='light_container_2'
        castShadow
        receiveShadow
        geometry={nodes.light_container_2.geometry}
        material={materials.lampMetal}
        position={[-1.02235, 0.95562, 0.27435]}
        rotation={[Math.PI, -0.00092, Math.PI]}
      />
      <mesh
        name='light_container'
        castShadow
        receiveShadow
        geometry={nodes.light_container.geometry}
        material={materials.lampMetal}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='stand'
        castShadow
        receiveShadow
        geometry={nodes.stand.geometry}
        material={materials.fencing1}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='arm'
        castShadow
        receiveShadow
        geometry={nodes.arm.geometry}
        material={materials.fencing1}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='rope'
        castShadow
        receiveShadow
        geometry={nodes.rope.geometry}
        material={materials.innerWood}
        position={[1.28081, 0.06477, 0.27446]}
      />
      <mesh
        name='handle'
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials.wood}
        position={[1.25388, 0.16178, 1.10747]}
        rotation={[2.51797, 1.19332, -2.22488]}
      />
      <mesh
        name='head'
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.axeBite}
        position={[1.25388, 0.16178, 1.10747]}
        rotation={[2.51797, 1.19332, -2.22488]}
      />
      <mesh
        name='pondWalls'
        castShadow
        receiveShadow
        geometry={nodes.pondWalls.geometry}
        material={materials.dirt}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='dirt'
        castShadow
        receiveShadow
        geometry={nodes.dirt.geometry}
        material={materials.path}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='crystals'
        castShadow
        receiveShadow
        geometry={nodes.crystals.geometry}
        material={materials['blue gemstone']}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='grass'
        castShadow
        receiveShadow
        geometry={nodes.grass.geometry}
        material={materials.grass}
        position={[0, -1.87264, 0]}
      />
      <mesh
        name='pond'
        castShadow
        receiveShadow
        geometry={nodes.pond.geometry}
        material={materials.basin}
        position={[0, -1.87264, 0]}
      />
      <group
        name='chopped1'
        position={[1.71186, 0.05354, 0.77196]}
        rotation={[1.0217, -0.25684, 0.00051]}
      >
        <mesh
          name='Cylinder004'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder004_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped2'
        position={[1.49876, -0.0012, 0.67194]}
        rotation={[1.5729, -0.38678, 0.00079]}
      >
        <mesh
          name='Cylinder005'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder005_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped3'
        position={[1.66219, -0.0012, 0.98882]}
        rotation={[1.66926, -0.27938, 0.39672]}
      >
        <mesh
          name='Cylinder006'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder006_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='chopped4'
        position={[1.45647, -0.0012, 1.22058]}
        rotation={[-3.1354, -0.0127, -1.59148]}
      >
        <mesh
          name='Cylinder007'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder007_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group name='stump' position={[4.81168, 0.00013, 0.67319]}>
        <mesh
          name='Cylinder001'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder001_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.innerWood}
        />
      </group>
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
      <group name='stump001' position={[4.79118, 0.00626, -0.37176]}>
        <mesh
          name='Cylinder002'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.wood}
        />
        <mesh
          name='Cylinder002_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.innerWood}
        />
      </group>
      <group
        name='axe_handle'
        position={[-0.49299, 4.45524, -0.72292]}
        rotation={[2.84892, -0.01416, 0.13646]}
      >
        <mesh
          name='Cylinder'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.gilding}
        />
        <mesh
          name='Cylinder_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.wood}
        />
      </group>
      <group
        name='large_axe_bite'
        position={[-2.30709, -2.45862, 1.40771]}
        rotation={[2.76138, 0.55694, 0.16094]}
      >
        <mesh
          name='Cylinder008'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['axe head base']}
        />
        <mesh
          name='Cylinder008_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['starks axe bite']}
        />
      </group>
      <group
        name='small_axe_bite'
        position={[-0.74219, -2.68858, 1.44026]}
        rotation={[-0.38452, -0.57911, 2.97834]}
        scale={0.9715}
      >
        <mesh
          name='Cylinder009'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['axe head base']}
        />
        <mesh
          name='Cylinder009_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials['starks axe bite']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/creative/models/portalMaterials.glb');
