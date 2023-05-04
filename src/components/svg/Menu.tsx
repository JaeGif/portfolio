import React, { useState } from 'react';
import { useTheme } from 'next-themes';
type MenuProps = {
  toggleMenu: Function;
};
function Menu({ toggleMenu }: MenuProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <svg
      className='hover:cursor-pointer'
      onClick={() => toggleMenu()}
      xmlns='http://www.w3.org/2000/svg'
      height='32'
      viewBox='0 96 960 960'
      width='32'
    >
      <path
        fill={currentTheme === 'dark' ? '#FFFFFF' : '#000000'}
        d='M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z'
      />
    </svg>
  );
}

export default Menu;
