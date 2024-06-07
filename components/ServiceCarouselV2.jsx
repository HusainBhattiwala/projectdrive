'use client';

import Image from 'next/image';
import { useState } from 'react';
import ReadMore from 'components/shared/ReadMore';
import H2 from 'components/typography/H2';
import CarouselV2 from 'components/ui/CarouselV2';
import Link from 'next/link';

export default function ServiceCarouselV2() {
  const [hover, setHover] = useState(0);
  const services = [
    {
      id: 1,
      serviceImg: '/images/services/airport-transfer.jpg',
      serviceTitle: 'Airport transfers',
      serviceLink: '/airport-transfers',
      serviceDesc:
        'At RolDrive, we go above and beyond with our private chauffeur service in london',
      serviceDesc2:
        'to ensure that your airport transfer is smooth and effortless. Whether you need to be picked up from your hotel and dropped off at the airport or vice versa, our friendly and courteous chauffeurs will ensure your journey is comfortable and stress-free. Enjoy personalized service with a meet-and-greet through a custom paging board, and assistance with your luggage. We offer a wide range of vehicles to cater to your specific needs, so you can sit back, relax and let us take care of the rest.',
    },
    {
      id: 2,
      serviceImg: '/images/services/sightseeingtours.jpg',
      serviceTitle: 'Sightseeing tours',
      serviceLink: '#',
      serviceDesc: 'With our, hourly chauffeur service',
      serviceDesc2:
        ' you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress-free transportation solutions of RolDrive as our skilled chauffeurs act as your guide on long-distance or pleasure trips throughout the breathtaking city of London. Our sightseeing chauffeur services provide you with a knowledgeable driver who is familiar with the city and its suburbs, making your trip both intriguing and enjoyable. Let us help you make the most of your vacation and book a RolDrive chauffeur service in London today!',
    },
    {
      id: 3,
      serviceImg: '/images/services/businesstransfers.jpg',
      serviceTitle: 'Corporate chauffeurs',
      serviceLink: '/corporate-chauffeur-service-london',
      serviceDesc: 'Our luxury chauffeur service in London',
      serviceDesc2:
        " is the perfect way to elevate your business meetings and assert your professional presence. With RolDrive, you'll make a lasting impression from the moment you step out of our chauffeur driven vehicles. Our corporate chauffeurs are dependable, efficient, and dedicated to exceeding your expectations. Whether you're travelling to a meeting or arriving at the office, let us help you make a statement and command the boardroom.",
    },
    {
      id: 4,
      serviceImg: '/images/services/weddingtransfers.jpg',
      serviceTitle: 'Wedding Transfers',
      serviceLink: '#',
      serviceDesc: '',
      serviceDesc2:
        "At RolDrive, we specialise in providing the highest quality wedding transportation services in London for the bride, groom, and guests. We understand the importance of making this special day flawless, which is why we offer a range of upscale, chauffeur-driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach, and Bentley. These vehicles add an extra touch of elegance to your celebration and are sure to make your day unforgettable. From sipping champagne in the car to capturing candid moments on the way to the venue, let us help you create memories that will last a lifetime - Just search for 'chauffeur driver near me' or RolDrive.com!",
    },
    {
      id: 5,
      serviceImg: '/images/services/eventtransfers.jpg',
      serviceTitle: 'Event Transfers',
      serviceLink: '/event-chauffeur-service-in-london',
      serviceDesc:
        "At RolDrive's event chauffeur service in London,",
      serviceDesc2:
        "we provide transportation services for all types of social, cultural, and sports events in and around the city. Whether you're attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and special experience. Our premium chauffeur services are available for all types of events, including concerts and fashion shows. Let us take you to your event with grace and finesse, our premium chauffeur-driven vehicle will transport you in style and comfort. This is all about chauffeur service luxury.",
    },
    {
      id: 6,
      serviceImg: '/images/services/privatejettransfers.jpg',
      serviceTitle: 'Private Jet Transfers',
      serviceLink: '#',
      serviceDesc: '',
      serviceDesc2:
        'RolDrive is a leading provider of private jet transfer services in London. Our experienced private chauffeur service will safely transport you from the landing terminal of your private helicopter or airliner to your hotel or business meeting. We cover major all major airports in London. Our fleet of impeccably maintained vehicles include luxury brands such as Rolls Royce, Range Rover, BMW, Audi and Mercedes Benz, all equipped with complimentary packages to ensure a comfortable and enjoyable experience.',
    },
  ];
  return (
    <section className="bg-black">
      <div className="mx-auto py-10">
        <H2 className="mb-6 font-bold text-white capitalize text-center lg:!text-4xl md:!text-3xl sm:!text-2xl !text-xl lg:!container mx-auto">
          Our services
        </H2>
        <CarouselV2>
          {services.map((service) => (
            <div className="w-full card mr-4 cursor-pointer" key={service.id}>
              <div
                className={`h-52 w-full relative ${
                  service.id === hover && 'grayscale-0'
                } grayscale hover:grayscale-0`}
              >
                <Image
                  src={service.serviceImg}
                  alt={service.serviceTitle}
                  fill
                  className="h-full w-full rounded-2xl p-1 mx-auto"
                  style={{ objectFit: 'cover' }}
                />

                {/* <BackgroundImage
                  src={service.serviceImg}
                  alt={service.serviceTitle}
                  className="w-full h-full object-cover mx-auto rounded-2xl"
                /> */}
              </div>
              <div
                className="items-center px-2 py-2 text-center card-body lg:px-4"
                onMouseEnter={() => setHover(service.id)}
                onMouseLeave={() => setHover(0)}
              >
                <H2 className="mt-5 mb-1 font-bold capitalize text-white">
                  <Link href={`${service.serviceLink}`}>
                    {service.serviceTitle}
                  </Link>
                </H2>
                <div className="!text-white">
                  <span className="text-[14px] -mb-[6px] inline">
                    {service.serviceDesc}
                  </span>
                  <ReadMore
                    text={service.serviceDesc2}
                    numberOfLines={4}
                    lineHeight={1.4}
                    showLessButton
                  />
                </div>
              </div>
            </div>
          ))}
        </CarouselV2>
      </div>
    </section>
  );
}
