import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SymphonyDetails from './symphony/SymphonyDetails';
function Projects() {
  return (
    <section className='min-h-screen ' id='projects'>
      <span className='flex justify-start w-full p-5 debug'>
        <h1 className='text-4xl font-semibold'>Projects</h1>
      </span>
      <span className='text-white text-7xl debug'>1.</span>
      <div className='flex flex-col items-center gap-20'>
        <SymphonyDetails />

        <div className='w-5/6 shadow-md border-2 border-r-[5px] border-b-[5px] dark:border-white border-gray-950 rounded-md p-4'>
          <div>
            <h1 className='text-3xl'>Totally Not Instagram</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Instagram Clone
            </h2>
          </div>
          <div>
            <div>
              <h2>About</h2>
              <p>Description Here</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className='w-5/6 shadow-md border-2 border-r-[5px] border-b-[5px] dark:border-white border-gray-950  rounded-md p-4'>
          <div>
            <h1 className='text-3xl'>Totally Not Battleship</h1>
            <h2 className='text-xl dark:text-blue-300 text-pink-500'>
              Battleship Game
            </h2>
          </div>
          <div>
            <div>
              <h2>About</h2>
              <p>Description Here</p>
            </div>
            <div>
              <img src='' alt='project image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
