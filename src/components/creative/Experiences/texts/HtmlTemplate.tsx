import React from 'react';
import { Html } from '@react-three/drei';
import Link from 'next/link';

type HtmlTemplateProps = {
  live?: string;
  source?: string;
  position?: [number, number, number];
};

function HtmlTemplate({ live = '', source = '', position }: HtmlTemplateProps) {
  return (
    <Html position={position}>
      <div className='flex flex-col gap-4 justify-center items-end text-black'>
        {live !== '' && (
          <Link
            href={live}
            target='_blank'
            className='flex justify-center items-center text-xl gap-2'
          >
            Live
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 96 960 960'
              width='36'
            >
              <path
                fill={'#000000'}
                d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
              />
            </svg>
          </Link>
        )}
        {source !== '' && (
          <Link
            href={source}
            target='_blank'
            className='flex justify-center items-center text-xl gap-2'
          >
            Code
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36px'
              height='36px'
              viewBox='0 0 36 36'
            >
              <path
                fill={'#000000'}
                d='M15 32H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2ZM5 30h8a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1ZM9 5.92a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 5.92ZM6 12.2h5.84v1.6H6Zm0 3h5.84v1.6H6Zm0 3h6v1.6H6ZM16 8h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8V5a.8.8 0 0 0-.8-.8Zm-.8 6h-6.4V5.8h6.4ZM16 20h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8v-6a.8.8 0 0 0-.8-.8Zm-.8 6h-6.4v-4.4h6.4Z'
              />
              <path fill='none' d='M0 0h36v36H0z' />
            </svg>
          </Link>
        )}
      </div>
    </Html>
  );
}

export default HtmlTemplate;
