import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type MobileMenuOptionsProps = {
  toggleMenu: Function;
};
function MobileMenuOptions({ toggleMenu }: MobileMenuOptionsProps) {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');
  useEffect(() => {
    console.log(router);
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '0%' }}
      className='flex flex-col w-full h-[calc(100%-32px)] items-center justify-center text-3xl gap-10'
    >
      <Link
        className={urlParam === '/' ? 'text-blue-500' : ''}
        onClick={() => toggleMenu()}
        href='/'
      >
        Home
      </Link>

      <Link
        className={urlParam === '/#projects' ? 'text-blue-500' : ''}
        onClick={() => toggleMenu()}
        href='/#projects'
      >
        Projects
      </Link>
      <Link
        className={urlParam === '/about' ? 'text-blue-500' : ''}
        onClick={() => toggleMenu()}
        href='/about'
      >
        About
      </Link>
      <Link
        className={urlParam === '/contact' ? 'text-blue-500' : ''}
        onClick={() => toggleMenu()}
        href='/contact'
      >
        Contact
      </Link>
      <SocialLinks />
    </motion.div>
  );
}

export default MobileMenuOptions;
