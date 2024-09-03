import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import particlesVertexShader from './shaders/particles/vertex.glsl';
import particlesFragmentShader from './shaders/particles/fragment.glsl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

// Loaders
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

function Morphing() {
  let particles: any = null;
  const [loaded, setLoaded] = useState(false);
  // Load models
  gltfLoader.load('/assets/creative/models/morphing.glb', (gltf) => {
    particles = {};
    particles.index = 0;
    particles.maxCount = 0; // size of the biggest gltf mesh count

    // positions
    const positions = gltf.scene.children.map(
      (child: any) => child.geometry.attributes.position
    );
    for (const position of positions) {
      if (position.count > particles.maxCount)
        particles.maxCount = position.count;
    }
    // update positions arrays to have same vals as max count
    particles.positions = [];
    for (const position of positions) {
      const originalArray = position.array;
      if (originalArray.length === particles.maxCount) continue;
      const newArray = new Float32Array(particles.maxCount * 3);

      for (let i = 0; i < particles.maxCount; i++) {
        const i3 = i * 3;

        if (i3 < originalArray.length) {
          newArray[i3 + 0] = originalArray[i3 + 0];
          newArray[i3 + 1] = originalArray[i3 + 1];
          newArray[i3 + 2] = originalArray[i3 + 2];
        } else {
          const randomIndex = Math.floor(position.count * Math.random()) * 3;

          newArray[i3 + 0] = originalArray[randomIndex + 0];
          newArray[i3 + 1] = originalArray[randomIndex + 1];
          newArray[i3 + 2] = originalArray[randomIndex + 2];
        }
      }
      particles.positions.push(new THREE.Float32BufferAttribute(newArray, 3));
    }
    // random sizes
    const sizesArray = new Float32Array(particles.maxCount);
    for (let i = 0; i < particles.maxCount; i++) {
      sizesArray[i] = Math.random(); // gives random normalized val
    }

    // Geometry
    particles.geometry = new THREE.BufferGeometry();
    particles.geometry.setAttribute(
      'position',
      particles.positions[particles.index]
    );
    particles.geometry.setAttribute(
      'aSize',
      new THREE.BufferAttribute(sizesArray, 1)
    );

    (particles.colorA = '#ff7300'), (particles.colorB = '#0091ff');
    // Material
    particles.material = new THREE.ShaderMaterial({
      vertexShader: particlesVertexShader,
      fragmentShader: particlesFragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(0.4),
        uProgress: new THREE.Uniform(0),
        uColorA: new THREE.Uniform(new THREE.Color(particles.colorA)),
        uColorB: new THREE.Uniform(new THREE.Color(particles.colorB)),
      },
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    //methods
    particles.morph = (index: number) => {
      particles.geometry.attributes.position =
        particles.positions[particles.index];
      particles.geometry.attributes.aPositionTarget =
        particles.positions[index];

      // animate uProgress
      gsap.fromTo(
        particles.material.uniforms.uProgress,
        { value: 0 },
        { value: 1, duration: 3, ease: 'linear' }
      );

      // save index
      particles.index = index;
    };
    particles.morph0 = () => {
      particles.morph(0);
    };
    particles.morph1 = () => {
      particles.morph(1);
    };
    particles.morph2 = () => {
      particles.morph(2);
    };
    particles.morph3 = () => {
      particles.morph(3);
    };
  });

  const swapModels = () => {
    setInterval(() => {
      if (particles.index >= particles.positions.length - 1) particles.morph(0);
      else particles.morph(particles.index + 1);
    }, 4000);
  };

  swapModels();
  useEffect(() => {
    if (particles) setLoaded(true);
  }, [particles]);

  return (
    <>
      {loaded && particles ? (
        <points geometry={particles.geometry} material={particles.material} />
      ) : (
        <mesh>
          <meshBasicMaterial color={'red'} /> <boxGeometry args={[1, 1, 1]} />
        </mesh>
      )}
    </>
  );
}

export default Morphing;
