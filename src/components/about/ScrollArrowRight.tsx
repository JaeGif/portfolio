import React from 'react';
import { motion } from 'framer-motion';

function ScrollArrowRight() {
  return (
    <div className='w-fit h-fit flex flex-col gap-1 justify-center items-center rotate-90'>
      <motion.span
        initial={{
          y: 0,
        }}
        animate={{
          y: -20,
          rotate: 225,
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          rotate: {
            duration: 0,
          },
          repeat: Infinity,
        }}
        className='h-5 w-5 rotate-45 border-r-4 border-b-4 border-pink-400'
      ></motion.span>
      <motion.span
        initial={{
          y: 0,
        }}
        animate={{
          y: -20,
          rotate: 225,
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',

          delay: -0.2,
          rotate: {
            duration: 0,
          },
          repeat: Infinity,
        }}
        className='h-5 w-5 rotate-45 border-r-4 border-b-4 border-pink-400'
      ></motion.span>
      <motion.span
        initial={{
          y: 0,
        }}
        animate={{
          y: -20,
          rotate: 225,
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',

          delay: -0.4,
          rotate: {
            duration: 0,
          },
          repeat: Infinity,
        }}
        className='h-5 w-5 rotate-45 border-r-4 border-b-4 border-pink-400'
      ></motion.span>
    </div>
  );
}

export default ScrollArrowRight;
