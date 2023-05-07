import React from 'react';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Form from '@/components/contact/Form';
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
            className='text-3xl sm:text-[4vw]'
          >
            Let&apos;s
          </motion.p>
          <span className='flex'>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className='text-3xl sm:text-[4vw]'
            >
              Chat
            </motion.p>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className='text-3xl sm:text-[4vw]'
            >
              .
            </motion.p>
          </span>
        </span>
        <Form />
      </div>
    </>
  );
}

export default contact;
