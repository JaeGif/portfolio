import React, { useState } from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Experience from '@/components/creative/Experiences/Experience';
import Creativity from '@/components/creative/Creativity';
import ExperienceContainer from '@/components/creative/ExperienceContainer';
import { motion } from 'framer-motion';
import ControlOverlay from '@/components/creative/Experiences/ControlOverlay';

function creative() {
  const [isExperience, setIsExperience] = useState(false);
  const [selected, setSelected] = useState(false);

  const line = {
    initial: { x: '-110%' },
    animate: { x: '0' },
  };

  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <TransitionEffect />
      <section className='h-screen p-2 flex flex-col mt-8 gap-10'>
        {!selected ? (
          <div className='font-pixeloid h-full flex flex-col justify-around -mt-10 content-around'>
            <h1 className='text-5xl w-full text-center'>
              Choose your adventure!
            </h1>
            <div className='w-full flex justify-around items-center text-3xl'>
              <div>
                <motion.button
                  initial='initial'
                  animate='initial'
                  whileHover='animate'
                  className='overflow-hidden'
                  onClick={() => {
                    setSelected(true);
                    setIsExperience(true);
                  }}
                >
                  Full Experience
                  <motion.div
                    variants={line}
                    className='dark:bg-white bg-gray-950 h-[2px] w-full'
                  >
                    <p className='invisible'>underline</p>
                  </motion.div>
                </motion.button>
                <p className='text-sm text-blue-500'>
                  Recommended for larger and more powerful devices
                </p>
              </div>
              <div>
                <motion.button
                  initial='initial'
                  animate='initial'
                  whileHover='animate'
                  className='overflow-hidden'
                  onClick={() => {
                    setSelected(true);
                    setIsExperience(false);
                  }}
                >
                  Just the projects
                  <motion.div
                    variants={line}
                    className='dark:bg-white bg-gray-950 h-[2px] w-full'
                  >
                    <p className='invisible'>underline</p>
                  </motion.div>
                </motion.button>
                <p className='text-sm text-blue-500'>
                  Recommended for mobile devices or slow internet connections
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='h-full relative'>
              {isExperience ? <Experience /> : <ExperienceContainer />}
            </div>
            <section className='w-full flex mt-5 gap-5 mb-10'>
              <Creativity />
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default creative;
