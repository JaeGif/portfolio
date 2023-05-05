import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/menu/Header';
import { useEffect, useState } from 'react';
import MobileMenuModal from '@/components/menu/MobileMenuModal';
import Footer from '@/components/Footer';
import TransitionEffect from '@/components/menu/TransitionEffect';

export default function App({ Component, pageProps }: AppProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ThemeProvider attribute='class'>
      {mounted && (
        <>
          {isMobileMenuOpen && <MobileMenuModal toggleMenu={toggleMenu} />}
          <Header toggleMenu={toggleMenu} />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
