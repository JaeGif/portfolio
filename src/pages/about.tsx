import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/about/ImageCarousel';
import DownChevron from '@/components/svg/DownChevron';
import TransitionEffect from '@/components/menu/TransitionEffect';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ScrollArrowLeft from '@/components/about/ScrollArrowLeft';
import ScrollArrowRight from '@/components/about/ScrollArrowRight';
import Link from 'next/link';

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
        <h1 className='text-3xl sm:text-[7vw] w-full text-center flex justify-center gap-2 sm:gap-4 mt-10 mb-10 flex-wrap'>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Build{' '}
          </motion.p>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
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
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              passion
            </motion.p>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              .
            </motion.p>
          </span>
        </h1>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col sm:flex-row items-center'>
            <span className='flex flex-col gap-3 w-fit'>
              <h2 className='text-2xl font-bold text-blue-400 w-fit'>
                Who am I?
              </h2>
              <p className='sm:w-[50vw] text-lg'>
                I&apos;m Jacob, a Full Stack Engineer with a passion for
                building beautiful user-centric applications. I&apos;m
                constantly learning new technologies and finding interesting UI
                designs and making them my own.
              </p>
              <p className='text-lg'>
                I learned web development with the Odin Project, and Full Stack
                Open, from the University of Helsinki. I&apos;m extremely
                passionate about web development and driven to succeed and
                constantly improve my skills. Every project I make challenges me
                in some new way and forces me to grow, and I wouldn&apos;t have
                it any other way.
              </p>
              <p className='text-lg'>
                If you&apos;re interested in checking out my other projects,
                feel free to head off to my{' '}
                <Link
                  className='cursor-pointer'
                  href={'https://github.com/JaeGif'}
                  target='_blank'
                >
                  <em className='cursor-pointer not-italic text-blue-500'>
                    GitHub
                  </em>
                </Link>{' '}
                and{' '}
                <Link
                  className='cursor-pointer'
                  href={'https://www.linkedin.com/in/jacob-gifford-dev/'}
                  target='_blank'
                >
                  {' '}
                  <em className='cursor-pointer not-italic text-blue-500'>
                    LinkedIn
                  </em>
                </Link>{' '}
                pages. Nearly all of my finished projects and experience are
                public.
              </p>
            </span>
            <div className='h-full w-full flex justify-center items-center'>
              <div className='sm:max-w-[50vw] h-full'>
                <Image
                  height={500}
                  width={500}
                  src={'/assets/images/punchout-light.png'}
                  alt='picture of Jacob'
                  aria-label='Picture of Jacob'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col overflow-hidden min-w-[33%] justify-center gap-3 mb-10'>
          <h2 className='text-2xl font-bold text-blue-400'>
            More than just a developer.
          </h2>
          <p className='text-lg'>
            Outside of full stack development, I dabble in hobbies that help
            fuel my creativity. I take and edit photos with a Canon T6 Rebel,
            Photoshop and Lightroom. I fly a DJI Mavic Mini 2 drone for some
            interesting shots and angles, and I rock climb, solving interesting
            problems. Here&apos;s a selection of some interesting photos
            I&apos;ve taken recently.
          </p>
        </div>
        <span className='flex gap-5 sm:gap-10 items-center justify-center w-full'>
          <ScrollArrowLeft />
          <h2 className='hidden sm:block text-2xl font-bold text-blue-400'>
            Photography Showcase
          </h2>
          <h2 className='block sm:hidden text-2xl font-bold text-blue-400'>
            Photos
          </h2>
          <ScrollArrowRight />
        </span>
        <ImageCarousel />
      </section>
    </>
  );
}

export default about;
