import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function Technologies() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div id='technologies' className='flex flex-col items-center p-5'>
      <h1 className='text-4xl p-5 font-semibold'>Technologies</h1>
      {/* Stack container */}
      {mounted && (
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-950 bg-white'>
            <h1 className='text-2xl'>Front-End</h1>
            <div className='flex flex-1 flex-wrap p-2 rounded-md border-2 dark:border-white border-gray-950 justify-center'>
              <Image
                height={54}
                width={54}
                src='/assets/favicons/javascript-original.svg'
                alt='technologies I use'
                aria-label='javascript'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/typescript-original.svg'
                alt='technologies I use'
                aria-label='typescript'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/react-original-wordmark.svg'
                alt='technologies I use'
                aria-label='react'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/nextjs-line.svg'
                    : '/assets/favicons/nextjs-original.svg'
                }
                alt='technologies I use'
                aria-label='next js'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/tailwindcss-plain.svg'
                alt='technologies I use'
                aria-label='tailwind'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/html5-original-wordmark.svg'
                alt='technologies I use'
                aria-label='html5'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/css3-original-wordmark.svg'
                alt='technologies I use'
                aria-label='css3'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/react-router-white.svg'
                    : '/assets/favicons/react-router.svg'
                }
                alt='technologies I use'
                aria-label='react router'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/react-query.svg'
                alt='technologies I use'
                aria-label='react query'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/photoshop-line.svg'
                alt='technologies I use'
                aria-label='photoshop'
              />
            </div>
          </div>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-950 bg-white'>
            <h1 className='text-2xl'>Back-End</h1>
            <div className='flex flex-1 flex-wrap p-2 rounded-md border-2 border-gray-950 justify-center'>
              <Image
                height={54}
                width={54}
                src='/assets/favicons/python-original.svg'
                alt='technologies I use'
                aria-label='express'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/nodejs-original.svg'
                alt='technologies I use'
                aria-label='node'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/mongodb-original-wordmark.svg'
                alt='technologies I use'
                aria-label='mongodb'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/socketio-white.svg'
                    : '/assets/favicons/socketio-original.svg'
                }
                alt='technologies I use'
                aria-label='socket io'
              />
            </div>
          </div>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-950 bg-white'>
            <h1 className='text-2xl'>Dev Ops</h1>
            <div className='flex flex-1 flex-wrap p-2 rounded-md border-2 border-gray-950 justify-center'>
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/github-white.svg'
                    : '/assets/favicons/github-original.svg'
                }
                alt='technologies I use'
                aria-label='github'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/git-original.svg'
                alt='technologies I use'
                aria-label='git'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/digitalocean-original.svg'
                alt='technologies I use'
                aria-label='digital ocean'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/docker-original-wordmark.svg'
                alt='technologies I use'
                aria-label='docker'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/webpack-original.svg'
                alt='technologies I use'
                aria-label='webpack'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Technologies;
