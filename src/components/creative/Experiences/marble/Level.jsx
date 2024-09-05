import React, { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' });
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' });
const speedMaterial = new THREE.MeshStandardMaterial({ color: 'blue' });

export function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        scale={[4, 0.2, 4]}
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
      />
    </group>
  );
}

export function BlockEnd({ position = [0, 0, 0] }) {
  const hamburger = useGLTF('/assets/creative/models/trophy.glb');
  // hamburger shadows

  const goalRef = useRef();

  useFrame((state) => {
    goalRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });
  return (
    <group position={position}>
      <mesh
        scale={[4, 0.3, 4]}
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
      />
      <Float rotationIntensity={0.5}>
        <group ref={goalRef}>
          <primitive object={hamburger.scene} scale={0.5} />
        </group>
      </Float>
    </group>
  );
}

export function BlockSpinner({ position = [0, 0, 0] }) {
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );

  const obstacleRef = useRef();
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime();
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    obstacleRef.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      <mesh
        scale={[4, 0.2, 4]}
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
      />
      <RigidBody
        ref={obstacleRef}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
        />
      </RigidBody>
    </group>
  );
}

export function BlockSpeed({ position = [0, 0, 0] }) {
  // when player crosses this block they get a temporary acceleration
  const obstacleRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
  });

  return (
    <group position={position}>
      <mesh
        scale={[4, 0.2, 4]}
        geometry={boxGeometry}
        material={speedMaterial}
        position={[0, -0.1, 0]}
      />
    </group>
  );
}

function Bounds({ length = 1 }) {
  return (
    <>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        {/* // remove walls way more fun */}
        {/*        <mesh
          position={[2.15, 0.75, -(length * 2) + 2]}
          scale={[0.3, 1.5, 4 * length]}
          geometry={boxGeometry}
          material={wallMaterial}
          castShadow
        />
        <mesh
          position={[-2.15, 0.75, -(length * 2) + 2]}
          scale={[0.3, 1.5, 4 * length]}
          geometry={boxGeometry}
          material={wallMaterial}
          receiveShadow
        />
        <mesh
          position={[0, 0.75, -(length * 4) + 2]}
          scale={[4, 1.5, 0.3]}
          geometry={boxGeometry}
          material={wallMaterial}
          castShadow
        /> */}
        <CuboidCollider
          restitution={0.2}
          friction={1}
          // friction so the ball can roll
          args={[2, 0.1, 2 * length]}
          position={[0, -0.1, -(length * 2) + 2]}
        />
      </RigidBody>
    </>
  );
}

function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      <BlockSpeed position={[0, 0, -4]} />
      <BlockSpinner position={[0, 0, -8]} />
      <BlockEnd position={[0, 0, -12]} />
      <Bounds length={1} />
    </>
  );
}

export default Level;
