import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/about/ImageCarousel';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Head from 'next/head';
import ScrollArrowLeft from '@/components/about/ScrollArrowLeft';
import ScrollArrowRight from '@/components/about/ScrollArrowRight';
import Link from 'next/link';
import AboutHeading from '@/components/about/AboutHeading';
import PersonalDescription from '@/components/about/PersonalDescription';
import Hobbies from '@/components/about/Hobbies';
import ShowcaseHeader from '@/components/about/ShowcaseHeader';

function about() {
  return (
    <>
      <Head>
        <title>J. Gifford | About</title>
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
        <ImageCarousel />
      </section>
    </>
  );
}

export default about;
