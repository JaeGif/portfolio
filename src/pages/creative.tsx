import React, { useState } from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Experience from '@/components/creative/Experiences/Experience';
import Creativity from '@/components/creative/Creativity';
import ExperienceContainer from '@/components/creative/ExperienceContainer';

function creative() {
  const [isExperience, setIsExperience] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <TransitionEffect />
      <section className='h-screen p-2 flex flex-col mt-8 gap-10'>
        {!selected ? (
          <div className='h-full flex flex-col justify-around -mt-10 content-around'>
            <h1 className='text-4xl w-full text-center'>
              Choose your adventure!
            </h1>
            <div className='w-full flex justify-around items-center text-2xl'>
              <button>Full Experience</button>
              <button>Just the projects</button>
            </div>
          </div>
        ) : (
          <>
            <div className='h-full relative'>
              {isExperience ? <Experience /> : <ExperienceContainer />}
            </div>
            <section className='w-full flex mt-5 gap-5 mb-10'>
              <Creativity />
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default creative;
