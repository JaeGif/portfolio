import React from 'react';
import gsap from 'gsap';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import * as THREE from 'three';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import terrainVertexShader from './shaders/terrain/vertex.glsl';
import terrainFragmentShader from './shaders/terrain/fragment.glsl';
import waterVertexShader from './shaders/water/vertex.glsl';
import waterFragmentShader from './shaders/water/fragment.glsl';

function ProceduralTerrain() {
  const { scene, animations } = useGLTF('/assets/creative/models/plane.glb');

  const skins = useTexture({
    map: '/assets/creative/textures/procedural/oak_diff.jpg',
    arm: '/assets/creative/textures/procedural/oak_arm.jpg',
  });

  const geometry = new THREE.PlaneGeometry(10, 10, 500, 500);
  geometry.deleteAttribute('uv');
  geometry.deleteAttribute('normal');

  geometry.rotateX(-Math.PI / 2);

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

  // HERE

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

  // mesh
  const terrain = new THREE.Mesh(geometry, terrainMaterial);
  terrain.castShadow = true;
  terrain.receiveShadow = true;
  terrain.customDepthMaterial = depthMaterial;

  const waterUniforms = {
    uTime: new THREE.Uniform(0),
    uSmallWavesElevation: new THREE.Uniform(0.02),
    uSmallWavesFrequency: new THREE.Uniform(3.323),
    uSmallWavesSpeed: new THREE.Uniform(0.29),
    uSmallWavesIterations: new THREE.Uniform(4),
  };
  // water
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10, 128, 128),
    new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: waterUniforms,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.075;

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

  board.castShadow = true;
  board.receiveShadow = true;

  /*   const clock = new THREE.Clock();

  // add plane movement
  const movePlane = (theta: number) => {
    const angle = Math.sin(theta) / 3;
    plane.position.z = angle;
  };
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    // uniforms
    uniforms.uTime.value = waterUniforms.uTime.value = elapsedTime;
    if (animationMixer) animationMixer.update(elapsedTime);

    // Update controls
    controls.update();

    // animate plane motion
    if (plane) {
      movePlane(elapsedTime);
    }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
 */
  return (
    <>
      <mesh geometry={board.geometry} material={board.material} />
      <primitive object={scene} />
    </>
  );
}

export default ProceduralTerrain;
