import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TopImageCarousel() {
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [percentageMoved, setPercentageMoved] = useState<number>(0);
  const [previousPercentageMoved, setPreviousPercentageMoved] =
    useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseDownAt(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (mouseDownAt === 0) return;
    const mouseDelta = mouseDownAt - e.clientX,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageNoBorder = previousPercentageMoved + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageNoBorder, 50), -50);
    setPercentageMoved(nextPercentage);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setMouseDownAt(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (mouseDownAt === 0) return;
    const mouseDelta = mouseDownAt - e.touches[0].clientX,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageNoBorder = previousPercentageMoved + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageNoBorder, 50), -50);
    setPercentageMoved(nextPercentage);
  };
  return (
    <div className='w-full flex justify-center'>
      <motion.div
        id='photography'
        style={{
          transform: `translate(${percentageMoved}%, 0%)`,
        }}
        onMouseLeave={() => {
          setMouseDownAt(0);
          setPreviousPercentageMoved(percentageMoved);
        }}
        onMouseUp={() => {
          setMouseDownAt(0);
          setPreviousPercentageMoved(percentageMoved);
        }}
        onTouchStart={(e) => {
          handleTouchStart(e);
        }}
        onTouchMove={(e) => {
          handleTouchMove(e);
        }}
        onTouchEnd={(e) => {
          setMouseDownAt(0);
          setPreviousPercentageMoved(percentageMoved);
        }}
        onTouchCancel={(e) => {
          setMouseDownAt(0);
          setPreviousPercentageMoved(percentageMoved);
        }}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseDown={(e) => handleMouseDown(e)}
        className={`h-80 flex gap-4 select-none justify-center cursor-grab`}
      >
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-grab`}
          src={'/assets/images/photography/monke.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
        <motion.video
          autoPlay
          loop
          controls={false}
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-grab`}
        >
          <source src='/assets/images/photography/house.mp4'></source>
        </motion.video>
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-grab`}
          src={'/assets/images/photography/mountains2.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
      </motion.div>
    </div>
  );
}

export default TopImageCarousel;
