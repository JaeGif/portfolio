import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../svg/ThemeToggle';
import LinkedIn from '../svg/LinkedIn';
import Github from '../svg/Github';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileHeader from './MobileHeader';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type HeaderProps = {
  toggleMenu: Function;
};
function Header({ toggleMenu }: HeaderProps) {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');
  useEffect(() => {
    console.log(router);
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);

  const line = {
    initial: { x: '-110%' },
    animate: { x: '0' },
  };
  return (
    <header className='invisible sm:visible sm:w-full sm:flex sm:px-28 sm:py-3 sm:justify-between'>
      <MobileHeader toggleMenu={toggleMenu} />
      <nav className='hidden sm:flex w-1/3 justify-start sm:gap-3 md:gap-8'>
        <motion.div
          initial='initial'
          animate='initial'
          whileHover='animate'
          className='overflow-hidden flex flex-col items-center min-w-fit'
        >
          <Link className={urlParam === '/' ? 'text-blue-500' : ''} href={'/'}>
            Home
          </Link>
          <motion.div
            variants={line}
            className='dark:bg-white bg-gray-950 h-[1px] w-full'
          >
            <p className='invisible'>underline</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial='initial'
          animate='initial'
          whileHover='animate'
          className='overflow-hidden flex flex-col items-center min-w-fit'
        >
          <Link
            className={urlParam === '/#projects' ? 'text-blue-500' : ''}
            href={'/#projects'}
            scroll={false}
          >
            Projects
          </Link>
          <motion.div
            variants={line}
            className='dark:bg-white bg-gray-950 h-[1px] w-full'
          >
            <p className='invisible'>underline</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial='initial'
          animate='initial'
          whileHover='animate'
          className='overflow-hidden flex flex-col items-center min-w-fit'
        >
          <Link
            className={urlParam === '/about' ? 'text-blue-500' : ''}
            href={'/about'}
          >
            About
          </Link>
          <motion.div
            variants={line}
            className='dark:bg-white bg-gray-950 h-[1px] w-full'
          >
            <p className='invisible'>underline</p>
          </motion.div>
        </motion.div>
      </nav>

      <div className='hidden sm:flex w-1/3 justify-end items-center gap-3'>
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
    </header>
  );
}

export default Header;
