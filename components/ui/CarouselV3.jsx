/* eslint-disable max-len */
// import Image from 'next/image';
import { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Pic } from './Pic';

export const wait = async (interval) => new Promise((resolve) => {
  setTimeout(resolve, interval);
});

function CarouselV3({ children, paginationClass }) {
  const containerRef = useRef(true);
  const carouselRef = useRef(true);
  const [prevEnd, setPrevEnd] = useState(true);
  const [nextEnd, setNextEnd] = useState(false);

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
        itemsToShow={1}
        showArrows={false}
        itemsToScroll={1}
        className={`relative carousel-wrapper ${
          paginationClass || 'default-paginated'
        }`}
        pagination={false}
      >
        {children}
      </Carousel>

      <div className="absolute flex justify-between top-1/3 w-full">
        <button
          type="button"
          aria-label="prev"
          onClick={onPrev}
          className={`m-4 ${prevEnd && 'opacity-10'} rotate-180`}
          disabled={prevEnd}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
        <button
          aria-label="next"
          type="button"
          onClick={onNext}
          disabled={nextEnd}
          className={`${nextEnd && 'opacity-10'}`}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
      </div>
    </div>
  );
}

export default CarouselV3;
