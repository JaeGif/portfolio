import React from 'react';
import gsap from 'gsap';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import * as THREE from 'three';
import { useGLTF, useTexture, shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';

const terrainMaterial = shaderMaterial(
  {
    uPixelRatio: Math.min(window.devicePixelRatio, 2),
    uTime: 0,
  },
  firefliesVertexShader,
  firefliesFragmentShader
);

extend({ FirefliesMaterial });

function ProceduralTerrain() {
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
  const material = new CustomShaderMaterial({
    // csm
    baseMaterial: THREE.MeshStandardMaterial,
    silent: true,
    vertexShader: terrainVertex,
    fragmentShader: terrainFragment,
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
    vertexShader: terrainVertex,
    uniforms: uniforms,

    depthPacking: THREE.RGBADepthPacking,
  });

  // plane whee
  let plane = null;
  gltfLoader.load('./models/planeUV.glb', (gltf) => {
    plane = gltf.scene;
    // cast shadows
    plane.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });

    animationMixer = new THREE.AnimationMixer(plane);
    const action = animationMixer.clipAction(gltf.animations[0]);
    action.play();
    plane.scale.setScalar(0.125);
    plane.position.y = 0.7;
    plane.position.x = 0;
    plane.position.z = 0;
    plane.rotation.y = Math.PI;
    scene.add(plane);
  });

  // mesh
  const terrain = new THREE.Mesh(geometry, material);
  terrain.castShadow = true;
  terrain.receiveShadow = true;
  terrain.customDepthMaterial = depthMaterial;

  scene.add(terrain);

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
      vertexShader: waterVertex,
      fragmentShader: waterFragment,
      uniforms: waterUniforms,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.075;

  scene.add(water);

  // Brushes

  const boardFill = new Brush(new THREE.BoxGeometry(11, 2, 11));
  const boardHole = new Brush(new THREE.BoxGeometry(10, 2.1, 10));
  // boardHole.position.y = 0.2;
  // boardHole.updateMatrixWorld();

  const evaluator = new Evaluator();
  const board = evaluator.evaluate(boardFill, boardHole, SUBTRACTION);

  board.geometry.clearGroups();
  board.material = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalnessMap: armWood,
    roughnessMap: armWood,
    aoMap: armWood,
    map: diffWood,
  });

  board.castShadow = true;
  board.receiveShadow = true;

  scene.add(board);

  const clock = new THREE.Clock();

  // add plane movement
  const movePlane = (theta) => {
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

  return <></>;
}

export default ProceduralTerrain;
