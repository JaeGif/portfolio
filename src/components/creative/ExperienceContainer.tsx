import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import PortalExperience from '@/components/creative/Experiences/PortalExperience';
import uniqid from 'uniqid';
import { useTheme } from 'next-themes';
function ExperienceContainer() {
  const [currentExperience, setCurrentExperience] = useState('Portal');
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const displayExperience = () => {
    switch (currentExperience) {
      case 'Portal':
        return <PortalExperience />;
      case 'Laptop':
        return (
          <iframe
            className='h-full w-full'
            src='https://laptop-beryl.vercel.app/'
          />
        );
      case 'GP-GPU Animation':
        return (
          <iframe
            className='h-full w-full'
            src='https://gpgpu-flow-field.vercel.app/#debug'
          />
        );
      case 'Morphing':
        return (
          <iframe
            className='h-full w-full'
            src='https://particles-morphing-indol.vercel.app/#debug'
          />
        );
      case 'Terrain':
        return (
          <iframe
            className='h-full w-full'
            src='https://procedural-terrain-mu.vercel.app/'
          />
        );
      case 'Cursor Effects':
        return (
          <iframe
            className='h-full w-full'
            src='https://particles-cursor-animation-inky.vercel.app/'
          />
        );
      case 'Earth':
        return (
          <iframe
            className='h-full w-full'
            src='https://earth-five-iota.vercel.app/#debug'
          />
        );
      default:
        return <PortalExperience />;
    }
  };
  const experiences = [
    'Portal',
    'Terrain',
    'GP-GPU Animation',
    'Earth',
    'Morphing',
    'Cursor Effects',
    'Laptop',
  ];
  return (
    <>
      <div className='w-full h-screen flex justify-center flex-col items-center gap-5'>
        <h1 className='text-3xl'>Creative Experiences</h1>
        <span className='flex gap-5 flex-wrap'>
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
        <p
          className={`text-sm text-gray-${currentTheme === 'dark' ? 100 : 300}`}
        >
          <em className='text-pink-500 not-italic'>Hint: </em>try using your
          mouse or tap to interact with the scenes
        </p>
        <div className='w-full h-screen flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-blue-300 border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 items-center'>
          <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-blue-300 rounded-xl -z-10'></div>
          {displayExperience()}
        </div>
      </div>
    </>
  );
}

export default ExperienceContainer;
