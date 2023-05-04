import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/menu/Header';
import { useState } from 'react';
import MobileMenuModal from '@/components/menu/MobileMenuModal';

export default function App({ Component, pageProps }: AppProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <ThemeProvider attribute='class'>
      {isMobileMenuOpen && <MobileMenuModal toggleMenu={toggleMenu} />}
      <Header toggleMenu={toggleMenu} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
