import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './svg/ThemeToggle';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function Intro() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center'>
      <div className='flex flex-col text-[6vw] text-center w-8/12'>
        <p className='m-11'>Jacob Gifford</p>
        <p>Full Stack Developer</p>
      </div>
      <nav className='flex gap-5 justify-center'>
        <button className='p-2 border-2 dark:border-white border-black rounded-md flex gap-1'>
          Resume
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 96 960 960'
            width='24'
          >
            <path
              fill={mounted && currentTheme === 'dark' ? '#FFFFFF' : '#000000'}
              d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
            />
          </svg>
        </button>
        <Link
          href={'/contact'}
          className='p-2 border-2 dark:border-white border-black rounded-md'
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Intro;
