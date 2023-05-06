import React, { useState } from 'react';
import { motion } from 'framer-motion';
function ImageCarousel() {
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
      nextPercentage = Math.max(Math.min(nextPercentageNoBorder, 0), -100);
    setPercentageMoved(nextPercentage);
  };

  return (
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
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      className={`h-80 flex gap-4 select-none`}
    >
      <motion.img
        animate={{ objectPosition: `${100 + percentageMoved}%, center)` }}
        transition={{ duration: 1 }}
        draggable={false}
        className={`w-[40vmin] h-full object-cover object-center`}
        src={'/assets/images/photography/beach.jpg'}
        alt='photography showcase'
        style={{ objectPosition: `${percentageMoved + 100}% center` }}
      />
      <motion.img
        animate={{ objectPosition: `${100 + percentageMoved}%, center)` }}
        transition={{ duration: 1 }}
        draggable={false}
        className={`w-[40vmin] h-full object-cover object-center`}
        src={'/assets/images/photography/mountains2.png'}
        alt='photography showcase'
        style={{ objectPosition: `${percentageMoved + 100}% 50%` }}
      />
      <motion.img
        animate={{ objectPosition: `${100 + percentageMoved}%, center)` }}
        transition={{ duration: 1 }}
        draggable={false}
        className={`w-[40vmin] h-full object-cover object-center hidden sm:flex`}
        src={'/assets/images/photography/water-rock.jpg'}
        alt='photography showcase'
        style={{ objectPosition: `${percentageMoved + 100}% 50%` }}
      />
      <motion.img
        animate={{ objectPosition: `${100 + percentageMoved}%, center)` }}
        transition={{ duration: 1 }}
        draggable={false}
        className={`w-[40vmin] h-full object-cover object-center`}
        src={'/assets/images/photography/shh.jpg'}
        alt='photography showcase'
        style={{ objectPosition: `${percentageMoved + 100}% 50%` }}
      />
    </motion.div>
  );
}

export default ImageCarousel;
//className={`${style.}`}
