import React from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';
import ExperienceContainer from '@/components/creative/ExperienceContainer';
import Creativity from '@/components/creative/Creativity';

function creative() {
  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <TransitionEffect />
      <section className='w-full p-2 flex flex-col mt-8 items-center gap-10'>
        <ExperienceContainer />
      </section>
      <section className='w-full flex mt-5 gap-5 mb-10'>
        <Creativity />
      </section>
    </>
  );
}

export default creative;
