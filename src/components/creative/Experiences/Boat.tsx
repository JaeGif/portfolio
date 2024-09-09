import React from 'react';
import gpgpuFragment from '../projects/island/shaders/leaves/fragment.glsl';
import gpgpuVertex from '../projects/island/shaders/leaves/vertex.glsl';
import gpgpuParticle from '../projects/island/shaders/leaves/particle.glsl';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

type BaseGeometryType = {
  instance?: THREE.BufferGeometry;
  count?: number;
};

type GpgpuType = {
  size?: number;
  computation?: GPUComputationRenderer;
  particlesVariable?: any;
  debug?: any;
};

type ParticlesType = {
  geometry?: THREE.BufferGeometry;
  material?: THREE.ShaderMaterial;
};

function Boat() {
  // gl is instance of renderer
  const { gl } = useThree();
  const nodes = useGLTF('/assets/creative/models/boat.glb').scene
    .children[0] as any;
  const baseGeometry: BaseGeometryType = {};

  baseGeometry.instance = nodes.geometry;
  baseGeometry.count = baseGeometry.instance!.attributes.position.count;

  // GP-GPU
  const gpgpu: GpgpuType = {};
  gpgpu.size = Math.ceil(Math.sqrt(baseGeometry.count));
  gpgpu.computation = new GPUComputationRenderer(gpgpu.size, gpgpu.size, gl);

  // Base Particles
  const baseParticlesTexture = gpgpu.computation.createTexture();

  for (let i = 0; i < baseGeometry.count; i++) {
    const i3 = i * 3;
    const i4 = i * 4;
    baseParticlesTexture.image.data[i4 + 0] =
      baseGeometry.instance!.attributes.position.array[i3 + 0];
    baseParticlesTexture.image.data[i4 + 1] =
      baseGeometry.instance!.attributes.position.array[i3 + 1];
    baseParticlesTexture.image.data[i4 + 2] =
      baseGeometry.instance!.attributes.position.array[i3 + 2];
    baseParticlesTexture.image.data[i4 + 3] = Math.random();
  }

  // particles vars
  gpgpu.particlesVariable = gpgpu.computation.addVariable(
    'uParticles',
    gpgpuParticle,
    baseParticlesTexture
  );

  gpgpu.computation.setVariableDependencies(gpgpu.particlesVariable, [
    gpgpu.particlesVariable,
  ]);
  // uniforms
  gpgpu.particlesVariable.material.uniforms.uTime = new THREE.Uniform(0);
  gpgpu.particlesVariable.material.uniforms.uDeltaTime = new THREE.Uniform(16);
  gpgpu.particlesVariable.material.uniforms.uBase = new THREE.Uniform(
    baseParticlesTexture
  );
  gpgpu.computation.setVariableDependencies(gpgpu.particlesVariable, [
    gpgpu.particlesVariable,
  ]);
  // uniforms
  gpgpu.particlesVariable.material.uniforms.uTime = new THREE.Uniform(0);
  gpgpu.particlesVariable.material.uniforms.uDeltaTime = new THREE.Uniform(16);
  gpgpu.particlesVariable.material.uniforms.uBase = new THREE.Uniform(
    baseParticlesTexture
  );
  gpgpu.particlesVariable.material.uniforms.uFlowFieldInfluence =
    new THREE.Uniform(0.3);
  gpgpu.particlesVariable.material.uniforms.uFlowFieldStrength =
    new THREE.Uniform(3.0);
  gpgpu.particlesVariable.material.uniforms.uFlowFieldFrequency =
    new THREE.Uniform(0.2);

  gpgpu.computation.init();
  gpgpu.debug = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
    new THREE.MeshBasicMaterial({
      map: gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable)
        .texture,
    })
  );
  gpgpu.debug.position.x = 3;
  gpgpu.debug.visible = false;

  const particles: ParticlesType = {};

  // geometry
  const particlesUvArray = new Float32Array(baseGeometry.count * 2);
  const sizesArray = new Float32Array(baseGeometry.count);

  for (let y = 0; y < gpgpu.size; y++) {
    for (let x = 0; x < gpgpu.size; x++) {
      const i = y * gpgpu.size + x;

      const i2 = i * 2;

      // normalize the uv
      const uvX = (x + 0.5) / gpgpu.size; // sample from the center of each pixel
      const uvY = (y + 0.5) / gpgpu.size;

      particlesUvArray[i2 + 0] = uvX;
      particlesUvArray[i2 + 1] = uvY;

      sizesArray[i] = Math.random() * 1.25; // for randomized size
    }
  }

  particles.geometry = new THREE.BufferGeometry();
  particles.geometry.setDrawRange(0, baseGeometry.count);
  particles.geometry.setAttribute(
    'aParticlesUv',
    new THREE.BufferAttribute(particlesUvArray, 2)
  );
  particles.geometry.setAttribute(
    'aColor',
    baseGeometry.instance!.attributes.color
  );
  particles.geometry.setAttribute(
    'aSize',
    new THREE.BufferAttribute(sizesArray, 1)
  );

  // Material
  particles.material = new THREE.ShaderMaterial({
    vertexShader: gpgpuVertex,
    fragmentShader: gpgpuFragment,
    uniforms: {
      uSize: new THREE.Uniform(0.07),
      uResolution: new THREE.Uniform(
        new THREE.Vector2(
          window.innerWidth * Math.min(window.devicePixelRatio, 2),
          window.innerHeight * Math.min(window.devicePixelRatio, 2)
        )
      ),
      uParticlesTexture: new THREE.Uniform(baseParticlesTexture),
    },
  });

  useFrame((state, delta) => {
    if (!gpgpu.computation) return;
    if (!particles.material) return;
    gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = delta;
    gpgpu.particlesVariable.material.uniforms.uTime.value =
      state.clock.elapsedTime;

    // gpgpu update
    gpgpu.computation.compute();
    // update uniform after compute
    particles.material.uniforms.uParticlesTexture.value =
      gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable).texture;
  });

  return (
    <>
      <points
        position={[-1.5, -1, 0]}
        geometry={particles.geometry}
        material={particles.material}
      />
    </>
  );
}

export default React.memo(Boat);
