import React from 'react';
import Container from './Container';
import Title from './Title';

function ServiceCard({ title, description }) {
  return (
    <div className='bg-[#E5EAFA] bg-opacity-10 text-white p-6 rounded-lg shadow-lg text-left'>
      <div className='flex items-center space-x-4'>
        <div>
          <img src='/images/airports/service.png' alt='' />
          <h4 className='font-bold text-[20px] mt-2 '>{title}</h4>
          <p className='mt-2 text-[#B2B2B2]'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceComp() {
  return (
    <Container className='bg-[#223544] text-white py-12 px-4 text-center'>
      <Title
        subTitle='Our Service'
        mainTitle='Why Choose Business Transfers with RolDrive'
        description="Embark on a journey of sophistication and convenience with RolDrive`'s premier personal chauffeur services. Whether you require a chauffeur for a single ride or long-term arrangements, we cater to your needs with professionalism and elegance."
        descClass='sm:py-4 py-2'
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <ServiceCard
          title='60 Mins Free Waiting'
          description='Benefit from complimentary waiting time of 60 minutes at airports and 15 minutes at other locations, ensuring seamless transitions for your business engagements.'
          icon='/path-to-your-icons/waiting-icon.svg'
        />
        <ServiceCard
          title='Zero Delays'
          description='With RolDrive, punctuality is paramount. Our meticulously planned routes and schedules guarantee on-time arrivals, eliminating any disruptions to your business itinerary.'
          icon='/path-to-your-icons/delay-icon.svg'
        />
        <ServiceCard
          title='24/7 Customer Service'
          description='Our dedicated customer support team operates round the clock to address queries instantly and facilitate efficient bookings for your corporate travels.'
          icon='/path-to-your-icons/customer-service-icon.svg'
        />
        <ServiceCard
          title='Privacy Policy'
          description='Your confidentiality is our priority. Our chauffeurs are bound by strict privacy policies, ensuring the utmost discretion and protection of your business affairs.'
          icon='/path-to-your-icons/privacy-icon.svg'
        />
        <ServiceCard
          title='Fixed Price'
          description="Experience transparent pricing with RolDrive's fixed rates, free from hidden charges or surprises, providing clarity and cost-efficiency for your corporate transportation needs."
          icon='/path-to-your-icons/fixed-price-icon.svg'
        />
        <ServiceCard
          title='Flight Monitoring'
          description='Enjoy peace of mind with our advanced flight monitoring technology, allowing seamless coordination for airport transfers and ensuring hassle-free journeys for your business trips.'
          icon='/path-to-your-icons/flight-monitoring-icon.svg'
        />
      </div>
      <div className='mt-12 text-center'>
        <button
          type='button'
          className='bg-orange-500 hover:bg-orange-700 text-white font-bold w-[280px] h-[50px] text-lg py-2 px-4 rounded'
        >
          Book Now
        </button>
      </div>
    </Container>
  );
}
