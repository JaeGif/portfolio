import React, { useState } from 'react';
import { useGLTF, Outlines } from '@react-three/drei';
import { GLTFResult } from '../projects/island/types';

function Trophy(props: any) {
  const { nodes, materials } = useGLTF(
    '/assets/creative/models/trophy.glb'
  ) as GLTFResult;

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <group
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={2}
        {...props}
        dispose={null}
      >
        <mesh
          name='Text'
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.wood}
          position={[-0.99, 0.411, 0.762]}
          rotation={[1.583, 0, 0]}
          scale={0.37}
        />
        <group name='middle' position={[0, 0.294, 0.748]} scale={[1, 0.401, 1]}>
          <mesh
            name='goldPlate'
            castShadow
            receiveShadow
            geometry={nodes.goldPlate.geometry}
            material={materials.gold}
            position={[0, -0.294, -0.748]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
          <mesh
            name='goldPlate002'
            castShadow
            receiveShadow
            geometry={nodes.goldPlate002.geometry}
            material={materials.gold}
            position={[0, -0.734, -0.748]}
            scale={[1, 2.496, 1]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
          <mesh
            name='Plane001'
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.wood}
            position={[0, -0.294, -0.748]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
        </group>
        <group name='sculpture' position={[0, 2.137, 0]}>
          <group name='badge' position={[0.555, -0.331, 0.17]}>
            <mesh
              name='Circle'
              castShadow
              receiveShadow
              geometry={nodes.Circle.geometry}
              material={materials.purple}
              scale={0.379}
            >
              {hovered && <Outlines thickness={0.05} color='lightblue' />}
            </mesh>
            <mesh
              name='goldBadge'
              castShadow
              receiveShadow
              geometry={nodes.goldBadge.geometry}
              material={materials.gold}
              position={[0, 0, 0.132]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.379}
            >
              {hovered && <Outlines thickness={0.05} color='lightblue' />}
            </mesh>
            <mesh
              name='Plane005'
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials.white}
              position={[0, 0, 0.13]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={0.379}
            >
              {hovered && <Outlines thickness={0.05} color='lightblue' />}
            </mesh>
            <mesh
              name='Plane006'
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.red}
              position={[0.092, -0.306, 0.111]}
              rotation={[-0.033, 0.184, 0.181]}
              scale={0.379}
            >
              {hovered && <Outlines thickness={0.05} color='lightblue' />}
            </mesh>
          </group>
          <mesh
            name='goldLogo'
            castShadow
            receiveShadow
            geometry={nodes.goldLogo.geometry}
            material={materials.gold}
            rotation={[Math.PI / 2, 0, 0]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
        </group>
        <group name='up' position={[0, 0.694, 0.439]}>
          <mesh
            name='goldBase001'
            castShadow
            receiveShadow
            geometry={nodes.goldBase001.geometry}
            material={materials.gold}
            position={[0, -0.694, -0.439]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
          <mesh
            name='goldPlate001'
            castShadow
            receiveShadow
            geometry={nodes.goldPlate001.geometry}
            material={materials.gold}
            position={[0, -0.694, -0.439]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
          <mesh
            name='Plane'
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.wood}
            position={[0, -0.694, -0.439]}
          >
            {hovered && <Outlines thickness={0.05} color='lightblue' />}
          </mesh>
        </group>
        <mesh
          name='goldBase'
          castShadow
          receiveShadow
          geometry={nodes.goldBase.geometry}
          material={materials.gold}
        >
          {hovered && <Outlines thickness={0.05} color='lightblue' />}
        </mesh>
        <mesh
          name='Plane002'
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.wood}
        >
          {hovered && <Outlines thickness={0.05} color='lightblue' />}
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload('/assets/creative/models/trophy.glb');
export default React.memo(Trophy);
