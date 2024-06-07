/* eslint-disable max-len */

'use client';

// import Link from 'next/link';
import { useRef } from 'react';
import Accordion from './Accordion';
import H2 from './typography/H2';
// import P from './typography/P';

export default function FaqsFullPage() {
  const business = [
    {
      id: 1,
      question: 'How to book a RolDrive chauffeur?',
      answer: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
    },
    {
      id: 2,
      question: 'When will I receive my chauffeur and vehicle details?',
      answer: 'We assign a chauffeur/vehicle 24 hours before the booking date and time, and an email with the chauffeur and vehicle details is sent to you.',
    },
  ];

  const cancellation = [
    {
      id: 1,
      question: 'How do I cancel a booking?',
      answer: 'For any cancellations, please access your RolDrive online account via the website or app to cancel your ride.',
    },
  ];
  const vehicles = [
    {
      id: 1,
      question: 'The passenger is VVIP. What vehicle does RolDrive recommend?',
      answer: 'For the complete RolDrive experience for your VVIP passenger. We recommend the Rolls Royce Phantom VIII or Mercedes Maybach or Bentley Mulsanne. These cars come with high-end amenities that will make your VVIP passenger feel like royalty.',
    },
    {
      id: 2,
      question: 'Do you allow pets inside the vehicle?',
      answer: 'Yes, we provide pet-friendly chauffeurs on demand. Please inform us when booking.',
    },
    {
      id: 3,
      question: 'How old will my RolDrive vehicle be?',
      answer: 'All RolDrive vehicles are less than three years old, and we generally send the most recent model in the industry at the time.',
    },
    {
      id: 4,
      question: 'What is the luggage capacity of the vehicle I am booking?',
      answer: 'To know more about our vehicle luggage capacity, please visit our fleet section on the Home page where all the details are present for every vehicle we offer.',
    },
  ];
  const payments = [
    {
      id: 1,
      question: 'What are the payment methods for booking a RolDrive vehicle?',
      answer: 'We accept all types of credit and debit cards for payments. Contact our finance department for direct bank transfer at booking@roldrive.com',
    },
  ];
  const chauffeurs = [
    {
      id: 1,
      question: 'Will my RolDrive chauffeur help me with my luggage?',
      answer: 'Yes, your RolDrive chauffeur will offer assistance with your luggage.',
    },
    {
      id: 2,
      question: 'Does a RolDrive chauffeur wear a suit and tie?',
      answer: 'Yes, always. RolDrive chauffeurs must adhere to a strict dress code of wearing a suit and tie.',
    },
    {
      id: 1,
      question: 'Will I be notified when my RolDrive chauffeur arrives?',
      answer: 'Yes, as soon as your RolDrive chauffeur arrives, an email will be sent to your registered email address. Your chauffeur will also send you a text message with his/her exact location, which is usually just outside the pick-up address.',
    },
  ];
  const airportfaq = [
    {
      id: 1,
      question: "I'm flying from the United Kingdom. How many hours should I arrive at the airport before my flight?",
      answer: 'Most airlines recommend arriving three hours before an international flight and two hours before a domestic flight. If you checked in online, the latest arrival times for international flights are 2 hours and 1.5 hours prior for domestic flights.',
    },
    {
      id: 2,
      question: 'Where will I meet my chauffeur?',
      answer: "The chauffeur will be waiting at arrivals with your name card as soon as the flight lands. Your chauffeur will also send you an SMS message with the exact meeting location information. You will also receive these details via email, along with your chauffeur's exact GPS location within the terminal.",
    },
    {
      id: 3,
      question: 'My flight is delayed, will my chauffeur wait for me?',
      answer: 'We monitor your flight, no matter early or delayed, we will send your chauffeur to the arrival hall with your name on a paging board as soon as the flight lands.',
    },
    {
      id: 4,
      question: 'Will I be charged for tolls and parking?',
      answer: 'No, all charges are included in the booking price. We have a no-hidden-costs policy.',
    },
    {
      id: 5,
      question: 'What happens if my flight details change?',
      answer: 'Please call or email us and we will update your reservation with the new flight information.',
    },
    {
      id: 6,
      question: 'My flight will be arriving early. Will my RolDrive chauffeur be there for me?',
      answer: 'Yes, your RolDrive chauffeur will monitor your flight and make certain that your chauffeur is in the arrivals hall before you leave customs.',
    },
  ];

  const bookingRef = useRef();
  const cancelRef = useRef();
  const vehicleRef = useRef();
  const paymentRef = useRef();
  const chauffeurRef = useRef();
  const airportRef = useRef();

  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="md:flex block gap-6 mb-6">
          <div className="w-full md:w-2/5 lg:w-1/4 md:my-4 my-0">
            <ol className="text-2xl bg-[#CBD2DA80] sm:sticky top-24 rounded-md mb-auto leading-10 font-bold text-black list-decimal pl-12 p-6">
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  bookingRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Booking
                </span>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  cancelRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Cancellation
                </span>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  vehicleRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Vehicles
                </span>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  paymentRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Payment
                </span>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  chauffeurRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Chauffeur
                </span>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <span onClick={() => {
                  airportRef?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                  });
                }}
                >
                  Airport Related
                </span>
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-3/4 md:w-3/5 p-4 pb-0">
            <div ref={bookingRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Bookings</H2>
              {business.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
            <div className="my-6" ref={cancelRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Cancellation</H2>
              {cancellation.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
            <div className="my-6" ref={vehicleRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Vehicles</H2>
              {vehicles.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
            <div className="my-6" ref={paymentRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Payments</H2>
              {payments.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
            <div className="my-6" ref={chauffeurRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Chauffeurs</H2>
              {chauffeurs.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
            <div className="mt-6" ref={airportRef}>
              <H2 className="!text-2xl font-semibold text-black mb-6">Airport Related</H2>
              {airportfaq.map((faqs) => (
                <Accordion
                  key={faqs.question}
                  question={faqs.question}
                  answer={faqs.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
