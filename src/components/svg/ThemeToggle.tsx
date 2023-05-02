import React from 'react';
import { useTheme } from 'next-themes';
import Moon from '@/theme/Moon';
import Sun from '@/theme/Sun';

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <button
      onClick={() =>
        currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
      }
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;
