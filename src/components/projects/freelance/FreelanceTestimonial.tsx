import React from 'react';
import Image from 'next/image';
function FreelanceTestimonial() {
  return (
    <div className='flex flex-col justify-center items-start relative z-0'>
      <h2 className='text-lg font-bold'>Client Testimonial</h2>
      <span className='relative z-100 flex flex-col md:flex-row justify-center items-center p-4 gap-5 border-2 border-pink-500 bg-white dark:bg-gray-800 rounded-md mt-1'>
        <div className='flex absolute top-2 left-2 h-full w-full bg-pink-500 rounded-lg -z-10'></div>

        <div className='max-h-16 w-16 rounded-full overflow-hidden'>
          <Image
            className=''
            height={100}
            width={100}
            src={'/assets/images/freelance/client-profile.jpg'}
            alt='client photo'
          />
        </div>
        <p className='font-semibold text-center'>
          &quot;
          <em className=''>Jacob&apos;s work was incredible.</em>
          &quot;
        </p>
      </span>
    </div>
  );
}

export default FreelanceTestimonial;
