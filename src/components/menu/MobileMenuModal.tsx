import React, { useEffect } from 'react';
import MobileMenuOptions from './MobileMenuOptions';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '-100%' }}
      onClick={(e) => e.stopPropagation()}
      onScroll={(e) => e.stopPropagation()}
      className='fixed top-16 left-0 w-screen h-[calc(100vh-64px)] dark:bg-gray-800 bg-gray-10 z-50'
    >
      <MobileMenuOptions toggleMenu={toggleMenu} />
    </motion.div>
  );
}

export default MobileMenuModal;
