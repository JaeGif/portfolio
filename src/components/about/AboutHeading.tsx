import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
function AboutHeading() {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1800);
  }, []);
  const passionVariants = {
    hover: { y: -10, opacity: 0 },
  };
  const creativityVariants = {
    hover: { y: -40, opacity: 1 },
  };
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
          <motion.div whileHover={'hover'}>
            {/*             <Link href={'/creative'}>
             */}{' '}
            <motion.p
              variants={passionVariants}
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={
                hasLoaded
                  ? { delay: 0, duration: 0.2 }
                  : { delay: 1.8, duration: 0.5 }
              }
            >
              passion
            </motion.p>
            <motion.p
              variants={creativityVariants}
              className='text-pink-500'
              initial={{ y: 10, opacity: 0 }}
              transition={{ delay: 0, duration: 0.2 }}
            >
              creativity
            </motion.p>
            {/*             </Link>
             */}{' '}
          </motion.div>
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
