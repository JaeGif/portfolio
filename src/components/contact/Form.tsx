import React, { useState } from 'react';
import { ThreeDots } from 'react-loading-icons';

function Form() {
  return (
    <div className='relative border-2 dark:border-white border-gray-950 rounded-lg p-4 dark:bg-gray-800 bg-white'>
      <div className='absolute hidden sm:flex top-5 left-5 h-full w-full dark:bg-white bg-gray-950 rounded-lg p-4 -z-10'></div>
      <form
        action='https://formsubmit.co/bddcd0d1879966d8248ec038d7fcd610'
        method='POST'
        className='min-w-[33vw] flex flex-col gap-3'
      >
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input
            className='h-10 p-2 rounded-md bg-gray-60 dark:bg-gray-700'
            id='name'
            required
            type='text'
            name='name'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            className='h-10 p-2 rounded-md bg-gray-60 dark:bg-gray-700'
            id='email'
            required
            type='email'
            name='email'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='resize-y h-24 min-h-[2.5rem] rounded-md p-2 bg-gray-60 dark:bg-gray-700'
            id='message'
            name='message'
            required
            maxLength={150}
            minLength={1}
          ></textarea>
        </div>
        <button className='flex w-full justify-center' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
