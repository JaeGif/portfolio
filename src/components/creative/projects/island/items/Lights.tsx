import React from 'react';
import { GLTFNodesMaterials } from '../types';

function Lights({ nodes, materials }: GLTFNodesMaterials) {
  return (
    <>
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
    </>
  );
}

export default Lights;
