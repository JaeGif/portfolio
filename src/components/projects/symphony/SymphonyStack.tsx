import React from 'react';
import Image from 'next/image';

function SymphonyStack() {
  return (
    <div className='flex'>
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/git-original.svg'}
        alt='git'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/mongodb-original-wordmark.svg'}
        alt='mongodb'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/nodejs-original.svg'}
        alt='node'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/typescript-original.svg'}
        alt='typescript'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/socketio-original.svg'}
        alt='socket.io'
      />
      <Image
        height={48}
        width={48}
        src={'/assets/favicons/express-original.svg'}
        alt='express'
      />
    </div>
  );
}

export default SymphonyStack;
