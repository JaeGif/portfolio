import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './svg/ThemeToggle';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import DownChevron from './svg/DownChevron';
import { motion } from 'framer-motion';

function Intro() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    // 7rem is height of header
    <div className='w-full h-[calc(100vh-7rem)] flex flex-col justify-start mt-10 items-center gap-5'>
      <div className='flex flex-col text-5xl mt-10 sm:mt-0 sm:text-[6vw] text-center w-full'>
        <p className='m-11'>Jacob Gifford</p>
        <p>Full Stack Developer</p>
      </div>
      <nav className='flex gap-5 justify-center'>
        <Link
          href='./assets/images/fullstackResume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='p-2 border-2 dark:border-white border-black rounded-md flex items-center gap-1 text-lg hover:border-pink-500 hover:dark:border-pink-500'
          >
            Resume
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 96 960 960'
              width='24'
            >
              <path
                fill={
                  mounted && currentTheme === 'dark' ? '#FFFFFF' : '#000000'
                }
                d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
              />
            </svg>
          </motion.button>
        </Link>
        <Link href={'/contact'}>
          <motion.p
            className='p-2 border-2 dark:border-white border-black rounded-md text-lg hover:border-pink-500 hover:dark:border-pink-500'
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.p>
        </Link>
      </nav>
      <DownChevron anchor='#technologies' />
    </div>
  );
}

export default Intro;
