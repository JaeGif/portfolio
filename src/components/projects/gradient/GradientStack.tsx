import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function Gradienttack() {
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
          src={'/assets/favicons/react-original-wordmark.svg'}
          alt='react'
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
          height={50}
          width={50}
          src={'/assets/favicons/chartjs.svg'}
          alt='chartjs'
        />
        <Image
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/react-router-white.svg'
              : '/assets/favicons/react-router.svg'
          }
          alt='react router'
        />
        <Image
          height={48}
          width={48}
          src={'/assets/favicons/react-query.svg'}
          alt='react query'
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
          height={40}
          width={40}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/passport.svg'
              : '/assets/favicons/passport-dark.svg'
          }
          alt='passport.js'
        />
        <Image
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/postgresql-white.svg'
              : '/assets/favicons/postgresql-original-wordmark.svg'
          }
          alt='postgresql'
        />
        <Image
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/prisma-blue.svg'
              : '/assets/favicons/prisma.svg'
          }
          alt='prisma'
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

export default Gradienttack;
