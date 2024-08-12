import BookingFlow from 'rolnew/section/home/BookingFlow';
import ClientTestimonial from 'rolnew/section/home/ClientTestimonial';
import Contact from 'rolnew/comp/Contact';
import Counts from 'rolnew/section/home/Counts';
import Destinations from 'rolnew/section/home/Destinations';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import FAQ from 'rolnew/comp/FAQ';
import Locations from 'rolnew/section/home/Locations';
import OurFeet from 'rolnew/section/home/OurFeet';
import OurPresence from 'rolnew/section/home/OurPresence';
import Services from 'rolnew/section/home/Services';
import TrustedPartner from 'rolnew/section/home/TrustedPartner';
import { homePageFaq } from 'static/faq';
import BookModal from 'rolnew/comp/BookModal';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';
import BookingBanner from './BookingBanner';

const metadata = metadataConfig.home;

const ourServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Hire A Chauffeur Service For Your Every Need',
  desc: (
    <p>
      Indulge in an unparalleled chauffeured luxury car rental service with our customised hire a chauffeur service designed to meet your unique requirements. Whether youre in pursuit of seamless airport transfers, corporate travel, or special events; our
      <a href="/hourly-chauffeur-service" className="text-blue-400"> hourly chauffeur services </a>
      are crafted to upgrade your journey. Embark on a journey with a
      <a href="/full-day-chauffeur-hire" className="text-blue-400"> full day chauffeur hire </a>
      service where every detail is tailored to perfection. Browse our services now or read our
      <a href="https://blog.roldrive.com/" className="text-blue-400"> travel blogs </a>
      and experience the RolDrive difference with our
      <a href="/executive-chauffeur-service-london" className="text-blue-400"> executive chauffeur service in London.</a>
    </p>
  ),
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfer',
      cardDesc:
        'Our airport transfers are smooth and effortless. Whether you need to be picked up from your hotel and dropped off at the airport or vice versa, our friendly yet professional chauffeur service will ensure your journey is comfortable and stress-free.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        'With RolDrive, you’ll make a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. We provide customised corporate packages whether you are booking for yourself or a colleague.',
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers ',
      cardDesc:
        'We understand the importance of making your special day flawless, which is why we offer a range of chauffeur driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach and Bentley. Our chauffeur service adds an extra touch of elegance to your celebration.',
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private chauffeur service will safely transport you from the tarmac of your private helicopter or airliner to your hotel or business meeting. Our fleet is equipped with complimentary packages to ensure a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        'We provide transportation services for all types of social, cultural, and sports events in and around the city. Whether youre attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience.',
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        'With our hourly chauffeur service you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress-free transportation solutions provided by us as our skilled chauffeurs act as your guide on your trips.',
    },
  ],
};

export default function page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <BookingBanner />
      <DownloadOurApp />
      <Counts />
      <BookingFlow />
      <Services servicesData={ourServicesData} />
      <OurPresence />
      <Locations />
      <OurFeet />
      <TrustedPartner />
      <ClientTestimonial />
      <Destinations />
      <FAQ faq={homePageFaq} />
      <Contact />
      <BookModal />
    </>
  );
}
