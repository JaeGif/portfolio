import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function MarbleStack() {
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
          src={'/assets/favicons/react-original-wordmark.svg'}
          alt='react'
        />
        <Image
          height={52}
          width={52}
          src='/assets/favicons/go-original-wordmark.svg'
          alt='technologies I use'
          aria-label='Go Programming Language'
          title='Go'
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
          height={48}
          width={48}
          src={'/assets/favicons/blender-original.svg'}
          alt='blender'
        />
      </div>
    </div>
  );
}

export default MarbleStack;
