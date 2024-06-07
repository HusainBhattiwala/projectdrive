import React from 'react';
import Container from 'rolnew/comp/Container';
// import CarouselV2 from 'rolnew/ui/CarouselV2';
import Pic from 'rolnew/util/Pic';
import CarouselV1 from 'rolnew/ui/CarouselV1';
import Title from './Title';

const testimonials = [
  {
    id: 'testtimonial1',
    title: 'I enjoyed it very much!',
    description: 'I am completely satisfied with the chauffeur services offered by RolDrive Services. The chauffeur was skilled and seasoned and extremely polite. I would recommend them to everyone.',
    country: 'GB',
    name: 'Tom Owen',
  },

  {
    id: 'testtimonial2',
    title: 'I enjoyed it very much!',
    description: 'It was punctuality, customer service, and hospitality which attracted me to RolDrive Services. Zero hidden costs are also their forte.',
    country: 'US',
    name: 'Peter Stewart',
  },

  {
    id: 'testtimonial3',
    title: 'I enjoyed it very much!',
    description: 'One of my friends recommended me RolDrive Services for my sightseeing in London and it turned out to be a fabulous experience. They demonstrated professionalism from start to end.',
    country: 'US',
    name: 'Emily Bellingham',
  },
  {
    id: 'testtimonial4',
    title: 'I enjoyed it very much!',
    description: 'RolDrive Services is the ultimate chauffeur company in London and they have a stunning fleet of chauffeur-driven cars. I hired a Mercedes V-class for attending one of the events and it was an enjoyable travelling experience.',
    country: 'US',
    name: 'John Sheringham',
  },
  {
    id: 'testtimonial5',
    title: 'I enjoyed it very much!',
    description: 'We have been using RolDrive Services for many years chiefly because they offer an outstanding and responsive service with very proficient drivers.',
    country: 'US',
    name: 'Kate Cole',
  },
  {
    id: 'testtimonial6',
    title: 'I enjoyed it very much!',
    description: 'Based on my personal experience I would confidently say RolDrive Services is an excellent London Chauffeur company and they provide services like no other.',
    country: 'US',
    name: 'Richard Sterling',
  },
];

function ClientTestimonial() {
  return (
    <Container className="bg-[#11202D] sm:pt-[42px] sm:pb-[60px] sm:py-0 py-6 text-center">
      <Title subTile="Client stories" mainTitle="See how our clients feel delighted" />
      <div className="w-full sm:mt-12 mt-6">
        <CarouselV1 cardWidth="320" border>
          {testimonials.map((testimonial) => (
            <div className="w-full h-full sm:mx-2 mx-8 group cursor-pointer transition ease-in-out delay-150 bg-[#E1E1E1] bg-opacity-15 p-4 rounded-xl flex flex-col justify-between" key={testimonial?.id}>
              <div className="h-full">
                <h3 className="text-left sm:text-lg text-base font-medium">{testimonial?.title}</h3>
                <p className="text-left text-xs leading-5 font-normal text-[#B2B2B2]">{testimonial?.description}</p>
              </div>
              <div className="grow">
                <div className="flex gap-x-2 justify-start mt-5 items-center">
                  <div className="sm:w-8 sm:h-8 w-5 h-5">
                    <Pic className="rounded-full" alt={testimonial?.country} src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${testimonial.country}.svg`} objectFit="cover" />
                  </div>
                  <p className="text-[#B2B2B2] text-sm font-normal">{testimonial?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </CarouselV1>
      </div>
    </Container>
  );
}

export default ClientTestimonial;
