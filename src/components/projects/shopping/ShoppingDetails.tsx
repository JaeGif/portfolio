/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import ShoppingLinks from './ShoppingLinks';
import ShoppingStack from './ShoppingStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function ShoppingDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>6.</h1>
      <div className='flex flex-col lg:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4 items-center'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Shopping Cart</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Fake Store
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div>
                <h2 className='font-bold text-2xl'>About</h2>
                <p>
                  This is a cyberpunk themed fake store created using{' '}
                  <em className='text-blue-500 not-italic'>React</em>. This cart
                  was my first project built with React and one of my first
                  projects to be mobile responsive and include some special
                  effects made with vanilla{' '}
                  <em className='text-blue-500 not-italic'>CSS3</em>.
                </p>
                <br />
                <p>
                  The focus in this project was on making an interesting UI with
                  some custom effects, while properly utilizing React to reflect
                  live updates to user interactions.
                </p>
              </div>
              <ShoppingLinks />
              <ShoppingStack />
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
              src='/assets/images/shopping/mobile.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default ShoppingDetails;
