import React from 'react';
import Image from 'next/image';

function about() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-7xl'>Build with Creativity</h1>
      <Image
        height={500}
        width={500}
        src={'/assets/images/punchout.png'}
        alt='picture of Jacob'
        aria-label='Picture of Jacob'
      />
    </div>
  );
}

export default about;
