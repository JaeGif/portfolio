import React from 'react';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Head from 'next/head';
import { motion } from 'framer-motion';
function contact() {
  return (
    <>
      <Head>
        <title>J. Gifford | Contact</title>
        <link rel='icon' href='/assets/images/bluetitle.png'></link>
        <meta name='description' content='Contact Jacob Gifford' />
      </Head>
      <TransitionEffect />
      <div className='w-full h-[calc(100vh-6.5rem)] p-2 flex flex-col items-center mt-10 gap-10'>
        <span className='flex gap-3'>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className='text-2xl sm:text-[4vw]'
          >
            Let&apos;s
          </motion.p>
          <span className='flex'>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className='text-2xl sm:text-[4vw]'
            >
              Chat
            </motion.p>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className='text-2xl sm:text-[4vw]'
            >
              .
            </motion.p>
          </span>
        </span>
        <div className='relative border-2 dark:border-white border-gray-950 rounded-lg p-4 dark:bg-gray-800 bg-white'>
          <div className='absolute top-5 left-5 h-full w-full dark:bg-white bg-gray-950 rounded-lg p-4 -z-10'></div>
          <form
            action='https://formsubmit.co/88a570e5b09812d65851f42042cdbe95'
            method='POST'
            className='min-w-[33vw] flex flex-col gap-3'
          >
            <div className='flex flex-col'>
              <label htmlFor='name'>Name</label>
              <input
                className='h-10 p-2 rounded-md bg-gray-60 dark:bg-gray-700'
                id='name'
                required
                type='text'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                className='h-10 p-2 rounded-md bg-gray-60 dark:bg-gray-700'
                id='email'
                required
                type='email'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='resize-y h-24 min-h-[2.5rem] rounded-md p-2 bg-gray-60 dark:bg-gray-700'
                id='message'
                required
                maxLength={150}
                minLength={1}
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;
