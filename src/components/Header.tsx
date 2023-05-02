import Link from 'next/link';
import React from 'react';
import ThemeToggle from './svg/ThemeToggle';
import LinkedIn from './svg/LinkedIn';
import Github from './svg/Github';
import { useState, useEffect } from 'react';
function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className='w-full px-32 py-8'>
      <nav className='flex'>
        <Link href={'/'}>Home</Link>
        <Link href={'/#projects'} scroll={false}>
          Projects
        </Link>
        <Link href={'/about'}>About</Link>
      </nav>
      <h2>Logo</h2>
      {mounted && (
        <>
          <Link
            href={'https://github.com/JaeGif'}
            target='_blank'
            rel='noreferrer'
          >
            <Github />
          </Link>
          <Link
            href={'https://github.com/JaeGif'}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn />
          </Link>
          <ThemeToggle />
        </>
      )}
    </header>
  );
}

export default Header;
