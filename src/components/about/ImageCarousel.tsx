import React, { TouchEventHandler, useState } from 'react';
import { motion } from 'framer-motion';

function ImageCarousel() {
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [percentageMoved, setPercentageMoved] = useState<number>(0);
  const [cursorType, setCursorType] = useState<'grab' | 'grabbing'>('grab');
  const [previousPercentageMoved, setPreviousPercentageMoved] =
    useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorType('grabbing');
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
          setCursorType('grab');
          setPreviousPercentageMoved(percentageMoved);
        }}
        onMouseUp={() => {
          setMouseDownAt(0);
          setCursorType('grab');
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
        className={`h-80 flex gap-4 select-none justify-center cursor-${cursorType}`}
      >
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover md:hidden lg:flex cursor-${cursorType}`}
          src={'/assets/images/photography/swimming.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />

        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-${cursorType}`}
          src={'/assets/images/photography/cablecar.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover md:hidden lg:flex cursor-${cursorType}`}
          src={'/assets/images/photography/monke.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-${cursorType}`}
          src={'/assets/images/photography/mountains2.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
        <motion.video
          autoPlay={true}
          loop
          controls={false}
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-${cursorType}`}
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
          className={`w-[40vmin] h-full object-cover lg:flex cursor-${cursorType}`}
          src={'/assets/images/photography/hoover.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}%` }}
        />
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-${cursorType}`}
          src={'/assets/images/photography/reed.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}% center` }}
        />
        <motion.img
          whileHover={{ scale: 1.3, y: -30, zIndex: 10 }}
          whileTap={{ scale: 1.3, y: -30, zIndex: 10 }}
          animate={{
            objectPosition: `${100 + percentageMoved}% center)`,
          }}
          draggable={false}
          className={`w-[40vmin] h-full object-cover cursor-${cursorType}`}
          src={'/assets/images/photography/shh.webp'}
          alt='photography showcase'
          style={{ objectPosition: `${percentageMoved + 50}%` }}
        />
      </motion.div>
    </div>
  );
}

export default ImageCarousel;
