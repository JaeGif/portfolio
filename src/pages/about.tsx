import React from 'react';
import Image from 'next/image';
import style from '../styles/animateTrack.module.css';
import ImageCarousel from '@/components/about/ImageCarousel';
function about() {
  return (
    <div className='flex flex-col items-center overflow-hidden'>
      <h1 className='text-7xl'>Build with Creativity</h1>
      <Image
        height={500}
        width={500}
        src={'/assets/images/punchout.png'}
        alt='picture of Jacob'
        aria-label='Picture of Jacob'
      />
      <ImageCarousel />
    </div>
  );
}

export default about;
