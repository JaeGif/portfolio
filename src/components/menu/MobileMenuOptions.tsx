import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
type MobileMenuOptionsProps = {
  toggleMenu: Function;
};
function MobileMenuOptions({ toggleMenu }: MobileMenuOptionsProps) {
  return (
    <div className='flex flex-col w-full h-[calc(100%-32px)] items-center justify-center text-3xl gap-10'>
      <Link onClick={() => toggleMenu()} href='/'>
        Home
      </Link>
      <Link onClick={() => toggleMenu()} href='/#projects'>
        Projects
      </Link>
      <Link onClick={() => toggleMenu()} href='/about'>
        About
      </Link>
      <Link onClick={() => toggleMenu()} href='/contact'>
        Contact
      </Link>
      <SocialLinks />
    </div>
  );
}

export default MobileMenuOptions;
