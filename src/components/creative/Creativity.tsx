import Link from 'next/link';
import React from 'react';

function Creativity() {
  return (
    <div className='sm:pl-10 flex flex-col gap-5 text-lg'>
      <h2 className='text-2xl font-bold text-blue-400 '>
        Learning and Growing
      </h2>
      <p>
        Learning new things and finding inspiring projects fuels my passion for
        engineering.
      </p>
      <p>
        Most recently, I&apos;ve been committed to learning{' '}
        <em className='not-italic text-pink-500'>Three.js</em>, and all the
        technologies that come with it including{' '}
        <em className='not-italic text-pink-500'>React Three Fiber</em>,{' '}
        <em className='not-italic text-pink-500'>Drei</em>,{' '}
        <em className='not-italic text-pink-500'>Blender</em>, and{' '}
        <em className='not-italic text-pink-500'>GreenSocks</em>. I started
        learning Three.js with{' '}
        <em className='not-italic text-pink-500'>Three.js Journey</em> by Bruno
        Simon. Since completing the course, I&apos;ve continued building and
        expanding on new projects on my own, diving deep into shaders, and
        unique experiences. Learning has been rewarding and engaging, and I plan
        to incorporate more creative scenes in my work in the future.
      </p>
      <p>
        One of my dreams is to create an experience worthy of{' '}
        <em className='cursor-pointer not-italic text-blue-500'>
          <Link href={'https://www.awwwards.com/'} target='_blank'>
            Awwwards
          </Link>
        </em>{' '}
        recognition. I hope you&apos;ll join me in the journey to that goal.
      </p>
    </div>
  );
}

export default Creativity;
