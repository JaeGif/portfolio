import React from 'react';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Head from 'next/head';
import AboutHeading from '@/components/about/AboutHeading';
import PersonalDescription from '@/components/about/PersonalDescription';
import Hobbies from '@/components/about/Hobbies';
import ShowcaseHeader from '@/components/about/ShowcaseHeader';
import CarouselQuery from '@/components/about/CarouselQuery';

function about() {
  return (
    <>
      <Head>
        <title>J. Gifford | about</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta
          name='description'
          content='Description of Jacob Giffords developer career'
        />
      </Head>
      <TransitionEffect />
      <section className='flex flex-col items-center overflow-hidden p-5 gap-5'>
        <AboutHeading />
        <PersonalDescription />
        <Hobbies />
        <ShowcaseHeader />
        <CarouselQuery />
      </section>
    </>
  );
}

export default about;
