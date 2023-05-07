/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import InstagramLinks from './InstagramLinks';
import InstagramStack from './InstagramStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function InstagramDetails() {
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
            <h1 className='text-3xl'>Totally Not Instagram</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Instagram Clone
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div className=''>
                <h2 className='font-semibold text-2xl'>About</h2>
                <p>
                  Totally Not Instagram is a full stack instagram clone. The
                  final product has most of the key features of Instagram,
                  including photo filters, following and notification systems,
                  and CRUD operations for posts and users. This was my first
                  true full stack application, utilizing my own REST API built
                  with <em className='text-blue-500 not-italic'>Express.js</em>.
                </p>
                <br />
                <p>
                  This was the first project that forced me well outside of my
                  comfortable tech stack, I learned{' '}
                  <em className='text-blue-500  not-italic'>React Query</em>,{' '}
                  <em className='text-blue-500  not-italic'>Vite</em>, and{' '}
                  <em className='text-blue-500  not-italic'>Mongoose</em> to
                  finish the project. Authorization is handled by{' '}
                  <em className='text-blue-500  not-italic'>Passport.js</em>{' '}
                  using JWT&apos;s.
                </p>
              </div>
              <InstagramLinks />
              <InstagramStack />
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
              src='/assets/images/instagram/mobile.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default InstagramDetails;
