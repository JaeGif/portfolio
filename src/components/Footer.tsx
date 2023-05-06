import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

function Footer() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className='w-full h-16 text-center items-center flex flex-col mt-5'>
      <div className='h-[1px] w-11/12 dark:bg-white bg-gray-950'>
        <p className='invisible'>dummy content</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 p-5'>
        <p className='text-sm text-gray-100'>This site built with</p>
        <div className='flex gap-2'>
          <Image
            height={32}
            width={32}
            src='/assets/favicons/typescript-original.svg'
            alt='technologies I use'
            aria-label='typescript'
            title='Typescript'
          />
          <Image
            height={32}
            width={32}
            src={
              currentTheme === 'dark'
                ? '/assets/favicons/nextjs-line.svg'
                : '/assets/favicons/nextjs-original.svg'
            }
            alt='technologies I use'
            aria-label='next js'
            title='Next.js'
          />
          <Image
            height={32}
            width={32}
            src='/assets/favicons/tailwindcss-plain.svg'
            alt='technologies I use'
            aria-label='tailwind'
            title='TailwindCSS'
          />
          <Image
            height={32}
            width={32}
            src='/assets/favicons/framer-motion.svg'
            alt='technologies I use'
            aria-label='framer motion'
            title='Framer Motion'
          />
          <Image
            height={32}
            width={32}
            src='/assets/favicons/figma-original.svg'
            alt='technologies I use'
            aria-label='figma'
            title='Figma'
          />
          <Image
            height={32}
            width={32}
            src='/assets/favicons/photoshop-line.svg'
            alt='technologies I use'
            aria-label='Photoshop'
            title='Adobe Photoshop'
          />
          <Image
            height={40}
            width={40}
            src='/assets/favicons/digitalocean-original.svg'
            alt='technologies I use'
            aria-label='digital ocean'
            title='Digital Ocean'
          />
        </div>
        <em className='text-sm text-gray-100'>
          Copyright &#169; 2023 Jacob Gifford
        </em>
      </div>
    </div>
  );
}

export default Footer;
