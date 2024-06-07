'use client';

import { useEffect, useRef, useState } from 'react';
import Vehicle from 'components/shared/Vehicle';
// import BookingEngine from 'components/Booking/BookingEngine';
// import { BackgroundImage } from 'components/ui/BackgroundImage';
// import { BookingProvider } from 'context/BookingContext';
import P from 'components/typography/P';
import H2 from 'components/typography/H2';
// import BannerTemp from 'components/BannerTemp';
import PointerText from 'components/shared/PointerText';
import BookingBannerV3 from './home/BookingBannerV3';

const business = [
  {
    id: 1,
    vname: 'Mercedes Benz E-Class',
    vdetails:
      "The Mercedes E-Class is a great option for business because of its balance of luxury, performance, and technology. Mercedes Benz is known for their brilliant vehicles and truly stands by what they call its cars to be - 'The best or nothing'. The car has a sleek, professional design and a spacious, comfortable interior that suits any businessman's needs. A Mercedes E Class hire is what most businessmen prefer for their travel needs.",
    vimg: '/images/cars/mercedes-benz-e-class-large.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 2,
    vname: 'BMW 5 Series',
    vdetails:
      'The BMW 5 Series is a great option for business due to its combination of luxury, performance, and technology. As a direct competitor to the Mercedes Benz E-Class, it offers a spacious, comfortable interior and a sleek, professional design. The 5 series also offers a great balance of comfort and handling, making it a perfect car for long business trips. Overall, the BMW 5 Series is a perfect blend of luxury and functionality, making it a great choice for businesses. Try the BMW 5 series by searching for BMW 5 series rental UK.',
    vimg: '/images/cars/bmw-5-series-large.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 3,
    vname: 'Audi A6',
    vdetails:
      'The Audi A6 is a great option for business travel due to its luxurious and comfortable interior, sleek design, and advanced technology. It offers a spacious and comfortable cabin, with a range of features that can help increase productivity on the road. All of these features make the A6 series a perfect option for business travel, as it offers a great balance of luxury and functionality. You can find our chauffeur-driven services by simply typing Audi A6 London for hire.',
    vimg: '/images/cars/audi-a6-large.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
];

const businesspage = [
  {
    id: 1,
    title: 'Meet and greet',
    desc: 'Our premium chauffeur will offer you a meet and greet at the arrival hall when collecting you.',
  },
  {
    id: 2,
    title: 'Free waiting time',
    desc: ' Have an urgent meeting to attend or catch a flight quickly? Our premium chauffeur will wait for 60 minutes for airport transfers and 15 minutes for non-airport transfers.',
  },
  {
    id: 3,
    title: 'Flight monitoring technology',
    desc: 'Is your flight late? Don’t worry our chauffeur will adjust the schedule and time of pickup accordingly.',
  },
  {
    id: 4,
    title: 'Timely pickups and drops',
    desc: 'Our chauffeurs are always punctual and always on time. Thus no time will be lost waiting.',
  },
  {
    id: 5,
    title: 'Finest hospitality and customer services',
    desc: 'Enjoy first-rate hospitality and customer services for a seamless riding experience.',
  },
  {
    id: 6,
    title: 'Wide range of options in the fleet',
    desc: 'Explore our fleet of diverse business class cars by browsing our fleet. Get spoiled for choices as each one stands out.',
  },
  {
    id: 7,
    title: 'Certified chauffeurs',
    desc: 'All our chauffeurs are qualified and experienced as each of them is recruited based on their driving skills, track records and conduct.',
  },
  {
    id: 8,
    title: 'Easy booking procedures online',
    desc: 'Reserving your favourite car is easy from our trusted website. Booking procedures take only a few minutes.',
  },
  {
    id: 9,
    title: 'Competitive price rates',
    desc: 'The price rates are reasonable with zero hidden costs.',
  },
  {
    id: 10,
    title: '100% privacy',
    desc: 'Maintain confidentiality wherever you go with our vehicles.',
  },
  {
    id: 11,
    title: 'Flexible cancellation policies',
    desc: 'Our cancellation policies are flexible with a 100% refund if done within 24 hours of reservation.',
  },
];

const first = [
  {
    id: 1,
    vname: 'Mercedes Benz S-Class',
    vdetails:
      'The Mercedes-Benz S-Class is a luxury sedan known for its advanced technology, refined design, and powerful engine. It offers a comfortable and very spacious interior. Packed with features such as advanced driver assistance systems and a high-end infotainment system. The S-Class is considered a flagship model for the Mercedes-Benz brand. Perfect for a first-class service the Mercedes Benz S Class caters to all requirements you might need on road.',
    vimg: '/images/cars/mercedes-benz-s-class.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 2,
    vname: 'BMW 7 series',
    vdetails:
      'The BMW 7 Series is a luxury sedan that combines power, technology, and comfort. It comes with a very powerful engine, advanced driver assistance systems, and a luxurious interior made of premium materials. The 7 Series also includes cutting-edge features like a touchscreen infotainment system and a panoramic sunroof. It is regarded as one of the best luxury vehicles in the first-class market. Simply book one by typing BMW 7 series London RolDrive!',
    vimg: '/images/cars/bmw_7_series.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 3,
    vname: 'Audi A8',
    vdetails:
      "The Audi A8 is a full-size luxury sedan known for its cutting-edge technology, sleek design, and smooth ride. It comes with a luxurious interior made of premium materials. The A8 also has a cutting-edge infotainment system and advanced features like a virtual cockpit and a heads-up display. The Audi A8 is considered the brand's flagship model. A car perfect for first-class requirements – The Audi A8 luxury car.",
    vimg: '/images/cars/Audi8.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
];

const firstpage = [
  {
    id: 1,
    title: 'Immaculately maintained cars',
    desc: 'All first-class vehicles in our fleet are impeccably maintained and come in top condition.',
  },
  {
    id: 2,
    title: 'Wide options to pick from',
    desc: 'Choose your favourite car from your preferred brand from the plenty of options we offer.',
  },
  {
    id: 3,
    title: 'Punctual services',
    desc: 'We give foremost priority to punctual pickups and drop-offs since we understand the value of time.',
  },
  {
    id: 4,
    title: 'Unparalleled hospitality',
    desc: 'We are known for our unrivalled hospitality and for dealing with customers seamlessly. All the chauffeurs in our squad are friendly, courteous, polite and well-mannered.',
  },
  {
    id: 5,
    title: 'Meet and greet',
    desc: 'We offer meet & greet service with 1 Hour of Complimentary waiting time. We can also adjust the schedule if the flight is delayed which usually happens without any notice. We use advanced flight monitoring technology to deal with flight delays.',
  },
  {
    id: 6,
    title: 'Qualified chauffeurs',
    desc: 'All the chauffeurs we have collaborated with are trained and certified with superb driving skills. They also wear the company logo.',
  },
  {
    id: 7,
    title: 'Zero hidden costs',
    desc: 'Count on us as we ask for all-inclusive charges after taking taxes, tips, and tolls into account. Everything is transparent and you can find it in our price quote.',
  },
];

const luxury = [
  {
    id: 1,
    vname: 'Rolls Royce Phantom VIII',
    vdetails:
      "The Rolls-Royce Phantom VIII is a luxury sedan that serves as Rolls-Royce Motor Cars' flagship model. It is powered by a V12 engine and has a sleek, elegant design. It provides a smooth and powerful ride, as well as cutting-edge technology and luxurious amenities. The Phantom VIII is known for its hand-crafted details and superior craftsmanship, and it is regarded as one of the world's most luxurious automobiles. Just type in ‘Rolls Royce Phantom hire London’ and find us – RolDrive.",
    vimg: '/images/cars/RollsRoycephantom8.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },

  {
    id: 2,
    vname: 'Rolls Royce Ghost',
    vdetails:
      "The Rolls-Royce Ghost is a luxury sedan that is a slightly smaller version of the flagship Phantom model. It is powered by a V12 engine and has a sleek and elegant design. It provides a smooth and powerful ride, as well as cutting-edge technology and luxurious amenities. The Ghost is known for its hand-crafted details and superior craftsmanship, and it is regarded as one of the world's most luxurious automobiles. Book your Rolls Royce with driver today and experience true luxury.",
    vimg: '/images/cars/RollsRoyceGhost.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 3,
    vname: 'Mercedes Maybach',
    vdetails:
      'The Mercedes-Maybach S Class is a luxury sedan that combines Mercedes-Benz performance and technology with the opulence and exclusivity of the Maybach brand. It has a large and comfortable interior, as well as a number of high-end amenities and advanced safety features. The car has a V12 engine that provides a smooth and powerful ride. It is regarded as one of the most luxurious cars in the world and is ideal for those seeking the ultimate in luxury and comfort.',
    vimg: '/images/cars/Mercedes_Maybach.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 4,
    vname: 'Bentley Mulsanne',
    vdetails:
      "The Bentley Mulsanne is a luxury sedan that combines power, comfort, and elegance. It comes with a V8 engine and a luxurious, handcrafted interior. With advanced technology and a variety of high-end amenities, the car provides a smooth and effortless ride. The Mulsanne is regarded as one of the world's most luxurious automobiles, and it is ideal for those seeking to experience the pinnacle of British craftsmanship and refinement.",
    vimg: '/images/cars/BentleyMulsanne.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
];

const luxurypage = [
  {
    id: 1,
    title: 'Leather Interior',
    desc: 'The interior of all vehicles is made of hand-sewn leather.',
  },
  {
    id: 2,
    title: 'Plush cabin',
    desc: 'The plush cabin is the hallmark of every luxury vehicle and our luxury class vehicles won’t disappoint.',
  },
  {
    id: 3,
    title: 'Temperature control seats',
    desc: 'Enjoy climate-controlled seats that heat up or cool down as per your preference.',
  },
  {
    id: 4,
    title: 'Entertainment and music',
    desc: 'The high-end and sophisticated vehicles include Bluetooth stereo systems and flat-panel televisions which keep dull moments at bay.',
  },
  {
    id: 5,
    title: 'Spot for champagne',
    desc: 'Enjoy sparkling wine while you celebrate every journey.',
  },
  {
    id: 6,
    title: 'Plush seat extravagance',
    desc: 'Enjoy wide and reclining lounge-like seats in vehicles which take you to the very lap of luxury.',
  },
  {
    id: 7,
    title: 'LED mood lights',
    desc: 'All vehicles have ambient lighting inside to make the atmosphere vibrant. Car Lights also feature Smart App Control, Music Sync Mode, DIY Mode and Multiple Scene Options.',
  },
  {
    id: 8,
    title: 'Bespoke amenities',
    desc: 'You can get the amenities customised by opting for the convertible new-shaped models.',
  },
];
const electric = [
  {
    id: 1,
    vname: 'Tesla Model X',
    vdetails:
      'The Tesla Model X for long range travelling is an ideal full-size luxury electric SUV known for its cutting-edge technology, sleek design, and long-distance range. It has a large panoramic windshield, a spacious interior, and falcon-wing doors. It has a fully electric powertrain that provides instant torque and acceleration. It also includes advanced driver assistance. It is widely regarded as one of the best electric SUVs on the market.',
    vimg: '/images/cars/TeslaModelX.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },

  {
    id: 2,
    vname: 'Tesla Model S',
    vdetails:
      'The Tesla Model S is an all-electric luxury sedan. It has a modern design, cutting-edge technology, and high-performance capabilities. It has received numerous awards for its environmental impact and innovation. Book us for a Tesla Model S in London.',
    vimg: '/images/cars/Tesla-Model-S.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
  {
    id: 3,
    vname: 'Tesla Model Y',
    vdetails:
      'The Tesla Model Y for long range travelling is another all-electric compact SUV from our fleet. It has a modern design, cutting-edge technology, and high-performance capabilities. It has received numerous awards for its environmental impact and innovation. The Model Y has a roomy interior and a versatile liftback design. It is a slightly less expensive option than the Model X.',
    vimg: '/images/cars/Tesla-Model-Y.png',
    passengers: '3 People',
    bags: '1 Large & 1 Medium Bag',
  },
];
const electricpage = [
  {
    id: 1,
    title: 'Environment-friendly',
    desc: 'Environment-friendly cars with zero carbon emissions. Show the world you care about the future.',
  },
  {
    id: 2,
    title: 'No noise',
    desc: 'Zero noise pollution from the engine.',
  },
  {
    id: 3,
    title: 'Can rival petrol or diesel',
    desc: 'First-class performance that can rival petrol vehicles.',
  },
  {
    id: 4,
    title: 'Top-end luxury',
    desc: 'Luxurious travelling experience.',
  },
];

const suv = [
  {
    id: 1,
    vname: 'Range Rover Defender',
    vdetails:
      'The Range Rover Defender is an iconic SUV that combines ruggedness with refinement, making it the perfect companion for both on-road and off-road adventures. With its distinctive design, advanced technology, and robust capabilities, the Range Rover Defender delivers unmatched performance and versatility. Whether navigating urban streets or conquering challenging terrains, the Range Rover Defender offers a thrilling driving experience while providing comfort and luxury to its occupants. It is a true embodiment of power, style, and adventure.',
    vimg: '/images/cars/range-rover-defender1100x203.png',
    passengers: '3 People',
    bags: '2 Large & 1 Medium Bag',
  },
  {
    id: 2,
    vname: 'Land Rover Discovery',
    vdetails:
      "The Land Rover Discovery is a versatile SUV that excels in both city travel and intercity journeys. With its refined design and luxurious interior, it offers a comfortable and stylish ride for urban commuting. At the same time, the Land Rover Discovery's robust off-road capabilities and spacious cabin make it an ideal choice for intercity travel, allowing passengers to experience a smooth and enjoyable journey no matter the destination. Its combination of elegance and ruggedness makes it a reliable and adaptable vehicle for any adventure.",
    vimg: '/images/cars/land-rover-discovery1100x203.png',
    passengers: '3 People',
    bags: '2 Large & 1 Medium Bag',
  },
  {
    id: 3,
    vname: 'Range Rover Sport',
    vdetails:
      "The Range Rover Sport is a dynamic and powerful SUV that combines luxury and performance seamlessly. Its sleek and athletic design exudes sophistication, while its advanced technology and cutting-edge features provide a thrilling driving experience. With its responsive handling and impressive off-road capabilities, the Range Rover Sport is equally at home on city streets as it is on intercity terrains. Whether you're navigating urban roads or exploring the great outdoors, the Range Rover Sport offers comfort, versatility, and an unforgettable experience.",
    vimg: '/images/cars/range-rover-sport1100x203.png',
    passengers: '3 People',
    bags: '2 Large & 1 Medium Bag',
  },
  {
    id: 4,
    vname: 'Land Rover Range Rover',
    vdetails:
      "The Land Rover Range Rover is a luxurious SUV that excels in both city travel and intercity journeys. Its refined design and advanced features make it a perfect companion for navigating urban streets with ease, while its powerful performance ensures a smooth and comfortable ride on long intercity drives. The Range Rover's spacious cabin provides ample legroom for passengers, allowing them to relax and enjoy the journey in utmost comfort. Whether you're cruising through the city or embarking on a road trip, the Land Rover Range Rover delivers a premium driving experience with its blend of style, versatility, and generous legroom.",
    vimg: '/images/cars/land-rover-range-rover1100x203.png',
    passengers: '3 People',
    bags: '2 Large & 1 Medium Bag',
  },
];

const suvpage = [
  {
    id: 1,
    title: 'Leather Interior',
    desc: 'The interior of all vehicles is made of hand-sewn leather.',
  },
  {
    id: 2,
    title: 'Plush cabin',
    desc: 'The plush cabin of our SUV class vehicles won’t disappoint.',
  },
  {
    id: 3,
    title: 'Temperature control seats',
    desc: 'Enjoy climate-controlled seats that heat up or cool down as per your preference.',
  },
  {
    id: 4,
    title: 'Timely pickups and drops',
    desc: 'Our chauffeurs are always punctual and always on time. Thus no time will be lost waiting.',
  },
  {
    id: 5,
    title: 'Entertainment and music',
    desc: 'The high-end and sophisticated vehicles include Bluetooth stereo systems and flat-panel televisions which keep dull moments at bay.',
  },
  {
    id: 6,
    title: 'Ample Legroom',
    desc: 'Plenty of space to spread out and enjoy the journey.',
  },
];

const mpv = [
  {
    id: 1,
    vname: 'Mercedes V Class',
    vdetails:
      'The Mercedes V Class is an excellent choice for group travel, accommodating up to 6 people comfortably. With its spacious and luxurious interior, it offers ample legroom and headroom for all passengers. The flexible seating configuration allows for easy access and ensures everyone can travel together in utmost comfort. The V Class also boasts a range of advanced features and amenities, including climate control, entertainment systems, and connectivity options, ensuring an enjoyable and convenient journey for all occupants. Its combination of style, comfort, and capacity makes it an ideal choice for group travel needs.',
    vimg: '/images/cars/mercedes_v_class.png',
    passengers: '6 People',
    bags: '7 Large & 2 Medium Bag',
  },
  {
    id: 2,
    vname: 'Mercedes Vito',
    vdetails:
      'The Mercedes Vito is an ideal choice for group travel, accommodating up to 8 people with its spacious seating arrangement. With its versatile seating options and ample legroom, it ensures comfort and convenience for all passengers. The Vito is designed with practicality in mind, offering easy access through its sliding doors and a generous amount of storage space for luggage. Equipped with modern features and a smooth driving experience, the Vito provides a reliable and comfortable solution for larger groups, making it an excellent choice for group outings, corporate events, or family trips.',
    vimg: '/images/cars/mercedes-vito1100x203.png',
    passengers: '8 People',
    bags: '7 Large & 2 Medium Bag',
  },
];

const mpvpage = [
  {
    id: 1,
    title: 'Leather Interior',
    desc: 'The interior of all vehicles is made of hand-sewn leather.',
  },
  {
    id: 2,
    title: 'Plush cabin',
    desc: 'The plush cabin of our SUV class vehicles won’t disappoint.',
  },
  {
    id: 3,
    title: 'Climate control',
    desc: 'Separate temperature controls for all seating rows.',
  },
  {
    id: 4,
    title: 'Entertainment and music',
    desc: 'The high-end and sophisticated vehicles include Bluetooth stereo systems and flat-panel televisions which keep dull moments at bay.',
  },
  {
    id: 5,
    title: 'Ample Space for group travel',
    desc: 'Plenty of space for groups of people to enjoy the journey.',
  },
];

const sprinter = [
  {
    id: 1,
    vname: 'Mercedes Sprinter (12 Seaters)',
    vdetails:
      "The Mercedes 12 seater offered by RolDrive is an excellent choice for group travel. With its spacious interior and seating capacity for up to 12 passengers, it provides ample room for everyone to travel comfortably. The vehicle is designed with the utmost attention to passenger comfort, featuring plush seats, generous legroom, and climate control systems. The Mercedes 12 seater also offers advanced safety features, ensuring a secure and enjoyable journey for all passengers. Whether it's a family trip, corporate outing, or group excursion, the Mercedes 12 seater provides a convenient and luxurious transportation solution.",
    vimg: '/images/cars/sprinter-121100x203.png',
    passengers: '12 People',
    bags: '12 Large Bag',
  },
  {
    id: 2,
    vname: 'Mercedes Sprinter (16 Seaters)',
    vdetails:
      "The Mercedes 16 seater offered by RolDrive is an ideal choice for group travel. With its spacious design and seating capacity for up to 16 passengers, it can accommodate large groups comfortably. The vehicle is equipped with luxurious amenities, including comfortable seating, ample legroom, and climate control, ensuring a pleasant and enjoyable journey. The Mercedes 16 seater also boasts advanced safety features, providing passengers with peace of mind throughout their trip. Whether it's a corporate event, sightseeing tour, or airport transfer, the Mercedes 16 seater provides a stylish and convenient transportation solution for group travel.",
    vimg: '/images/cars/sprinter-121100x203.png',
    passengers: '16 People',
    bags: '16 Large Bag',
  },
  {
    id: 3,
    vname: 'Mercedes Sprinter (19 Seaters)',
    vdetails:
      'The Mercedes 19 seater offered by RolDrive is an excellent choice for group travel. With its spacious interior and seating capacity for up to 19 passengers, it provides ample room for everyone to travel comfortably. The vehicle is equipped with comfortable seating, climate control, and modern amenities to enhance the travel experience. The Mercedes 19 seater combines luxury and functionality, making it an ideal option for corporate events, team outings, or group transfers. With its superior design and reliable performance, this vehicle ensures a smooth and enjoyable journey for larger groups.',
    vimg: '/images/cars/sprinter-191100x203.png',
    passengers: '19 People',
    bags: '19 Large Bag',
  },
];

const sprinterpage = [
  {
    id: 1,
    title: 'Leather Interior',
    desc: 'The interior of all vehicles is made of hand-sewn leather.',
  },
  {
    id: 2,
    title: 'Plush cabin',
    desc: 'The plush cabin of our MPV class vehicles won’t disappoint',
  },
  {
    id: 3,
    title: 'Climate control',
    desc: 'Separate temperature controls for all seating rows.',
  },
  {
    id: 4,
    title: 'Entertainment and music',
    desc: 'The high-end and sophisticated vehicles include Bluetooth stereo systems and flat-panel televisions which keep dull moments at bay.',
  },
  {
    id: 5,
    title: 'Ample Space for group travel',
    desc: 'Plenty of space for groups of people to enjoy the journey.',
  },
];

export default function Home({ param }) {
  const [carClass, setCarClass] = useState('business');
  const targetRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('param');
    setCarClass(param || paramValue || 'business');
    if (param || paramValue) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [param]);

  return (
    <main>
      {/* <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 pt-10 pb-8 bg-center w-full h-auto relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundImage
            src="/images/banner/fleet_banner.jpg"
            alt="booking_bg"
            className="w-full h-auto object-cover brightness-[0.7]"
          />
        </div>
        <BookingProvider>
          <BookingEngine />
        </BookingProvider>
      </div> */}
      {/* <BannerTemp bgimg="/images/banner/fleet_banner.jpg" /> */}
      <BookingBannerV3
        img="/images/banner/fleets.jpg"
        className="bg-bottom"
        line1="our fleet"
        line2=" "
        line3="Book your premium chauffeur ride today. Arrive in style, stress-free and rejuvenated."
      />
      <div ref={targetRef} />
      <div className="mx-auto text-black font-semibold flex justify-start pt-2 rounded-none w-fit max-w-[85%] overflow-auto gap-10 cars-cat relative mt-12 z-[1]">
        <div className="absolute bottom-0 left-0 sm:w-full w-[190%] h-[2px] bg-gray-200 z-1" />
        <span
          className={` ${
            carClass === 'business'
            && 'text-primary border-b-2 border-b-primary z-10 ml-auto'
          } hover:text-primary focus:text-primary cursor-pointer`}
          onClick={() => {
            setCarClass('business');
          }}
        >
          Business
        </span>
        <span
          className={` ${
            carClass === 'first' && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10`}
          onClick={() => {
            setCarClass('first');
          }}
        >
          First
        </span>
        <span
          className={` ${
            carClass === 'luxury' && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10`}
          onClick={() => {
            setCarClass('luxury');
          }}
        >
          Luxury
        </span>
        <span
          className={` ${
            carClass === 'electric'
            && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10`}
          onClick={() => {
            setCarClass('electric');
          }}
        >
          Electric
        </span>
        <span
          className={` ${
            carClass === 'suv' && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10 mr-auto`}
          onClick={() => {
            setCarClass('suv');
          }}
        >
          SUV
        </span>
        <span
          className={` ${
            carClass === 'mpv' && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10 mr-auto`}
          onClick={() => {
            setCarClass('mpv');
          }}
        >
          MPV
        </span>
        <span
          className={` ${
            carClass === 'sprinter'
            && 'text-primary border-b-2 border-b-primary'
          } hover:text-primary focus:text-primary cursor-pointer z-10 mr-auto`}
          onClick={() => {
            setCarClass('sprinter');
          }}
        >
          Sprinter
        </span>
      </div>
      {carClass === 'business' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">Business</H2>
          <P className="my-2  text-justify">
            In the business world, a strong presence is essential. To make an
            impact, it&#39;s vital to arrive at meetings looking your best.
            Hiring a business class chauffeur service for transportation can
            provide many benefits. The professional and sophisticated appearance
            of a sleek, well-maintained vehicle can make a positive impression
            on clients and associates.
          </P>
          <P className=" text-justify">
            In addition, the comfort and luxury of a business class chauffeur
            service, equipped with all amenities, can make the journey more
            pleasant and relaxing. Safety and security are also paramount, with
            experienced and vetted drivers at the helm. The added convenience of
            having the driver navigate traffic allows for a stress-free journey,
            allowing you to focus on the meeting at hand. Hiring a
            business-class chauffeur service can also be cost-effective for
            companies needing regular transportation for employees or clients.
          </P>
          {business.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            Hiring RolDrive&#39;s premium chauffeur services provide you with a
            whole host of options:
          </P>
          {businesspage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}
      {carClass === 'first' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">First</H2>
          <P className="mb-2  text-justify">
            At our premium chauffeur service from the United Kingdom, we provide
            a fleet of sophisticated, first-class vehicles to meet all of your
            transportation needs. Our fleet includes a variety of first class
            vehicles in various models, all of which are sure to exceed your
            expectations. Whether you need to attend an urgent meeting in the
            city, plan a business trip or take a sightseeing tour, our
            first-class cars will ensure a comfortable, punctual and enjoyable
            journey. Our unrivalled services and hospitality services are what
            sets us apart. Our cars in the first-class segment provide a
            seamless, relaxing, and enjoyable travel experience, allowing you to
            focus on other important matters. Each vehicle is equipped with
            world-class amenities.
          </P>
          {first.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            When you book our elegant and stylish first-class chauffeur-driven
            cars, you enjoy benefits like:
          </P>
          {firstpage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}

      {carClass === 'luxury' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">Luxury</H2>
          <P className="my-2  text-justify">
            RolDrive&#39;s luxury segment of chauffeur-driven vehicles is the
            epitome of opulence and class. When you want to make a statement and
            arrive in style, this is the segment to choose. Our fleet of luxury
            cars includes the most premium of vehicles, such as Rolls Royce and
            Bentley. These cars are not just a mode of transportation, they are
            a symbol of success and prestige. Whether it&#39;s a special
            occasion like a wedding, a red-carpet event, or just a night out on
            the town, our luxury vehicles will elevate your experience and make
            it truly unforgettable.
          </P>
          <P className=" text-justify">
            Our luxury cars are not only a status symbol but also a reflection
            of your personality and style. Our team of experienced and
            professional drivers will ensure that you are transported in comfort
            and safety, leaving you to enjoy the ride and the attention that
            comes with it. With RolDrive&#39;s luxury segment, you can make a
            lasting impression and stand out from the crowd. Book your ride
            today and experience the ultimate form of luxury from RolDrive.
          </P>
          {luxury.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            Here are some of the amenities from the Luxury segment:
          </P>
          {luxurypage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}
      {carClass === 'electric' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">Electric</H2>
          <P className="mb-2 text-justify ">
            RolDrive is proud to offer a range of electric vehicles in our
            fleet, as part of our commitment to reducing carbon emissions and
            making the world a cleaner place for future generations. Electric
            vehicles produce zero emissions while driving and are powered by
            clean energy, thus reducing the environmental impact of
            transportation. Not only are they better for the environment, but
            they also offer a smooth and quiet driving experience, making them
            ideal for those who want to enjoy a comfortable journey without the
            typical noise of a petrol or diesel engine. By choosing
            RolDrive&#39;s electric vehicles, our clients are not only reducing
            their own carbon footprint but also making a conscious effort
            towards a sustainable future.
          </P>
          {electric.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            Benefits of our electric chauffeured cars:
          </P>
          {electricpage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}

      {carClass === 'suv' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">SUV</H2>
          <P className="my-2 text-justify">
            RolDrive&#39;s SUV class is the epitome of luxury and versatility,
            offering an exceptional travel experience for those who appreciate
            spaciousness, comfort, and style. Our fleet of SUVs is meticulously
            selected to meet the highest standards of quality, ensuring that you
            enjoy a premium travel experience.
          </P>
          <P className="text-justify">
            With ample seating and legroom, our SUVs provide a comfortable and
            relaxed atmosphere, making them ideal for longer journeys or group
            travel. Whether youWith ample seating and legroom, our SUVs provide
            a comfortable and relaxed atmosphere, making them ideal for longer
            journeys or group travel. Whether you&#39;re heading to a business
            meeting, airport transfer, or embarking on a sightseeing adventure,
            our SUVs offer the perfect blend of comfort and functionality.re
            heading to a business meeting, airport transfer, or embarking on a
            sightseeing adventure, our SUVs offer the perfect blend of comfort
            and functionality.
          </P>
          <P className="my-2 text-justify">
            The SUV&#39;s in our fleet are equipped with state-of-the-art
            features and amenities, including premium leather upholstery,
            advanced climate control systems, and cutting-edge entertainment
            systems. This allows you to enjoy a first-class experience while on
            the road, with options to customize the environment to your
            preferences.
          </P>
          {suv.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            Here are some of the amenities from the SUV segment.
          </P>
          {suvpage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}
      {carClass === 'mpv' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">MPV</H2>
          <P className="my-2 text-justify">
            RolDrive&#39;s MPV class offers a versatile and practical solution
            for those in need of extra space and comfort. With their spacious
            interiors and flexible seating configurations, RolDrive&#39;s MPVs
            are ideal for various purposes, such as family outings, group
            travel, or corporate events. These vehicles provide ample room for
            passengers and their belongings, ensuring a comfortable and
            enjoyable journey. Whether it&#39;s a weekend getaway or airport
            transfers with a larger group, the MPV class offers convenience and
            reliability.
          </P>
          <P className="text-justify">
            One of the standout features of RolDrive&#39;s MPV class is its
            flexibility. The seating arrangements can be easily adjusted to
            accommodate different passenger and luggage requirements. Whether
            you need extra space for luggage or prefer to create a more intimate
            seating configuration, the MPV class can adapt to your needs.
          </P>
          {mpv.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className=" text-justify">
            Here are some of the amenities from the MPV segment.
          </P>
          {mpvpage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}
      {carClass === 'sprinter' && (
        <div className="container mx-auto p-6 text-black">
          <H2 className="text-center !text-3xl font-bold mb-4">Sprinter</H2>
          <P className="my-2 text-justify">
            RolDrive&#39;s Sprinter class offers a premium and versatile
            transportation solution for various purposes. The Sprinter is
            renowned for its spacious interior, allowing for comfortable seating
            and ample legroom. With its high roof and extended body options, it
            can accommodate larger groups or accommodate extra luggage for
            airport transfers, corporate events, or group travel. The Sprinter
            class is equipped with luxury features, including air conditioning,
            leather seats, and advanced entertainment systems, ensuring a
            pleasant and enjoyable journey for passengers.
          </P>
          <P className="text-justify">
            RolDrive&#39;s Sprinter class offers versatility in configuration,
            allowing for customizable seating arrangements and partitioned
            compartments for added privacy. This makes it an ideal choice for
            executive transportation, roadshows, VIP transfers, or any event
            requiring a sophisticated and luxurious mode of transportation.
          </P>
          {sprinter.map((cars) => (
            <div key={cars.id}>
              <Vehicle
                tag1="Free Wifi"
                tag2="Mineral Water"
                tag3="Child Seat On Demand"
                vname={cars.vname}
                vdetails={cars.vdetails}
                vimg={cars.vimg}
                passengers={cars.passengers}
                bags={cars.bags}
              />
            </div>
          ))}
          <P className="text-justify ">
            Here are some of the amenities from the Sprinter segment.
          </P>
          {sprinterpage.map((points) => (
            <PointerText
              key={points.id}
              bold={points.title}
              plain={points.desc}
            />
          ))}
        </div>
      )}
    </main>
  );
}
