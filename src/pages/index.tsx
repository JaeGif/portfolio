import Intro from '@/components/Intro';
import Technologies from '@/components/Technologies';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <main>
      <Intro />
      <Technologies />
      <span className='w-full flex justify-center'>
        <div className='w-11/12 h-[1px] bg-gray-950 dark:bg-white' />
      </span>
      <Projects />
    </main>
  );
}
