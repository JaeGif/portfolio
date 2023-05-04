import React from 'react';
import style from './downchevron.module.css';
import Link from 'next/link';
// downchevron from junjun https://codepen.io/postor/pen/vYpNYg
type DownChevronProps = {
  anchor?: string;
};
function DownChevron({ anchor }: DownChevronProps) {
  return (
    <Link href={`${anchor}`} scroll={false}>
      <svg className={`${style.arrows}`}>
        <path className={`${style.a1}`} d='M0 0 L30 32 L60 0'></path>
        <path className={`${style.a2}`} d='M0 20 L30 52 L60 20'></path>
        <path className={`${style.a3}`} d='M0 40 L30 72 L60 40'></path>
      </svg>
    </Link>
  );
}

export default DownChevron;
