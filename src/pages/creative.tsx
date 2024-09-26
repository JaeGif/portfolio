import React from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Experience from '@/components/creative/Experiences/Experience';
function creative() {
  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <section className='p-2 flex flex-col mt-8 gap-10'>
        <div className='w-screen h-screen relative'>
          <Experience />
        </div>
      </section>
    </>
  );
}

export default creative;
