import React from 'react';
import Container from 'rolnew/comp/Container';
import Title from './Title';
import Category from './Category';
import Collaspe from './Collaspe';

const faqCategoryList = [
  {
    id: 1,
    category: 'Business',
    faqIds: ['faq1', 'faq2', 'faq3', 'faq4'],
  },
  {
    id: 2,
    category: 'Cancellation',
    faqIds: ['faq5', 'faq6'],
  },
  {
    id: 3,
    category: 'Vehicles',
    faqIds: ['faq7', 'faq8', 'faq9', 'faq10', 'faq11', 'faq12'],
  },
  {
    id: 4,
    category: 'Payment',
    faqIds: ['faq13'],
  },
  {
    id: 5,
    category: 'Chauffeur',
    faqIds: ['faq14', 'faq15', 'faq16', 'faq17'],
  },
  {
    id: 6,
    category: 'Airport Related',
    faqIds: ['faq18', 'faq19', 'faq20', 'faq21', 'faq22', 'faq23'],
  },
];

const collapseFaq = [
  {
    id: 'faq1',
    title: 'How can I book a chauffeur service with RolDrive?',
    desc: 'Booking with RolDrive, renowned for offering the best chauffeur service, is a streamlined process designed for client convenience and satisfaction. Book RolDrive’s chauffeur service through our official website or mobile app, where you can select your desired service, date, time, and vehicle preference.',
  },
  {
    id: 'faq2',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: 'We assign a chauffeur/vehicle 24 hours before the booking date and time, and an email with the chauffeur and vehicle details will be sent to you.',
  },
  {
    id: 'faq3',
    title: 'Is advance booking required for RolDrive’s luxury chauffeur service?',
    desc: "Advance booking for RolDrive's luxury chauffeur service is highly recommended to ensure that you secure a vehicle that suits your specific needs and preferences. Early reservation allows for a more personalized service, giving RolDrive ample time to understand and prepare for any special requests you may have, whether it's a preference for a particular type of vehicle, the need for child seats, or accommodating extra luggage. It also ensures availability, particularly during peak periods or special events when demand for luxury chauffeur services spikes. ",
  },
  {
    id: 'faq4',
    title: 'What information do I need to provide when booking a ride with RolDrive?',
    desc: 'When booking a chauffeur service with RolDrive, it’s important to provide comprehensive information to ensure the service is tailored to your specific needs. This includes your pickup and drop-off locations to plan the route accurately, the desired date and time of the service to schedule your journey, and the number of passengers to select an appropriately sized vehicle. Additionally, specifying any special requirements, such as child seats for young travellers or extra luggage space for those carrying more items, helps RolDrive customize the experience. Providing detailed information during booking enables RolDrive to offer a personalized, efficient, and comfortable chauffeur service, aligning with our commitment to excellence in customer satisfaction.',
  },
  {
    id: 'faq5',
    title: 'How do I cancel a RolDrive chauffeur service booking?',
    desc: 'For any cancellations, please access your RolDrive online account via the website or app to cancel your ride.',
  },
  {
    id: 'faq6',
    title: 'How many hours in advance do I need to cancel RolDrive’s chauffeur service in order to receive a full refund?',
    desc: 'To receive a full refund, please cancel your RolDrive chauffeur service booking at least 12 hours before booking time.',
  },
  {
    id: 'faq7',
    title: 'Are all vehicles from RolDrive’s luxury chauffeur service fleet available in all locations of service?',
    desc: 'No. Not all vehicles in RolDrive`s luxury chauffeur service fleet are available at every location.To ascertain the availability of specific vehicles in your desired area, initiate a booking through RolDrive`s platform. During this process, enter your location details, and the system will display the vehicles available in that region. This approach ensures you can select from the options that are actually accessible for your journey, allowing for a tailored and satisfactory service experience. This method facilitates a streamlined and efficient booking process, aligning with RolDrive’s commitment to providing bespoke and luxury transportation solutions.',
  },
  {
    id: 'faq8',
    title: 'Does RolDrive’s luxury chauffeur service offer premium and rare vehicles?',
    desc: 'Yes, RolDrive`s luxury chauffeur service stands out for its inclusion of premium and rare vehicles, catering to clients who seek the utmost in luxury and exclusivity.With prestigious options like Rolls Royce, Maybach, and Bentley in our fleet, RolDrive ensures that clients can experience the pinnacle of automotive luxury and sophistication. These vehicles are synonymous with opulence, offering unparalleled comfort, state-of-the-art technology, and a ride experience that is both smooth and memorable. For those looking to make a grand entrance or simply indulge in the luxury of high-end transportation, RolDrive provides the perfect solution with its selection of elite vehicles.',
  },
  {
    id: 'faq9',
    title: 'The passenger is VVIP. What vehicle does RolDrive recommend?',
    desc: 'For the complete RolDrive experience for your VVIP passenger. We recommend the Rolls Royce Phantom VIII, Mercedes Maybach or Bentley Mulsanne. These cars come with high-end amenities that will make your VVIP passenger feel like royalty.',
  },
  {
    id: 'faq10',
    title: 'Do you allow pets inside the vehicle?',
    desc: 'Yes, we provide pet-friendly chauffeurs on demand. Please inform us when booking.',
  },
  {
    id: 'faq11',
    title: 'How old will my RolDrive chauffeured vehicle be?',
    desc: 'All of RolDrive’s chauffeured vehicles are less than three years old, and we generally send the most recent model in the industry at the time.',
  },
  {
    id: 'faq12',
    title: 'What is the luggage capacity of the vehicle I am booking?',
    desc: 'To know more about our vehicle luggage capacity, please visit our fleet section on the Home page where all the details are present for every vehicle we offer.',
  },
  {
    id: 'faq13',
    title: 'What are the payment options available for me to book a RolDrive chauffeur service?',
    desc: 'We accept all major credit and debit cards for payments. Contact our finance department for direct bank transfer at booking@roldrive.com',
  },
  {
    id: 'faq14',
    title: 'Are RolDrive’s chauffeurs trained at defensive driving?',
    desc: 'Yes, RolDrive`s chauffeurs are trained in defensive driving, ensuring they possess the skills necessary to navigate the roads safely and efficiently. This training equips them to anticipate and effectively manage any potential hazards on the road, from sudden weather changes to erratic behaviour from other drivers. Their proficiency in defensive driving not only enhances safety but also contributes to the overall smoothness and reliability of the journey, providing passengers with a sense of security and peace of mind. This meticulous attention to driver training reflects RolDrive`s commitment to delivering a premium service where safety is paramount.',
  },
  {
    id: 'faq15',
    title: 'Will my RolDrive chauffeur help me with my luggage?',
    desc: 'Yes, your RolDrive chauffeur will gladly offer assistance with your luggage.',
  },
  {
    id: 'faq16',
    title: 'Does a RolDrive chauffeur wear a suit and tie?',
    desc: 'Yes, always. RolDrive chauffeurs must adhere to a strict dress code of wearing a suit and tie.',
  },
  {
    id: 'faq17',
    title: 'Will I be notified when my RolDrive chauffeur arrives?',
    desc: 'Yes, as soon as your RolDrive chauffeur arrives, an email will be sent to your registered email address. Your chauffeur will also send you a text message with his/her exact location, which is usually just outside the pick-up address.',
  },
  {
    id: 'faq18',
    title: 'I`m flying from the United Kingdom. How many hours should I arrive at the airport before my flight?',
    desc: 'Most airlines recommend arriving three hours before an international flight and two hours before a domestic flight. If you checked in online, the latest arrival times for international flights are 2 hours and 1.5 hours prior for domestic flights.',
  },
  {
    id: 'faq19',
    title: 'Where will I meet my chauffeur?',
    desc: 'Your RolDrive chauffeur will be waiting at arrivals with your name on a paging board as soon as the flight lands. Your chauffeur will also send you an SMS message with the exact meeting location information. You will also receive these details via email, along with your chauffeur`s exact GPS location within the terminal.',
  },
  {
    id: 'faq20',
    title: 'My flight is delayed, will my chauffeur wait for me?',
    desc: 'We monitor your flight, no matter early or delayed, we will send your chauffeur to the arrival hall with your name on a paging board as soon as the flight lands.We also offer free 60 minutes waiting time in case the chauffeur arrives and there are flight delays.',
  },
  {
    id: 'faq21',
    title: 'Will I be charged for tolls and parking by RolDrive?',
    desc: 'No, all charges are included in the booking price. We have a no-hidden-costs policy at RolDrive.',
  },
  {
    id: 'faq22',
    title: 'What happens if my flight details change?',
    desc: 'Please call or email us and we will update your reservation with the new flight information.',
  },
  {
    id: 'faq23',
    title: 'My flight will be arriving early. Will my RolDrive chauffeur be there for me?',
    desc: 'Yes, your RolDrive chauffeur will monitor your flight and make certain that your chauffeur is in the arrivals hall before you leave customs.',
  },
];

function FAQ() {
  return (
    <Container className="bg-[#081017] sm:py-[60px] py-[32px] text-center">
      <Title subTile="Have queries?" mainTitle="Frequent Asked Questions" />
      <Category categorys={faqCategoryList} />
      <Collaspe list={collapseFaq} />
    </Container>
  );
}

export default FAQ;
