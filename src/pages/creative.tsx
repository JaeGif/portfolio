import React from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';
import ExperienceContainer from '@/components/creative/ExperienceContainer';

function creative() {
  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <TransitionEffect />
      <section className='w-full h-screen p-2 flex flex-col items-center mt-10 gap-10 mb-10'>
        <ExperienceContainer />
      </section>
    </>
  );
}

export default creative;
