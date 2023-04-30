import Image from 'next/image';
import { Inter } from 'next/font/google';
import Intro from '@/components/Intro';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Intro />
    </main>
  );
}
