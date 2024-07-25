/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioLinks from './PortfolioLinks';
import PortfolioStack from './PortfolioStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function PortfolioDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>2.</h1>
      <div className='flex flex-col lg:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4 items-center'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>This Very Portfolio</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Creative Project Showcase
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div>
                <h2 className='font-bold text-2xl'>About</h2>
                <p>
                  This very site is my portfolio! I like to update it with some
                  more recent projects. Everything I share here is a personal
                  project of some kind. Even projects that seems standard have
                  my own little flair and creative twist.
                </p>
                <br />
                <p>
                  I&apos;ve always had a special place in my heart for creative
                  Awwards sites, and aspire to build one of my own someday. I
                  took the first step toward this goal by completing{' '}
                  <em className='text-pink-500 not-italic'>
                    <Link
                      href={
                        'https://threejs-journey.com/certificate/view/40194'
                      }
                      target='_blank'
                    >
                      Three.js Journey
                    </Link>
                  </em>{' '}
                  and was even featured several times by Bruno Simon.{' '}
                </p>
                <br />
                <p>
                  I built some of the more interesting elements with{' '}
                  <em className='text-blue-500 not-italic'>Framer Motion </em>,{' '}
                  <em className='text-blue-500 not-italic'>Three.js</em>,{' '}
                  <em className='text-blue-500 not-italic'>GLSL</em>, and{' '}
                  <em className='text-blue-500 not-italic'>
                    React Three Fiber - Drei
                  </em>
                  . Check back in here to see my progress on side projects, art,
                  and GLSL shaders.
                </p>
              </div>
              <PortfolioLinks />
              <PortfolioStack />
            </div>
          </div>
        </div>
        {isMd && (
          <div className='flex flex-col gap-4 w-fit items-center'>
            <p className='text-gray-100'>
              <em>Pssst</em>. These are interactive ...
            </p>
            <span className='overflow-hidden rounded-sm'>
              <iframe
                className='h-full max-w-fit'
                src='https://halftone-shading-pi.vercel.app/'
                aria-label='project view iframe'
              />
            </span>
            <span className='overflow-hidden rounded-sm'>
              <iframe
                className='h-full max-w-fit'
                src='https://laptop-beryl.vercel.app/'
                aria-label='project view iframe'
              />
            </span>
            <span className='overflow-hidden rounded-sm'>
              <iframe
                className='h-full max-w-fit'
                src='https://hologram-zeta.vercel.app/'
                aria-label='project view iframe'
              />
            </span>
          </div>
        )}
      </div>
    </span>
  );
}

export default PortfolioDetails;
