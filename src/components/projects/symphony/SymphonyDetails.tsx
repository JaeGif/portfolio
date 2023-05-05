/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import SymphonyLinks from './SymphonyLinks';
import SymphonyStack from './SymphonyStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function SymphonyDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>1.</h1>
      <div className='flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-950 rounded-md mt-5 p-4'>
        <div className='hidden sm:flex absolute top-5 left-5 h-full w-full bg-gray-950 dark:bg-white rounded-lg -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Symphony</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Instant Messaging App
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 flex flex-col gap-4'>
              <div>
                <h2 className='font-semibold text-2xl'>About</h2>
                <p>
                  Symphony is a full stack instant messaging application built
                  to practice using industry standard technologies. This project
                  helped me learn{' '}
                  <em className='text-blue-500 not-italic'>TypeScript</em>,{' '}
                  <em className='text-blue-500  not-italic'>TailwindCSS</em>,{' '}
                  <em className='text-blue-500  not-italic'>Framer Motion</em>,
                  and more advanced uses of{' '}
                  <em className='text-blue-500  not-italic'>React Router</em>.
                  Core features include infinite messaging queries, exclusive
                  rooms, and markdown support.
                </p>
                <br />
                <p>
                  Symphony also provided a chance to flex my creative front-end
                  skills as I reverse-engineered the login page animations from
                  <Link href='https://www.arena.net/en' target='_blank'>
                    <em className='text-blue-500 not-italic'> Arena.net</em>
                  </Link>
                  , making my own animation with{' '}
                  <em className='not-italic text-blue-500 '>Photoshop</em>.
                </p>
              </div>
              <SymphonyLinks />
              <SymphonyStack />
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
            className='rounded-xl overflow-hidden shadow-md h-96'
          >
            <img
              className='h-full max-w-fit'
              src='/assets/images/symphony/mobile.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default SymphonyDetails;
