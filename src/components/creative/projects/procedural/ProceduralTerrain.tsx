import React, { useRef } from 'react';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import terrainVertexShader from './shaders/terrain/vertex.glsl';
import terrainFragmentShader from './shaders/terrain/fragment.glsl';
import waterVertexShader from './shaders/water/vertex.glsl';
import waterFragmentShader from './shaders/water/fragment.glsl';

function ProceduralTerrain() {
  const { scene } = useGLTF('/assets/creative/models/planeUV.glb');
  const plane = useRef<any>(null);
  // set plane
  scene.scale.setScalar(0.5);
  scene.position.y = 0.7;
  scene.position.x = 0;
  scene.position.z = 0;
  scene.rotation.y = Math.PI;

  const skins = useTexture({
    map: '/assets/creative/textures/procedural/oak_diff.jpg',
    arm: '/assets/creative/textures/procedural/oak_arm.jpg',
  });

  const uniforms = {
    uPositionFrequency: new THREE.Uniform(0.2),
    uElevationCrush: new THREE.Uniform(2.0),
    uStrength: new THREE.Uniform(2.0),
    uWarpStrength: new THREE.Uniform(0.5),
    uWarpFrequency: new THREE.Uniform(5.0),
    uTime: new THREE.Uniform(0),

    uColorWaterDeep: new THREE.Uniform(new THREE.Color('#002b3d')),
    uColorWaterSurface: new THREE.Uniform(new THREE.Color('#66a8ff')),
    uColorSand: new THREE.Uniform(new THREE.Color('#ffe894')),
    uColorGrass: new THREE.Uniform(new THREE.Color('#85d534')),
    uColorSnow: new THREE.Uniform(new THREE.Color('#ffffff')),
    uColorRock: new THREE.Uniform(new THREE.Color('#bfbd8d')),
  };

  // terrain geom
  const geometry = new THREE.PlaneGeometry(10, 10, 500, 500);
  geometry.deleteAttribute('uv');
  geometry.deleteAttribute('normal');

  geometry.rotateX(-Math.PI / 2);
  // Material
  const terrainMaterial = new CustomShaderMaterial({
    // csm
    baseMaterial: THREE.MeshStandardMaterial,
    silent: true,
    vertexShader: terrainVertexShader,
    fragmentShader: terrainFragmentShader,
    uniforms: uniforms,

    // msm
    metalness: 0,
    roughness: 0.5,
    color: '#85d534',
  });

  const depthMaterial = new CustomShaderMaterial({
    // csm
    baseMaterial: THREE.MeshDepthMaterial,
    silent: true,
    vertexShader: terrainVertexShader,
    uniforms: uniforms,
    depthPacking: THREE.RGBADepthPacking,
  });

  const waterUniforms = {
    uTime: new THREE.Uniform(0),
    uSmallWavesElevation: new THREE.Uniform(0.02),
    uSmallWavesFrequency: new THREE.Uniform(3.323),
    uSmallWavesSpeed: new THREE.Uniform(0.29),
    uSmallWavesIterations: new THREE.Uniform(4),
  };
  // water

  const water = {
    geometry: new THREE.PlaneGeometry(10, 10, 128, 128),
    material: new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: waterUniforms,
    }),
  };

  // Brushes

  const boardFill = new Brush(new THREE.BoxGeometry(11, 2, 11));
  const boardHole = new Brush(new THREE.BoxGeometry(10, 2.1, 10));

  const evaluator = new Evaluator();
  const board = evaluator.evaluate(boardFill, boardHole, SUBTRACTION);

  board.geometry.clearGroups();
  board.material = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalnessMap: skins.arm,
    roughnessMap: skins.arm,
    aoMap: skins.arm,
    map: skins.map,
  });
  const movePlane = (theta: number) => {
    const angle = Math.sin(theta);
    plane.current.position.z = angle;
  };

  useFrame((state, delta) => {
    uniforms.uTime.value = waterUniforms.uTime.value = state.clock.elapsedTime;
    if (plane.current) movePlane(state.clock.elapsedTime);
  });
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={board.geometry}
        material={board.material}
      />
      <mesh
        receiveShadow
        position-y={-0.075}
        rotation-x={-Math.PI / 2}
        geometry={water.geometry}
        material={water.material}
      />
      <mesh
        receiveShadow
        customDepthMaterial={depthMaterial}
        material={terrainMaterial}
        geometry={geometry}
      />
      <primitive ref={plane} object={scene} />
    </>
  );
}

export default React.memo(ProceduralTerrain);
