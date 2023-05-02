import Link from 'next/link';
import React from 'react';
import ThemeToggle from './svg/ThemeToggle';
import LinkedIn from './svg/LinkedIn';
import Github from './svg/Github';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className='w-full px-32 py-8 flex justify-between'>
      <nav className='flex w-1/3 justify-start gap-8'>
        <Link href={'/'}>Home</Link>
        <Link href={'/#projects'} scroll={false}>
          Projects
        </Link>
        <Link href={'/about'}>About</Link>
      </nav>
      <div className='w-1/3 flex justify-center'>
        <Image
          height={50}
          width={50}
          src={'/assets/images/logo.png'}
          alt='logo'
        />
      </div>
      {mounted && (
        <div className='flex w-1/3 justify-end items-center gap-3'>
          <Link
            href={'https://github.com/JaeGif'}
            target='_blank'
            rel='noreferrer'
          >
            <Github />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/jacob-gifford-88a453172/'}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn />
          </Link>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}

export default Header;
