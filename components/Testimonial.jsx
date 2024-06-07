/* eslint-disable max-len */
import P from './typography/P';
import { Pic } from './ui/Pic';
import CarouselWrapper from './ui/CarouselWrapper';
import H2 from './typography/H2';

const stars = [1, 2, 3, 4, 5];
const responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: 'contain',
  },
};

const testimonilsList = [
  {
    id: 1,
    avatar: '/images/avatar/avatar1.png',
    country: 'Notting Hill, UK',
    countryCode: 'GB',
    customername: 'TOM OWEN',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 1',
    desc: 'I am completely satisfied with the chauffeur services offered by RolDrive Services. The chauffeur was skilled and seasoned and extremely polite. I would recommend them to everyone.',
  },
  {
    id: 2,
    avatar: '/images/avatar/avatar1.png',
    country: 'Fulham, UK',
    countryCode: 'GB',
    customername: 'PETER STEWART',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 2',
    desc: 'It was punctuality, customer service, and hospitality which attracted me to RolDrive Services. Zero hidden costs are also their forte.',
  },
  {
    id: 3,
    avatar: '/images/avatar/avatar1.png',
    country: 'London, UK',
    countryCode: 'GB',
    customername: 'EMILY BELLINGHAM',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 3',
    desc: 'One of my friends recommended me RolDrive Services for my sightseeing in London and it turned out to be a fabulous experience. They demonstrated professionalism from start to end.',
  },

  {
    id: 4,
    avatar: '/images/avatar/avatar1.png',
    country: 'Notting Hill, UK',
    countryCode: 'GB',
    customername: 'JOHN SHERINGHAM',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 4',
    desc: 'RolDrive Services is the ultimate chauffeur company in London and they have a stunning fleet of chauffeur-driven cars. I hired a Mercedes V-class for attending one of the events and it was an enjoyable travelling experience.',
  },
  {
    id: 5,
    avatar: '/images/avatar/avatar1.png',
    country: 'Kensington, UK',
    countryCode: 'GB',
    customername: 'KATE COLE',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 5',
    desc: 'We have been using RolDrive Services for many years chiefly because they offer an outstanding and responsive service with very proficient drivers.',
  },
  {
    id: 6,
    avatar: '/images/avatar/avatar1.png',
    country: 'Mayfair, UK',
    countryCode: 'GB',
    customername: 'RICHARD STERLING',
    rating: 5,
    title: 'No matter which country I travel, I always prefer RolDrive 6',
    desc: 'Based on my personal experience I would confidently say RolDrive Services is an excellent London Chauffeur company and they provide services like no other.',
  },
];

function Testimonial() {
  const testimonialSlides = testimonilsList.map((testimonil) => (
    <div className="card w-full sm:w-11/12 mx-auto bg-base-100 shadow-sm py-5 px-5 border rounded-md mr-5">
      <div className="flex items-center">
        {/* <div className="maxh-16 max-w-16">
          <Pic
            src={testimonil.avatar}
            alt="car4"
            className="border-2 border-primary p-1 rounded-full"
          />
        </div> */}
        <div className="">
          <P className="text-black pb-2">{testimonil.customername}</P>
          <div className="flex items-center gap-y-2">
            <div className="w-4 h-4 mr-1">
              <Pic
                src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${testimonil.countryCode}.svg`}
                alt="US"
              />
            </div>
            <P>{testimonil.country}</P>
          </div>
          <div className="rating mt-1 rating-sm">
            {/* {Array.from({ length }, (_, i) => (
              <input
                key={i}
                type="radio"
                name="rating-2"
                className="mr-1 bg-orange-700 mask mask-star"
                readOnly
                defaultChecked={i === length - 1}
              />
            ))} */}
            <div className="flex flex-row gap-0.5 mt-1 text-primary">
              {stars.map((star) => (
                <svg
                  key={star}
                  className="h-4 w-4 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card-body py-4 px-0">
        {/* <H2 className="font-bold text-black !leading-1">{testimonil.title}</H2> */}
        <P className="h-24">{testimonil.desc}</P>
      </div>
    </div>
  ));
  return (
    <div className="lg:py-14 py-10 2xl:container mx-auto px-4 md:px-6 lg:px-[60px]">
      <H2 className="font-bold text-black mb-8 uppercase md:!text-3xl sm:!text-2xl !text-xl">
        Ratings By Our Esteemed Clients
      </H2>
      <CarouselWrapper slides={testimonialSlides} noControl responsive={responsive} dots={false} />
    </div>
  );
}

export default Testimonial;
