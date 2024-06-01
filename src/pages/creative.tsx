import React from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/menu/TransitionEffect';

function creative() {
  return (
    <>
      <Head>
        <title>J. Gifford | Creative</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='creative content I make' />
      </Head>
      <TransitionEffect />
      <section className='w-full h-[calc(100vh-6.5rem)] p-2 flex flex-col items-center mt-10 gap-10'></section>
    </>
  );
}

export default creative;
