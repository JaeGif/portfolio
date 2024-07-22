import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import PortalExperience from '@/components/creative/Experiences/PortalExperience';
import { Perf } from 'r3f-perf';
import uniqid from 'uniqid';
function ExperienceContainer() {
  const [currentExperience, setCurrentExperience] = useState('Portal');

  const displayExperience = () => {
    switch (currentExperience) {
      case 'Portal':
        return <PortalExperience />;
      case 'Laptop':
        return (
          <mesh>
            <sphereGeometry />
          </mesh>
        );
      default:
        return <PortalExperience />;
    }
  };
  const experiences = ['Portal', 'Laptop'];
  return (
    <>
      <div className='w-full h-full flex justify-center flex-col items-center'>
        <span className='flex gap-5'>
          {experiences.map((exp, i) => (
            <p
              onClick={() => {
                setCurrentExperience(exp);
              }}
              key={uniqid()}
              className={`${
                currentExperience === exp
                  ? 'text-blue-500 hover:text-pink-500 hover:cursor-pointer'
                  : 'hover:text-pink-500 hover:cursor-pointer'
              }`}
            >
              {exp}
            </p>
          ))}
        </span>
        <div className='w-full h-full flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-blue-300 border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 items-center'>
          <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-blue-300 rounded-xl -z-10'></div>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{
              fov: 45,
              near: 0.01,
              far: 200,
              position: [3, 5, 11],
            }}
          >
            <Perf />
            {displayExperience()}
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default ExperienceContainer;
