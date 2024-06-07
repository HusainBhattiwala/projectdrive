'use client';

import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const picsArr = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80',
  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
  'https://images.unsplash.com/photo-1464885602181-3d7835717ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1459350627708-30cff1602fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1502154882433-a614dba12819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
].map((item) => (
  <img
    src={item}
    alt={item}
    className="mx-auto h-80"
    onDragStart={handleDragStart}
    role="presentation"
  />
));

const defaultResponsive = {
  0: {
    items: 1.3,
  },
  768: {
    items: 2.3,
  },
  1024: {
    items: 2.5,
    itemsFit: 'contain',
  },
};

function CarouselWrapper({
  slides = picsArr,
  responsive = defaultResponsive,
  noDots = false,
  noControl = true,
}) {
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    setIsCarouselReady(true);
  }, []);

  if (isCarouselReady) {
    return (
      <AliceCarousel
        disableButtonsControls={noControl}
        disableDotsControls={noDots}
        infinite
        autoPlay
        autoPlayInterval={3000}
        mouseTracking
        items={slides}
        responsive={responsive}
      />
    );
  }
  return <div className="" />;
}

export default CarouselWrapper;
