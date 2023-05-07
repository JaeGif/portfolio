import React from 'react';
import { motion } from 'framer-motion';
function AboutHeading() {
  return (
    <>
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
    </>
  );
}

export default AboutHeading;
