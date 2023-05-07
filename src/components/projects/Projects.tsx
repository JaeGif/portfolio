import React from 'react';

import SymphonyDetails from './symphony/SymphonyDetails';
import InstagramDetails from './instagram/InstagramDetails';
import BattleshipDetails from './battleship/BattleshipDetails';
import ShoppingDetails from './shopping/ShoppingDetails';
import WeatherDetails from './weather/WeatherDetails';
function Projects() {
  return (
    <section className='min-h-screen ' id='projects'>
      <span className='flex justify-start w-full p-5'>
        <h1 className='text-4xl font-semibold'>Projects</h1>
      </span>
      <div className='flex flex-col items-center gap-20'>
        <SymphonyDetails />
        <InstagramDetails />
        <BattleshipDetails />
        <ShoppingDetails />
        <WeatherDetails />
      </div>
    </section>
  );
}

export default Projects;
