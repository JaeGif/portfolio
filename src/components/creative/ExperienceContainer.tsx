import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import PortalExperience from '@/components/creative/Experiences/PortalExperience';
import uniqid from 'uniqid';
import { useTheme } from 'next-themes';
import useMediaQuery from '@/hooks/useMediaQuery';

function ExperienceContainer() {
  const [currentExperience, setCurrentExperience] = useState('Portal');
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isMobile = useMediaQuery('(max-width: 800px)');

  const displayExperience = () => {
    switch (currentExperience) {
      case 'Portal':
        return <PortalExperience />;
      case 'Fireworks':
        return (
          <iframe
            className='h-full w-full'
            src='https://fireworks-eta.vercel.app/'
          />
        );
      case 'GP-GPU Animation':
        return (
          <iframe
            className='h-full w-full'
            src={
              isMobile
                ? 'https://gpgpu-flow-field.vercel.app/'
                : 'https://gpgpu-flow-field.vercel.app/#debug'
            }
          />
        );
      case 'Morphing':
        return (
          <iframe
            className='h-full w-full'
            src={
              isMobile
                ? 'https://particles-morphing-indol.vercel.app/'
                : 'https://particles-morphing-indol.vercel.app/#debug'
            }
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
            src={
              isMobile
                ? 'https://earth-five-iota.vercel.app/'
                : 'https://earth-five-iota.vercel.app/#debug'
            }
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
    'Fireworks',
  ];
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center gap-5'>
        {isMobile ? (
          <h1 className='text-5xl'>Creativity</h1>
        ) : (
          <h1 className='text-5xl'>Creative Experiences</h1>
        )}
        <span className='flex gap-5 flex-wrap'>
          {isMobile ? (
            <select
              value={currentExperience}
              onChange={(e) => {
                setCurrentExperience(e.target.value);
              }}
              className='w-full p-2 text-center rounded-md'
            >
              {experiences.map((exp, i) => (
                <option
                  value={exp}
                  key={uniqid()}
                  className={`${
                    currentExperience === exp
                      ? 'text-blue-500 hover:text-pink-500 hover:cursor-pointer'
                      : 'hover:text-pink-500 hover:cursor-pointer'
                  }`}
                >
                  {exp}
                </option>
              ))}
            </select>
          ) : (
            experiences.map((exp, i) => (
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
            ))
          )}
        </span>
        <p
          className={`text-sm text-gray-${currentTheme === 'dark' ? 100 : 300}`}
        >
          <em className='text-pink-500 not-italic'>Hint: </em>try clicking,
          dragging, and zooming to interact with the scenes
        </p>
        <div className='w-screen md:w-full h-[75vh] flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 md:dark:border-blue-300 border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 items-center'>
          <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-blue-300 rounded-xl -z-10'></div>
          {displayExperience()}
        </div>
      </div>
    </>
  );
}

export default ExperienceContainer;
