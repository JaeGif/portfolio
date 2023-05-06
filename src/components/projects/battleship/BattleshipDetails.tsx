/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import BattleshipLinks from './BattleshipLinks';
import BattleshipStack from './BattleshipStack';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

function BattleshipDetails() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <span className='flex w-full p-2 sm:p-5 gap-5'>
      <h1 className='text-7xl hidden sm:flex w-20'>3.</h1>
      <div className='flex flex-col lg:flex-row relative sm:w-5/6 shadow-md border-2 dark:border-white border-gray-950 bg-white dark:bg-gray-800 rounded-md mt-5 p-4'>
        <div className='hidden sm:flex absolute top-3 left-3 h-full w-full bg-gray-950 dark:bg-white rounded-xl -z-10'></div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Totally Not Battleship</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Battleship Game
            </h2>
          </div>
          <div className='flex'>
            <div className='p-2 sm:pr-5 flex flex-col gap-4'>
              <div>
                <h2 className='font-bold text-2xl'>About</h2>
                <p>
                  Battleship is a more exciting version of the classic game. It
                  was built entirely vanilla and features some special additions
                  in creative attacks, like the radar and sniper as well as an
                  energy system and a smart computer opponent. It is also
                  playable in local multiplayer.
                </p>
                <br />
                <p>
                  This project was developed in a Test Driven manner with{' '}
                  <em className='text-blue-500 not-italic'>Jest</em>, advanced{' '}
                  <em className='text-blue-500  not-italic'>Javascript</em>, and
                  various{' '}
                  <em className='text-blue-500  not-italic'>Web API&apos;s</em>{' '}
                  like the Audio API and Keyboard API.
                </p>
              </div>
              <BattleshipLinks />
              <BattleshipStack />
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
              src='/assets/images/battleship/desktop.png'
              alt='project image'
              aria-label='project mobile view'
            />
          </motion.div>
        </div>
      </div>
    </span>
  );
}

export default BattleshipDetails;
