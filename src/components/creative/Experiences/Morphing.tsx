import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import particlesVertexShader from './shaders/particles/vertex.glsl';
import particlesFragmentShader from './shaders/particles/fragment.glsl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useFrame } from '@react-three/fiber';

// Loaders
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

function Morphing() {
  const [particles, setParticles] = useState<any>({});
  // Load models
  useEffect(() => {
    gltfLoader.load('/assets/creative/models/morphing.glb', (gltf) => {
      const particlesData: any = {};
      particlesData.index = 0;
      particlesData.maxCount = 0; // size of the biggest gltf mesh count

      // positions
      const positions = gltf.scene.children.map(
        (child: any) => child.geometry.attributes.position
      );
      for (const position of positions) {
        if (position.count > particlesData.maxCount)
          particlesData.maxCount = position.count;
      }
      // update positions arrays to have same vals as max count
      particlesData.positions = [];
      for (const position of positions) {
        const originalArray = position.array;
        if (originalArray.length === particlesData.maxCount) continue;
        const newArray = new Float32Array(particlesData.maxCount * 3);

        for (let i = 0; i < particlesData.maxCount; i++) {
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
        particlesData.positions.push(
          new THREE.Float32BufferAttribute(newArray, 3)
        );
      }
      // random sizes
      const sizesArray = new Float32Array(particlesData.maxCount);
      for (let i = 0; i < particlesData.maxCount; i++) {
        sizesArray[i] = Math.random(); // gives random normalized val
      }

      // Geometry
      particlesData.geometry = new THREE.BufferGeometry();
      particlesData.geometry.setAttribute(
        'position',
        particlesData.positions[particlesData.index]
      );
      particlesData.geometry.setAttribute(
        'aSize',
        new THREE.BufferAttribute(sizesArray, 1)
      );

      (particlesData.colorA = '#ff7300'), (particlesData.colorB = '#0091ff');
      // Material
      particlesData.material = new THREE.ShaderMaterial({
        vertexShader: particlesVertexShader,
        fragmentShader: particlesFragmentShader,
        uniforms: {
          uSize: new THREE.Uniform(0.4),
          uResolution: new THREE.Uniform(
            new THREE.Vector2(
              window.innerWidth * Math.min(window.devicePixelRatio, 2),
              window.innerHeight * Math.min(window.devicePixelRatio, 2)
            )
          ),
          uProgress: new THREE.Uniform(0),
          uColorA: new THREE.Uniform(new THREE.Color(particlesData.colorA)),
          uColorB: new THREE.Uniform(new THREE.Color(particlesData.colorB)),
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      //methods
      particlesData.morph = (index: number) => {
        particlesData.geometry.attributes.position =
          particlesData.positions[particlesData.index];
        particlesData.geometry.attributes.aPositionTarget =
          particlesData.positions[index];

        // save index
        particlesData.index = index;
      };
      particlesData.morph0 = () => {
        particlesData.morph(0);
      };
      particlesData.morph1 = () => {
        particlesData.morph(1);
      };
      particlesData.morph2 = () => {
        particlesData.morph(2);
      };
      particlesData.morph3 = () => {
        particlesData.morph(3);
      };

      particlesData.loaded = true;
      setParticles(particlesData);
    });
  }, []);
  const particlesRef = useRef<any>(null);
  /*   useEffect(() => {
    // animate uProgress
    if (particlesRef.current)
      gsap.fromTo(
        particlesRef.current.material.uniforms.uProgress,
        { value: 0 },
        { value: 1, duration: 3, ease: 'linear' }
      );
  }, [particlesRef.current]); */
  let sum = 0;

  useFrame((state, delta) => {
    sum += delta;
    if (particlesRef.current)
      particlesRef.current.material.uniforms.uProgress = sum;
    if (sum > 3) {
      console.log('reset', sum);
      sum = 0;
    }
  });

  /*   const swapModels = () => {
    if (particles)
      setInterval(() => {
        if (particles.index >= particles.positions.length - 1)
          particles.morph(0);
        else particles.morph(particles.index + 1);
      }, 4000);
  }; */

  /*   useEffect(() => {
    console.log('firing');

    const intervalId = setInterval(() => {
      if (!particles) return;
      if (particles.index >= particles.positions.length - 1) particles.morph(0);
      else particles.morph(particles.index + 1);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []); */
  return (
    <>
      {particles.loaded && (
        <points
          ref={particlesRef}
          geometry={particles.geometry}
          material={particles.material}
        />
      )}
    </>
  );
}

export default Morphing;
