import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function InstagramStack() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className='flex gap-2 flex-wrap'>
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/javascript-original.svg'}
        alt='javascript'
      />

      <Image
        height={48}
        width={48}
        src={'/assets/favicons/react-original-wordmark.svg'}
        alt='react'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/nodejs-original.svg'}
        alt='node'
      />
      <Image
        height={48}
        width={48}
        src={
          currentTheme === 'dark'
            ? '/assets/favicons/express-white.svg'
            : '/assets/favicons/express-original.svg'
        }
        alt='express'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/mongodb-original-wordmark.svg'}
        alt='mongodb'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/vite.svg'}
        alt='vite'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/photoshop-line.svg'}
        alt='photoshop'
      />
    </div>
  );
}

export default InstagramStack;
