import React from 'react';
import Link from 'next/link';
import SymphonyLinks from './SymphonyLinks';
import SymphonyStack from './SymphonyStack';
function SymphonyDetails() {
  return (
    <div className='w-5/6 shadow-md border-2 border-r-[5px] border-b-[5px] dark:border-white border-gray-950 rounded-md mt-5 p-4'>
      <div>
        <h1 className='text-3xl'>Symphony</h1>
        <h2 className='text-xl dark:text-blue-300 text-pink-500'>
          Instant Messaging App
        </h2>
      </div>
      <div className='flex'>
        <div>
          <h2>About</h2>
          <p>
            Symphony is a full stack instant messaging application built to
            practice using industry standard technologies. This project helped
            me learn <em className='text-blue-500 not-italic'>TypeScript</em>,{' '}
            <em className='text-blue-500  not-italic'>TailwindCSS</em>, and{' '}
            <em className='text-blue-500  not-italic'>Framer Motion</em>.
          </p>
          <p>
            This project also provided a chance to flex my creative front-end
            skills as I reverse-engineered the login page animations from
            <Link href='https://www.arena.net/en' target='_blank'>
              <em className='text-blue-500 not-italic'> Arena.net</em>
            </Link>
            , making my own animation with{' '}
            <em className='not-italic text-blue-500 '>Photoshop</em>.
          </p>
          <SymphonyLinks />
          <SymphonyStack />
        </div>
        <div className='h-[33vh] w-1/2 debug'>
          <img src='' alt='project image' />
        </div>
      </div>
    </div>
  );
}

export default SymphonyDetails;
