import React from 'react';
import BottomImageCarousel from '@/components/about/BottomImageCarousel';
import TopImageCarousel from '@/components/about/TopImageCarousel';
import ImageCarousel from '@/components/about/ImageCarousel';
import useMediaQuery from '@/hooks/useMediaQuery';

function CarouselQuery() {
  const isMobile = useMediaQuery('(max-width: 800px)');
  return (
    <>
      {isMobile ? (
        <div className='flex flex-col gap-5'>
          <TopImageCarousel />
          <BottomImageCarousel />
        </div>
      ) : (
        <ImageCarousel />
      )}
    </>
  );
}

export default CarouselQuery;
