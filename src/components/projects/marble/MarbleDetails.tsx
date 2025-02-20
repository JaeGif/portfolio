/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import MarbleLinks from './MarbleLinks';
import MarbleStack from './MarbleStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function MarbleDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>1.</h1>
      <div className='flex flex-col lg:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4 items-center'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Marble Run</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              3D Platforming Game
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div className=''>
                <h2 className='font-semibold text-2xl'>About</h2>
                <p>
                  Marble Run is a full-stack 3D platforming game built with{' '}
                  <em className='text-blue-500 not-italic'>Three.js</em> and{' '}
                  <em className='text-blue-500 not-italic'>
                    React Three Fiber
                  </em>
                  . The game is progressively difficult with a variety of
                  obstacles made with{' '}
                  <em className='text-blue-500 not-italic'>Blender</em> and
                  stylized with custom shaders using{' '}
                  <em className='text-blue-500 not-italic'>GLSL</em>.
                </p>
                <br />
                <p>
                  The game features 2 difficulty modes, 30 complete and
                  interesting levels, an ever expanding list of unique
                  obstacles, a highscore functionality and smooth seamless
                  gameplay.
                </p>
                <br />
                <p>
                  Marble run is currently in a development state, as I work on
                  the ability to make and share custom stages, 20 new levels,
                  and multiplayer online support via websockets using Go's{' '}
                  <em className='text-blue-500 not-italic'>Gorilla</em>{' '}
                  framework.
                </p>
              </div>
              <MarbleLinks />
              <MarbleStack />
            </div>
          </div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <motion.div
            whileHover={{
              x: isLg ? -100 : 0,
              scale: isLg ? 1.2 : 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              x: isLg ? -100 : 0,
              scale: isLg ? 1.2 : 1.1,
              transition: { duration: 0.2 },
            }}
            className='rounded-xl overflow-hidden shadow-lg'
          >
            <img
              className='max-w-full object-contain'
              src='/assets/images/marble/desktop.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default MarbleDetails;
