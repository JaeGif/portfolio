import React, { useEffect } from 'react';
import Menu from '../svg/Menu';
import MobileMenuOptions from './MobileMenuOptions';
type MobileMenuOptionsProps = {
  toggleMenu: Function;
};
function MobileMenuModal({ toggleMenu }: MobileMenuOptionsProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onScroll={(e) => e.stopPropagation()}
      className='fixed top-16 left-0 w-screen h-[calc(100vh-64px)] dark:bg-gray-950 bg-white z-50'
    >
      <MobileMenuOptions toggleMenu={toggleMenu} />
    </div>
  );
}

export default MobileMenuModal;
