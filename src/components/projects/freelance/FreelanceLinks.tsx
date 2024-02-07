import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Client from '@/components/svg/Client';
import Server from '@/components/svg/Server';
import { useTheme } from 'next-themes';
function FreelanceLinks() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <div className='flex gap-2 flex-wrap'>
          <Link
            href={'https://github.com/JaeGif/Rohit_Portfolio'}
            target='_blank'
          >
            <div className='p-2 border-2 dark:border-white border-black rounded-md flex gap-1 hover:border-pink-500 dark:hover:border-pink-500'>
              <Client /> Client
            </div>
          </Link>
          <Link href={'https://Freelancefitness.pro/'} target='_blank'>
            <button className='p-2 border-2 dark:border-white border-black rounded-md flex gap-1 hover:border-pink-500 dark:hover:border-pink-500'>
              Live
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 96 960 960'
                width='24'
              >
                <path
                  fill={currentTheme === 'dark' ? '#FFFFFF' : '#000000'}
                  d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
                />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default FreelanceLinks;
