import React from 'react';
import gsap from 'gsap';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import * as THREE from 'three';

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

  return <></>;
}

export default ProceduralTerrain;
