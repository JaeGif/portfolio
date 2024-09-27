import React from 'react';

function ControlOverlay() {
  return (
    <div className='absolute top-5 left-5 z-10 flex flex-col justify-center items-center w-40 gap-2'>
      <h1 className='text-lg'>Controls</h1>

      <span className='text-sm flex justify-around items-center w-full'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/leftmouse.svg' />
          <p style={{ font: '/fonts/montserrat-alt.ttf' }}>Orbit</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/zoom.svg' />
          <p style={{ font: '/fonts/montserrat-alt.ttf' }}>Zoom</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='h-8' src='/assets/creative/dblmouse.svg' />
          <p style={{ font: '/fonts/montserrat-alt.ttf' }}>Pan</p>
        </div>
      </span>
    </div>
  );
}

export default ControlOverlay;
