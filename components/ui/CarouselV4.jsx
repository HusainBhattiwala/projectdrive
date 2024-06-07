/* eslint-disable max-len */
import { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import useDimension from 'hooks/useDimension';
import { Pic } from './Pic';

export const wait = async (interval) => new Promise((resolve) => {
  setTimeout(resolve, interval);
});

function CarouselV4({ children, cardWidth = 150, paginationClass }) {
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
        className={`relative carousel-wrapper 2xl:container mx-auto ${
          paginationClass || 'default-paginated'
        }`}
        pagination={false}
      >
        {children}
      </Carousel>
      <div className="absolute top-9 flex justify-between w-full">
        <button
          aria-label="prev"
          type="button"
          onClick={onPrev}
          className={`${
            prevEnd && 'opacity-10'
          } rotate-180 -ml-4 relative z-30`}
          disabled={prevEnd}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
        <button
          aria-label="next"
          type="button"
          onClick={onNext}
          disabled={nextEnd}
          className={`${nextEnd && 'opacity-10'} -mr-4 relative z-30`}
        >
          <Pic src="/images/icons/nextbw.svg" />
        </button>
      </div>
    </div>
  );
}

export default CarouselV4;
