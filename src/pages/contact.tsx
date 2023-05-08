import React from 'react';
import TransitionEffect from '@/components/menu/TransitionEffect';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Form from '@/components/contact/Form';
import ContactHeader from '@/components/contact/ContactHeader';
function contact() {
  return (
    <>
      <Head>
        <title>J. Gifford | Contact</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta name='description' content='Contact Jacob Gifford' />
      </Head>
      <TransitionEffect />
      <section className='w-full h-[calc(100vh-6.5rem)] p-2 flex flex-col items-center mt-10 gap-10'>
        <ContactHeader />
        <Form />
      </section>
    </>
  );
}

export default contact;
