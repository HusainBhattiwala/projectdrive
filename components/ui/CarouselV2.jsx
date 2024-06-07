/* eslint-disable max-len */

'use client';

import { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import useDimension from 'hooks/useDimension';
import { Pic } from './Pic';

export const wait = async (interval) => new Promise((resolve) => {
  setTimeout(resolve, interval);
});

function CarouselV2({ children, cardWidth = 350, paginationClass }) {
  const containerRef = useRef(true);
  const carouselRef = useRef(true);
  const [prevEnd, setPrevEnd] = useState(true);
  const [nextEnd, setNextEnd] = useState(false);
  const { width } = useDimension(containerRef);

  // const cardCountFloat = useMemo(() => width / cardWidth, [width, cardWidth]);
  const cardCountFloat = Math.floor(width / cardWidth);
  // const cardCount = Math.floor(cardCountFloat);

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
        itemsToShow={cardCountFloat + 0.2}
        showArrows={false}
        itemsToScroll={cardCountFloat}
        // itemsToScroll={1}
        className={`relative carousel-wrapper lg:container mx-auto ${
          paginationClass || 'default-paginated'
        }`}
        pagination={false}
      >
        {children}
      </Carousel>

      {/* <div className="hidden lg:flex absolute justify-between 2xl:hidden top-10 w-full">
        <button
          type="button"
          onClick={onPrev}
          className={`m-4 ${
            prevEnd && 'opacity-10'
          } rounded-full border border-slate-200 shadow bg-white`}
          disabled={prevEnd}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#E8E8E8" />
            <path d="M34.3671 41.3488C34.5678 41.1438 34.7269 40.9002 34.8355 40.6321C34.9441 40.3639 35 40.0765 35 39.7862C35 39.4958 34.9441 39.2084 34.8355 38.9402C34.7269 38.6721 34.5678 38.4285 34.3671 38.2235L25.9706 29.6231L34.3671 21.0227C34.7718 20.6082 34.9991 20.0461 34.9991 19.46C34.9991 18.8739 34.7718 18.3117 34.3671 17.8973C33.9625 17.4828 33.4137 17.25 32.8415 17.25C32.2693 17.25 31.7205 17.4828 31.3158 17.8973L21.3829 28.0715C21.1822 28.2765 21.0231 28.5201 20.9145 28.7882C20.8059 29.0564 20.75 29.3438 20.75 29.6342C20.75 29.9245 20.8059 30.2119 20.9145 30.4801C21.0231 30.7482 21.1822 30.9918 21.3829 31.1968L31.3158 41.371C32.1382 42.2133 33.5232 42.2133 34.3671 41.3488Z" fill="#EC5C29" />
          </svg>

        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={nextEnd}
          className={`m-4 bg-white ${
            nextEnd && 'opacity-10'
          } rounded-full border border-slate-200 shadow`}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#E8E8E8" />
            <path d="M25.6329 18.6512C25.4322 18.8562 25.2731 19.0998 25.1645 19.3679C25.0559 19.6361 25 19.9235 25 20.2138C25 20.5042 25.0559 20.7916 25.1645 21.0598C25.2731 21.3279 25.4322 21.5715 25.6329 21.7765L34.0294 30.3769L25.6329 38.9773C25.2282 39.3918 25.0009 39.9539 25.0009 40.54C25.0009 41.1261 25.2282 41.6883 25.6329 42.1027C26.0375 42.5172 26.5863 42.75 27.1585 42.75C27.7307 42.75 28.2795 42.5172 28.6842 42.1027L38.6171 31.9285C38.8178 31.7235 38.9769 31.4799 39.0855 31.2118C39.1941 30.9436 39.25 30.6562 39.25 30.3658C39.25 30.0755 39.1941 29.7881 39.0855 29.5199C38.9769 29.2518 38.8178 29.0082 38.6171 28.8031L28.6842 18.629C27.8618 17.7867 26.4768 17.7867 25.6329 18.6512Z" fill="#EC5C29" />
          </svg>

        </button>
      </div> */}
      <div className="absolute top-20 md:flex hidden justify-between w-full">
        <button
          aria-label="prev"
          type="button"
          onClick={onPrev}
          className={`${prevEnd && 'opacity-10'} rotate-180 lg:-ml-1 -ml-4`}
          disabled={prevEnd}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
        <button
          aria-label="next"
          type="button"
          onClick={onNext}
          disabled={nextEnd}
          className={`${nextEnd && 'opacity-10'} lg:-mr-1 -mr-4`}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
      </div>
    </div>
  );
}

export default CarouselV2;
