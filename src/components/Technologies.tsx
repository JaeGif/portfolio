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
    <div id='technologies' className='flex flex-col items-center p-5 mb-5'>
      <h1 className='text-4xl p-5 font-semibold'>Technologies</h1>
      {/* Stack container */}
      {mounted && (
        <div className='flex flex-col sm:flex-row gap-5 justify-center'>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-800'>
            <h1 className='text-2xl'>Front-End</h1>
            <div className='flex flex-1 flex-wrap p-4 rounded-md border-2 dark:border-white border-gray-950 justify-center gap-4 shadow-md'>
              <Image
                height={54}
                width={54}
                src='/assets/favicons/javascript-original.svg'
                alt='technologies I use'
                aria-label='javascript'
                title='Javascript'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/typescript-original.svg'
                alt='technologies I use'
                aria-label='typescript'
                title='Typescript'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/react-original-wordmark.svg'
                alt='technologies I use'
                aria-label='react'
                title='React'
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
                title='Next.js'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/tailwindcss-plain.svg'
                alt='technologies I use'
                aria-label='tailwind'
                title='TailwindCSS'
              />
              <Image
                height={58}
                width={58}
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
                height={54}
                width={54}
                src='/assets/favicons/materialui-original.svg'
                alt='technologies I use'
                aria-label='material ui'
                title='Material UI'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/html5-white.svg'
                    : '/assets/favicons/html5-original-wordmark.svg'
                }
                alt='technologies I use'
                aria-label='html5'
                title='HTML5'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/css3-white.svg'
                    : '/assets/favicons/css3-original-wordmark.svg'
                }
                alt='technologies I use'
                aria-label='css3'
                title='CSS3'
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
                title='React Router'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/react-query.svg'
                alt='technologies I use'
                aria-label='react query'
                title='React Query'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/framer-motion.svg'
                alt='technologies I use'
                aria-label='framer motion'
                title='Framer Motion'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/chartjs.svg'
                alt='technologies I use'
                aria-label='chart js'
                title='Chart.js'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/figma-original.svg'
                alt='technologies I use'
                aria-label='figma'
                title='Figma'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/photoshop-line.svg'
                alt='technologies I use'
                aria-label='Photoshop'
                title='Adobe Photoshop'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/blender-original.svg'
                alt='technologies I use'
                aria-label='blender'
                title='Blender'
              />
            </div>
          </div>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-800'>
            <h1 className='text-2xl'>Back-End</h1>
            <div className='flex flex-1 flex-wrap p-4 rounded-md border-2 dark:border-white border-gray-950 justify-center gap-4 shadow-md'>
              <Image
                height={54}
                width={54}
                src='/assets/favicons/python-original.svg'
                alt='technologies I use'
                aria-label='python'
                title='Python'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/nodejs-original.svg'
                alt='technologies I use'
                aria-label='node'
                title='Node.js'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/express-white.svg'
                    : '/assets/favicons/express-original.svg'
                }
                alt='technologies I use'
                aria-label='express'
                title='Express'
              />

              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/flask-dark.svg'
                    : '/assets/favicons/flask-original.svg'
                }
                alt='technologies I use'
                aria-label='flask'
                title='Flask'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/mongodb-original-wordmark.svg'
                alt='technologies I use'
                aria-label='mongodb'
                title='MongoDB'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/postgresql-white.svg'
                    : '/assets/favicons/postgresql-original-wordmark.svg'
                }
                alt='technologies I use'
                aria-label='postgresql'
                title='PostgreSQL'
              />
              <Image
                height={54}
                width={54}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/prisma-blue.svg'
                    : '/assets/favicons/prisma.svg'
                }
                alt='technologies I use'
                aria-label='prisma'
                title='Prisma'
              />
              <Image
                height={48}
                width={48}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/passport.svg'
                    : '/assets/favicons/passport-dark.svg'
                }
                alt='technologies I use'
                aria-label='passport.js'
                title='Passport.js'
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
                title='Socket.io'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/amazonwebservices-original.svg'
                alt='technologies I use'
                aria-label='AWS S3'
                title='AWS S3'
              />
              <Image
                height={48}
                width={48}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/aws-dark.svg'
                    : '/assets/favicons/aws-original.svg'
                }
                alt='technologies I use'
                aria-label='amazon web services'
                title='Amazon Web Services'
              />
            </div>
          </div>
          <div className='flex flex-col w-full sm:w-[calc(33%-4rem)] dark:bg-gray-800'>
            <span className='flex'>
              <h1 className='text-2xl'>Dev-Ops</h1>
              <h1 className='text-2xl lg:flex hidden'>&nbsp;& Testing</h1>
            </span>
            <div className='flex flex-1 flex-wrap p-4 rounded-md border-2 dark:border-white border-gray-950 justify-center gap-4 shadow-md'>
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
                title='Github'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/git-original.svg'
                alt='technologies I use'
                aria-label='git'
                title='Git'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/jest-plain.svg'
                alt='technologies I use'
                aria-label='jest'
                title='Jest'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/vitest-original.svg'
                alt='technologies I use'
                aria-label='vitest'
                title='Vitest'
              />
              <Image
                height={40}
                width={40}
                src={
                  currentTheme === 'dark'
                    ? '/assets/favicons/railway-dark.svg'
                    : '/assets/favicons/railway.svg'
                }
                alt='Railway'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/digitalocean-original.svg'
                alt='technologies I use'
                aria-label='digital ocean'
                title='Digital Ocean'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/docker-original-wordmark.svg'
                alt='technologies I use'
                aria-label='docker'
                title='Docker'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/webpack-original.svg'
                alt='technologies I use'
                aria-label='webpack'
                title='Webpack'
              />
              <Image
                height={54}
                width={54}
                src='/assets/favicons/vite.svg'
                alt='technologies I use'
                aria-label='vite'
                title='Vite'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Technologies;
