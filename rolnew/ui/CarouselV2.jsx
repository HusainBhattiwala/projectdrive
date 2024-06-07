/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import useDimension from 'hooks/useDimension';
import { IoMdArrowForward } from 'react-icons/io';

export const wait = async (interval) => new Promise((resolve) => {
  setTimeout(resolve, interval);
});

function CarouselV2({ children, cardWidth = 200, paginationClass }) {
  const containerRef = useRef(true);
  const carouselRef = useRef(true);
  const [prevEnd, setPrevEnd] = useState(true);
  const [nextEnd, setNextEnd] = useState(false);
  const { width } = useDimension(containerRef);
  const cardCountFloat = Math.floor(width / cardWidth);

  const onPrev = async () => {
    if (!prevEnd) {
      carouselRef.current.slidePrev();
    }
    await wait(500);
    setPrevEnd(carouselRef.current.state.activePage === 0);
    setNextEnd(
      carouselRef.current.state.activePage
        === carouselRef.current.state.pages.length - 1,
    );
  };

  const onNext = async () => {
    if (!nextEnd) {
      carouselRef.current.slideNext();
    }
    await wait(500);
    setPrevEnd(carouselRef.current.state.activePage === 0);
    setNextEnd(
      carouselRef.current.state.activePage
        === carouselRef.current.state.pages.length - 1,
    );
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <Carousel
        // eslint-disable-next-line no-return-assign
        ref={(ref) => (carouselRef.current = ref)}
        itemsToShow={cardCountFloat + 2}
        outerSpacing={0}
        showArrows={false}
        itemsToScroll={cardCountFloat}
        className={`relative carousel-wrapper lg:container mx-auto ${
          paginationClass || 'default-paginated'
        }`}
        pagination={false}
      >
        {children}
      </Carousel>
      <div className="absolute top-16 flex justify-between w-full">
        <button
          type="button"
          onClick={onPrev}
          className={`${prevEnd && 'opacity-100'} rotate-180 sm:-ml-16 -ml-6 bg-[#11202D] rounded-full p-4`}
          // disabled={prevEnd}
        >
          <IoMdArrowForward className="text-[#FDC65C] text-2xl" />
        </button>
        <button
          type="button"
          onClick={onNext}
          // disabled={nextEnd}
          className={`${nextEnd && 'opacity-100'} sm:-mr-16 -mr-6 bg-[#11202D] rounded-full p-4`}
        >
          <IoMdArrowForward className="text-[#FDC65C] text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default CarouselV2;
