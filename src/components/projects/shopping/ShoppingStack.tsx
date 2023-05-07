import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function ShoppingStack() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className='flex flex-col gap-1'>
      <span>
        <p className='p-2 pl-0 font-bold'>Key Technologies</p>
      </span>
      <div className='flex gap-2 flex-wrap'>
        {' '}
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/javascript-original.svg'}
          alt='javascript'
        />
        <Image
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/css3-white.svg'
              : '/assets/favicons/css3-original-wordmark.svg'
          }
          alt='css3'
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
          src={'/assets/favicons/git-original.svg'}
          alt='git'
        />
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/photoshop-line.svg'}
          alt='photoshop'
        />
      </div>
    </div>
  );
}

export default ShoppingStack;
