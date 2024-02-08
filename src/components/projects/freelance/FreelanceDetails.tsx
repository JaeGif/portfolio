/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import FreelanceLinks from './FreelanceLinks';
import FreelanceStack from './FreelanceStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';
import FreelanceTestimonial from './FreelanceTestimonial';

function FreelanceDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>5.</h1>
      <div className='flex flex-col sm:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4 items-center'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Freelance Project</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Portfolio
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div className=''>
                <h2 className='font-semibold text-2xl'>About</h2>
                <p>
                  This is a recent freelance project I built for a grad student
                  transitioning into professional work. It&apos;s built with{' '}
                  <em className='text-blue-500 not-italic'>Typescript</em>,{' '}
                  <em className='text-blue-500 not-italic'>Next.js</em>,{' '}
                  <em className='text-blue-500 not-italic'>TailwindCSS</em> and{' '}
                  <em className='text-blue-500 not-italic'>Framer Motion</em>.
                </p>
                <br />
                <p>
                  I worked closely with the client on the specs for this project
                  and we collaboratively determined what components and designs
                  make the most sense for their field. I built several
                  iterations of custom components, selected and fully fleshed
                  out our ideas.
                </p>
                <br />
                <p>
                  The project is well documented, with instructions and a basic
                  CMS for the client to edit their own site with minimal CS
                  knowledge required. The site is published on{' '}
                  <em className='text-blue-500 not-italic'>Digital Ocean</em>.
                </p>
              </div>
              <FreelanceLinks />
              {/*               <FreelanceTestimonial />
               */}{' '}
              <FreelanceStack />
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
              src='/assets/images/freelance/mobile.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default FreelanceDetails;
