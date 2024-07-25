import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function PortfolioStack() {
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
          src='/assets/favicons/javascript-original.svg'
          alt='technologies I use'
          aria-label='javascript'
          title='Javascript'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/typescript-original.svg'
          alt='technologies I use'
          aria-label='typescript'
          title='Typescript'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/react-original-wordmark.svg'
          alt='technologies I use'
          aria-label='react'
          title='React'
        />
        <Image
          height={48}
          width={48}
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
          height={48}
          width={48}
          src={
            currentTheme === 'dark'
              ? '/assets/favicons/three-dark.svg'
              : '/assets/favicons/threejs-original-wordmark.svg'
          }
          alt='technologies I use'
          aria-label='three js'
          title='Three.js'
        />
        <Image
          height={52}
          width={52}
          src='/assets/favicons/opengl-plain.svg'
          alt='technologies I use'
          aria-label='OpenGL'
          title='OpenGL'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/tailwindcss-plain.svg'
          alt='technologies I use'
          aria-label='tailwind'
          title='TailwindCSS'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/framer-motion.svg'
          alt='technologies I use'
          aria-label='framer motion'
          title='Framer Motion'
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
          src='/assets/favicons/figma-original.svg'
          alt='technologies I use'
          aria-label='figma'
          title='Figma'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/photoshop-line.svg'
          alt='technologies I use'
          aria-label='Photoshop'
          title='Adobe Photoshop'
        />
        <Image
          height={48}
          width={48}
          src='/assets/favicons/blender-original.svg'
          alt='technologies I use'
          aria-label='blender'
          title='Blender'
        />
        <Image
          height={52}
          width={52}
          src='/assets/favicons/digitalocean-original.svg'
          alt='technologies I use'
          aria-label='digital ocean'
          title='Digital Ocean'
        />
      </div>
    </div>
  );
}

export default PortfolioStack;
