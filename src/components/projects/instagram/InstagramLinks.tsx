import React from 'react';
import Link from 'next/link';
import Client from '@/components/svg/Client';
import Server from '@/components/svg/Server';
function InstagramLinks() {
  return (
    <div className='flex gap-2'>
      <Link href={'https://github.com/JaeGif/BlogAPI'} target='_blank'>
        <button className='p-2 border-2 dark:border-white border-black rounded-md flex'>
          <Client />
        </button>
      </Link>
      <Link href={'https://github.com/JaeGif/BlogAPI'} target='_blank'>
        <button className='p-2 border-2 dark:border-white border-black rounded-md flex'>
          <Server />
        </button>
      </Link>
      <Link href={'https://jaegif.github.io/BlogAPI/'} target='_blank'>
        <button className='p-2 border-2 dark:border-white border-black rounded-md flex'>
          View Live
        </button>
      </Link>
    </div>
  );
}

export default InstagramLinks;
