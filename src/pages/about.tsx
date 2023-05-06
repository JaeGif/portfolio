import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/about/ImageCarousel';
import DownChevron from '@/components/svg/DownChevron';
import TransitionEffect from '@/components/menu/TransitionEffect';
import { motion } from 'framer-motion';
import Head from 'next/head';

function about() {
  return (
    <>
      <Head>
        <title>J. Gifford | About</title>
        <meta
          name='description'
          content='Description of Jacob Giffords developer career'
        />
      </Head>
      <TransitionEffect />
      <section className='flex flex-col items-center overflow-hidden p-5 gap-5'>
        <h1 className='text-3xl sm:text-[7vw] w-full text-center flex justify-center gap-2 sm:gap-4 mt-10 mb-10'>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Build{' '}
          </motion.p>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            with{' '}
          </motion.p>{' '}
          <span
            className='flex gap-0 justify-center font-pixeloid text-blue-500
'
          >
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              passion
            </motion.p>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              .
            </motion.p>
          </span>
        </h1>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col overflow-hidden min-w-[33%] gap-3'>
            <h2 className='text-xl font-bold text-blue-400'>Who am I?</h2>
            <div className='flex flex-col sm:flex-row'>
              <p className='sm:max-w-[50%]'>
                I&apos;m Jacob, a Full Stack Engineer. I learned web development
                with the Odin Project, and Full Stack Open, from the University
                of Helsinki. I&apos;m extremely passionate about web development
                and driven to succeed and constantly improve my skills. Every
                project I make challenges me in some new way and forces me to
                grow, and I wouldn&apos;t have it any other way.
              </p>
              <div className='h-fit w-fit max-w-[33%] relative border-2 dark:border-white dark:bg-gray-950 bg-white border-gray-950 rounded-3xl mt-10 mb-10 p-2 sm:p-4 shadow-lg'>
                <div className='rounded-xl overflow-hidden border-[1px] border-gray-950 p-2'>
                  <Image
                    height={500}
                    width={400}
                    src={'/assets/images/punchout.png'}
                    alt='picture of Jacob'
                    aria-label='Picture of Jacob'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          height={100}
          width={100}
          src={'/assets/images/arrow.png'}
          alt='arrow'
          aria-label='arrow to next section'
        />
        <div className='relative flex flex-col overflow-hidden min-w-[33%] justify-center gap-3 mt-10 mb-10'>
          <h2 className='text-xl font-bold text-blue-400'>
            More than just a developer.
          </h2>
          <p>
            Outside of full stack development, I dabble in hobbies that help
            fuel my creativity. I take and edit photos with a Canon T6 Rebel,
            Photoshop and Lightroom. I fly a DJI Mavic Mini 2 drone for some
            interesting shots and angles, and I rock climb, solving interesting
            problems. Here&apos;s a selection of some interesting photos
            I&apos;ve taken recently.
          </p>
        </div>
        <h2 className='text-xl font-bold text-blue-400'>
          Photography Showcase
        </h2>
        <ImageCarousel />
      </section>
    </>
  );
}

export default about;
