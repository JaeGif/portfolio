import React from 'react';
import { animate, motion } from 'framer-motion';

function TransitionEffect() {
  return (
    <>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 right-full h-screen z-40 bg-pink-500'
      />
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 right-full h-screen z-30 bg-gray-50'
      />{' '}
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 right-full h-screen z-20 bg-gray-800'
      />
    </>
  );
}

export default TransitionEffect;
