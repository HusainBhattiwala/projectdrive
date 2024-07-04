'use client';

import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Services from 'rolnew/comp/Services';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import CarClass from 'rolnew/comp/CarClass';
import BookModal from 'rolnew/comp/BookModal';
import { useEffect, useRef, useState } from 'react';
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';

export default function Page() {
  const [hideScrollDown, setHideScrollDown] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        setHideScrollDown(true);
      }
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const bannerData = {
    mainTitle: 'Best Airport Transfers',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence',
    backgroundImage: '/rolnew/airports/airport-transfer-london.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      img: '/rolnew/global/icons/airport_transfer/Fixed Price.png',
      title: 'Fixed Price',
      desc: 'Fixed price service, ensuring transparency and predictability in costs for your transportation needs. No hidden charges or surprises.',
    },
    {
      img: '/rolnew/global/icons/airport_transfer/Free Meet & Greet.png',
      title: 'Free Meet & Greet',
      desc: 'We enhance your travel experience with our complimentary Meet & Greet service, ensuring a personal and welcoming touch upon your arrival.',
    },
    {
      img: '/rolnew/global/icons/airport_transfer/60 Mins Free Waiting Time.png',
      title: '60 Mins Free Waiting Time',
      desc: 'Delayed flight? We offer a convenient service with 60 minutes of free waiting time, ensuring flexibility and peace of mind upon your arrival.',
    },
    {
      img: '/rolnew/global/icons/airport_transfer/24_7 Flight Tracking.png',
      title: '24/7 Flight Tracking',
      desc: "Our 24/7 flight tracking ensures your chauffeur is always on time, even if your flight isn't.",
    },
  ];

  const topPicksData = {
    title: 'Airport Transfers',
    desc: "Our airport transfer services provide pre-arranged transportation from the airport directly to your chosen destination, whether it's your home, hotel, or office. We eliminate the stress of travel, ensuring you can relax and enjoy the journey. With 24/7 availability and real-time flight tracking, you can trust us to deliver timely and reliable service.",
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Choose Your Airport',
    },
    list: [
      {
        id: 1,
        image: '/rolnew/global/country/Heathrow_Airport.jpg',
        countryCode: 'GB',
        cityName: 'Heathrow Airport',
      },
      {
        id: 2,
        image: '/rolnew/global/country/Gatwick_Airport.jpg',
        countryCode: 'GB',
        cityName: 'Gatwick Airport',
      },
      {
        id: 3,
        image: '/rolnew/global/country/London_City_Airport.jpg',
        countryCode: 'GB',
        cityName: 'London City Airport',
      },
      {
        id: 4,
        image: '/rolnew/global/country/London_Southend_Airport.jpg',
        countryCode: 'GB',
        cityName: 'London Southend Airport',
      },
      {
        id: 5,
        image: '/rolnew/global/country/London_Stansted_Airport.jpg',
        countryCode: 'GB',
        cityName: 'London Stansted Airport',
      },
      {
        id: 6,
        image: '/rolnew/global/country/Luton_Airport.jpg',
        countryCode: 'GB',
        cityName: 'Luton Airport',
      },
    ],
  };

  const faqData = {
    title: 'Frequently Asked Questions About Airport Transfers:',
    data: [
      {
        id: 0,
        question: 'What is an airport transfer?',
        ans: 'An airport transfer is a service that transports passengers from an airport to their destination or vice versa, typically using vehicles such as cars, shuttles, or limousines.',
      },
      {
        id: 1,
        question: 'How do I book an airport transfer?',
        ans: 'You can book an airport transfer service online through various platforms, travel agencies, or directly with transfer service providers such as RolDrive. Most offer user-friendly websites or mobile apps for convenient booking.',
      },
      {
        id: 2,
        question: 'What types of vehicles are used for airport transfers?',
        ans: 'Airport transfers can involve various vehicles, including standard cars, sprinters, shuttles, and even luxury options like limousines, depending on the service provider and your preferences.',
      },
      {
        id: 3,
        question: 'Are airport transfers available 24/7?',
        ans: "Many airport transfer services such as RolDrive operate 24/7 to accommodate different flight schedules. It's recommended to check with the specific service provider for their availability.",
      },
      {
        id: 4,
        question: 'Can I book an airport transfer for a large group?',
        ans: "Yes, most airport transfer services offer options for group bookings. It's advisable to inform the provider about the group size when making a reservation to ensure appropriate vehicle arrangements.",
      },
      {
        id: 5,
        question: 'How far in advance should I book an airport transfer?',
        ans: "It's recommended to book your airport transfer in advance, especially during peak travel times. Booking ahead ensures availability and allows for better planning.",
      },
      {
        id: 6,
        question:
          'What information do I need to provide when booking an airport transfer?',
        ans: "Typically, you'll need to provide your flight details, pickup/drop-off location, contact information, and the number of passengers. This information helps the transfer service coordinate your journey effectively.",
      },
      {
        id: 7,
        question: 'Can I make changes to my airport transfer reservation?',
        ans: 'Yes, most providers allow modifications to reservations within a specified time frame. Check the terms and conditions of the service you choose or contact customer support for assistance.',
      },
      {
        id: 8,
        question: 'What happens if my flight is delayed?',
        ans: 'Many airport transfer services including RolDrive track flight arrivals and adjust pickup times accordingly. Its essential to notify the service about any delays to ensure they can make necessary adjustments. In the situation where you are unable to coordinate with a RolDrive chauffeur, a free 60-minute waiting time is offered.',
      },
      {
        id: 9,
        question: 'Is there a cancellation policy for airport transfers?',
        ans: "Yes, most providers including RolDrive have a cancellation policy. A full refund is offered if you cancel a RolDrive chauffeur 12 hours prior to booking time. It's crucial to be aware of the cancellation terms and conditions when booking an airport transfer.",
      },
      // {
      //   id: 10,
      //   question: 'How do I identify my driver at the airport?',
      //   ans: 'Typically, your driver will have a sign displaying your name on a paging board and the transfer service logo. Some providers also provide driver contact information in advance for easy communication.',
      // },
      // {
      //   id: 11,
      //   question: 'Are airport transfer prices fixed, or do they vary?',
      //   ans: "Prices for airport transfers can vary depending on factors such as the distance, vehicle type, and service provider. It's advisable to check the pricing details before confirming your reservation.",
      // },
      // {
      //   id: 12,
      //   question: 'Are tips included in the airport transfer cost?',
      //   ans: 'Tips are not always included in the airport transfer cost. Clarify this with the service provider or check their guidelines so you don’t face any sudden expenses.',
      // },
      // {
      //   id: 13,
      //   question: 'Do airport transfer services provide child seats?',
      //   ans: "Many airport transfer services offer child seats upon request. It's important to inform them in advance about the age and weight of any children travelling with you.",
      // },
      // {
      //   id: 14,
      //   question:
      //     'Can I use airport transfer services for both domestic and international flights?',
      //   ans: 'Yes, airport transfer services cater to both domestic and international flights. Ensure that you provide accurate flight information when making your reservation.',
      // },
    ],
  };

  const servicesData = {
    heading: {
      mainTitle: 'About Airport Transfer Service',
    },
    data: [
      {
        title: 'What is an Airport Transfer Service?',
        desc: "RolDrive’s private Airport Transfer focuses on luxury, efficiency, and comfort, offering a premium travel solution for those arriving at or departing from the airport. Specialising in seamless airport journeys, RolDrive caters to individuals who prioritise punctuality, safety, and a touch of sophistication in their travel experience. With a fleet of high-end vehicles, passengers can enjoy a relaxing and stylish ride, complemented by professional chauffeurs who are knowledgeable about the best routes to ensure timely arrivals or departures. Amenities like flight tracking, Meet and Greet services, luggage assistance, complimentary water, Wi-Fi, and child seats upon request are standard, enhancing the journey's comfort and convenience. Whether for business or pleasure, RolDrive's Airport Transfer Service is designed to provide a hassle-free, comfortable, and luxurious start or end to your travel, reflecting the highest standards of hospitality and efficiency in ground transportation.",
      },
      {
        title:
          'Difference between a chauffeured airport transfer and hailing a cab to the airport.',
        desc: (
          <p className="text-[#B2B2B2]">
            A RolDrive chauffeured airport transfer and hailing a cab represent
            two distinct experiences. RolDrive offers reliable airport transfers
            with premium services, ensuring luxury, comfort, and
            professionalism. Clients enjoy pre-booked, punctual rides in
            high-end vehicles, with professional chauffeurs, tailored amenities
            like in-car Wi-Fi and water, and personalized meet-and-greet
            services.
            <br />
            2. In contrast, hailing a cab provides a more utilitarian travel
            option, with variable costs, standard vehicles, and no guarantee of
            service level or amenities or punctuality. While cabs are convenient
            for spontaneous travel, RolDrive specialises in a bespoke,
            stress-free journey, making it an ideal choice for those seeking
            reliable, high-quality, and comfortable airport transportation.
          </p>
        ),
      },
      {
        title: 'How to go about booking Best Airport Transfers?',
        desc: (
          <p className="text-[#B2B2B2]">
            Visit the Website or App: Access RolDrives platform either through
            our official website or by downloading our mobile app.
            <p className="text-[#B2B2B2] ml-4">
              1. Select Your Service: Choose the airport transfer service
              option, indicating whether you need a pick-up, drop-off, or both
              to and from the airport
              <br />
              2. Provide Details: Enter your travel details, including the date,
              time, flight information, and the number of passengers. This
              ensures that the service is tailored to your schedule and
              requirements.
              <br />
              3. Choose Your Vehicle: Select from RolDrives fleet of luxury
              vehicles based on your preference and the number of travellers to
              ensure a comfortable ride.
              <br />
              4. Confirm and Pay: Review your booking details, confirm the
              information, and proceed to payment. RolDrive offers transparent
              pricing, so youll know the cost upfront.\n6. Receive Confirmation:
              After payment, youll receive a booking confirmation via email,
              including the details of your chauffeur and vehicle.
            </p>
          </p>
        ),
      },
      {
        title: 'Will RolDrive provide a Hotel to Airport Transfer?',
        desc: "1. Yes, RolDrive certainly provides hotel to airport transfer services. This convenient service is designed for travellers who need reliable and comfortable transportation from their hotel to the airport. With RolDrive, you can expect a luxury experience, including a professional chauffeur who will meet you at your hotel, assist with your luggage, and ensure you arrive at the airport in plenty of time for your flight. This service is part of RolDrive's commitment to offering comprehensive chauffeur services, catering to the needs of both business and leisure travellers. With our fleet of premium vehicles to choose from, you can enjoy a stress-free journey to the airport, knowing that every aspect of your transfer is handled with the utmost professionalism and attention to detail.\n2. We also provide transfer from Airport to Hotel.",
      },
      {
        title: 'How to know if RolDrive provides airport transfers near me?',
        desc: "1. To determine if RolDrive provides airport transfers in your area, you should download our app or visit our website. Through these platforms, you can easily access detailed information about the geographic coverage of RolDrive's services. By entering your specific location or airport destination in the app or on the website, you can quickly ascertain whether RolDrive's luxury airport transfer services are available to you. These tools are designed to be user-friendly, offering clear and concise information about service areas, availability, and how to book a transfer. This way, you can effortlessly check if RolDrive caters to your airport transfer needs, ensuring a seamless and luxurious travel experience tailored to your location.",
      },
      {
        title: 'How to know if RolDrive provides affordable Airport Transfers?',
        desc: "1. To find out if RolDrive's airport transfers are affordable for you, simply enter your details into our online booking engine. This can be accessed either through the RolDrive website or our dedicated mobile app. Once you input your pickup and drop-off locations, date, and time, the booking system will provide you with a comprehensive quote. This quote includes all charges, ensuring there are no hidden fees, and allows you to see the full cost of your transfer upfront. By reviewing this all-inclusive price, you can make an informed decision on whether RolDrive's service fits your budget. This transparent pricing model is part of RolDrive's commitment to customer satisfaction, making it easy for you to assess the affordability of our luxury airport transfer services.",
      },
    ],
  };

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <ServicesBanner {...bannerData} hideScrollDown={hideScrollDown} />

      <LuxuriousServiceSearch luxuriousServiceData={luxuriousServiceData} />

      <TopPicks topPicksData={topPicksData} scrollRef={scrollRef} />

      <TrustedPartners />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />

      <Services />
      <ServicesFaq faqData={faqData} />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <ServiceOfferings servicesData={servicesData} />
      <DownloadOurApp />
      <BookModal />
    </>
  );
}
