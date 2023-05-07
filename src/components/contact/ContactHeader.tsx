import React from 'react';
import { motion } from 'framer-motion';

function ContactHeader() {
  return (
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
  );
}

export default ContactHeader;
