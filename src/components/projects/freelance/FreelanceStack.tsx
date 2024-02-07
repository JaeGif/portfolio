import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function FreelanceStack() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className='flex flex-col gap-1'>
      <span>
        <p className='p-2 pl-0 font-bold'>Key Technologies</p>
      </span>
      <div className='flex gap-2 flex-wrap'>
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/typescript-original.svg'}
          alt='typescript'
        />
        <Image
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/nextjs-line.svg'
              : '/assets/favicons/nextjs-original.svg'
          }
          alt='next'
        />
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/tailwindcss-plain.svg'}
          alt='tailwindcss'
        />
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/framer-motion.svg'}
          alt='framer motion'
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
          src={'/assets/favicons/vite.svg'}
          alt='vite'
        />
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/photoshop-line.svg'}
          alt='photoshop'
        />
        <Image
          height={56}
          width={56}
          src={'/assets/favicons/digitalocean-original.svg'}
          alt='digital ocean'
        />
      </div>
    </div>
  );
}

export default FreelanceStack;
