import React from 'react';

function ControlOverlay() {
  return (
    <div className='absolute top-5 left-5 z-10'>
      <span className='flex justify-between items-center w-24'>
        <div
          style={{ font: '/fonts/montserrat-alt.ttf' }}
          className='flex flex-col justify-center items-center'
        >
          <img className='h-8' src='/assets/creative/leftmouse.svg' />
          <p>Orbit</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img className='h-8' src='/assets/creative/dblmouse.svg' />
          <p>Pan</p>
        </div>
      </span>
    </div>
  );
}

export default ControlOverlay;
