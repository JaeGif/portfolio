import React from 'react';
import ThemeToggle from '../svg/ThemeToggle';
import Menu from '../svg/Menu';
type MobileHeaderProps = {
  toggleMenu: Function;
};
function MobileHeader({ toggleMenu }: MobileHeaderProps) {
  return (
    <div className='sm:hidden sm:invisible visible flex w-full justify-between items-center'>
      <Menu toggleMenu={toggleMenu} />
      <ThemeToggle />
    </div>
  );
}

export default MobileHeader;
