import React from 'react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      ToggleTheme
    </button>
  );
}

export default ThemeToggle;
