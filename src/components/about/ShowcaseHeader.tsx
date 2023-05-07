import React from 'react';
import ScrollArrowLeft from './ScrollArrowLeft';
import ScrollArrowRight from './ScrollArrowRight';
function ShowcaseHeader() {
  return (
    <span className='flex gap-5 sm:gap-10 items-center justify-center w-full'>
      <ScrollArrowLeft />
      <h2 className='hidden sm:block text-2xl font-bold text-blue-400'>
        Photography Showcase
      </h2>
      <h2 className='block sm:hidden text-2xl font-bold text-blue-400'>
        Photos
      </h2>
      <ScrollArrowRight />
    </span>
  );
}

export default ShowcaseHeader;
