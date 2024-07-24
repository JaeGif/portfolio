import React from 'react';
import Github from '../svg/Github';
import LinkedIn from '../svg/LinkedIn';
import Link from 'next/link';
import Twitter from '../svg/Twitter';
function SocialLinks() {
  return (
    <div className='flex gap-5'>
      <Link
        href='https://github.com/JaeGif'
        aria-label='github'
        target='_blank'
      >
        <Github />
      </Link>
      <Link
        href='https://www.linkedin.com/in/jacob-gifford-dev/'
        aria-label='linkedin'
        target='_blank'
      >
        <LinkedIn />
      </Link>
      <Link
        href='https://x.com/jgifforddev'
        aria-label='twitter'
        target='_blank'
      >
        <Twitter />
      </Link>
    </div>
  );
}

export default SocialLinks;
