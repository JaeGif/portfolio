/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import GradientLinks from './GradientLinks';
import GradientStack from './GradientStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function GradientDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>2.</h1>
      <div className='flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4 items-center'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Gradient Fitness</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Strength Analytics
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div className=''>
                <h2 className='font-semibold text-2xl'>About</h2>
                <p>
                  Gradient is a strength and fitness analytics platform. It
                  features an impressive and responsive UI utilizing{' '}
                  <em className='text-blue-500 not-italic'>TailwindCSS</em> and{' '}
                  <em className='text-blue-500 not-italic'>Framer Motion</em>,
                  with powerful and informative analytics and statistics via{' '}
                  <em className='text-blue-500 not-italic'>Chart.js</em>.
                  Gradient fully utilizes{' '}
                  <em className='text-blue-500 not-italic'>React Query</em> and
                  custom hooks for improved performance.
                </p>
                <br />
                <p>
                  I always wanted a free fitness analytics app, but I could
                  never find one that suited my needs. To that end I developed
                  Gradient to remove all the guesswork from my strength
                  progression. I chose to use{' '}
                  <em className='text-blue-500 not-italic'>PostGreSQL</em>, as
                  the data models are intricately related. The entire
                  application is type-safe using{' '}
                  <em className='text-blue-500 not-italic'>Typescript</em> with{' '}
                  <em className='text-blue-500 not-italic'>React</em> in the
                  client,{' '}
                  <em className='text-blue-500 not-italic'>Express.js</em>{' '}
                  server-side and{' '}
                  <em className='text-blue-500 not-italic'>Prisma</em> with the
                  database.
                </p>
              </div>
              <GradientLinks />
              <GradientStack />
            </div>
          </div>
        </div>
        <div className='flex gap-2 justify-center'>
          <motion.div
            whileHover={{
              x: isLg ? -100 : 0,
              scale: isLg ? 1.5 : 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              x: isLg ? -100 : 0,

              scale: isLg ? 1.5 : 1.1,
              transition: { duration: 0.2 },
            }}
            className='rounded-xl overflow-hidden shadow-lg h-96'
          >
            <img
              className='h-full max-w-fit'
              src='/assets/images/gradient/mobile.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default GradientDetails;
