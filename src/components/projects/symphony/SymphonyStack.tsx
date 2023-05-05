import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function SymphonyStack() {
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
        src={'/assets/favicons/typescript-original.svg'}
        alt='typescript'
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
        src={
          currentTheme === 'dark'
            ? '/assets/favicons/socketio-white.svg'
            : '/assets/favicons/socketio-original.svg'
        }
        alt='socket.io'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/amazonwebservices-original.svg'}
        alt='AWS S3'
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

export default SymphonyStack;
