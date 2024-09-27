import React from 'react';
import { motion } from 'framer-motion';

function ControlOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className='absolute top-5 left-5 z-10 flex flex-col justify-center items-center w-52 gap-2 font-pixeloid'
    >
      <h1 className='text-xl'>Controls</h1>
      <span className='text-base flex justify-around items-center w-full'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/leftmouse.svg' />
          <p>Orbit</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/zoom.svg' />
          <p>Zoom</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/dblmouse.svg' />
          <p>Pan</p>
        </div>
      </span>
    </motion.div>
  );
}

export default ControlOverlay;
