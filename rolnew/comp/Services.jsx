import React from 'react';
import Container from 'rolnew/comp/Container';
import Card from 'rolnew/comp/Card';
import Title from './Title';

function Services() {
  return (
    <>
      {/* <Container className="bg-[#081017]">
        <div className="w-full h-[1px] mx-auto">
          <Pic src="/rolnew/global/hr.svg" alt="hr" objectFit="cover" />
        </div>
      </Container> */}
      <Container className='bg-[#081017] sm:py-[80px] py-8 text-center'>
        <Title
          subTile='Our services'
          mainTitle='Hire A Chauffeur Service For Your Every Need'
          description="Indulge in an unparalleled chauffeured luxury car rental service with our customised hire a chauffeur service designed to meet your unique requirements. Whether you're in pursuit of seamless airport transfers, corporate travel, or special events; our hourly chauffeur services are crafted to upgrade your journey. Embark on a journey with a full day chauffeur hire service where every detail is tailored to perfection. Browse our services now and experience the RolDrive difference with our executive chauffeur services."
          descClass='sm:py-[44px] py-8'
        />

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 sm:justify-center sm:items-center gap-x-6 gap-y-6 sm:mt-0 mb-4'>
          <div className='col-span-1'>
            <Card
              title='London Airport Transfers'
              description="RolDrive's Airport Transfers London services cover all major airports in the city ensuring seamless, luxurious travel to and from the city's airports."
              img='/rolnew/global/card/card-image1.jpg'
            />
          </div>

          <div className='col-span-1'>
            <Card
              title='Dubai Airport Transfers'
              description="As Dubai Airport Transfers service providers, RolDrive ensures that your airport pickup or drop-off is as smooth as possible so you know you're in capable hands."
              img='/rolnew/global/card/card-image2.jpg'
              titleNoWrap
            />
          </div>

          <div className='col-span-1'>
            <Card
              title='Paris Airport Transfers'
              description='Whether on a business trip or for pleasure in the city of Paris, RolDrive’s Paris Airport Transfers will transfer you to or from the airport in a complete fashion.'
              img='/rolnew/global/card/card-image3.jpg'
              titleNoWrap
            />
          </div>
          <div className='col-span-'>
            <Card
              title='New York Airport Transfers'
              description='In the busy city of New York, RolDrive’s New York Airport Transfers are swift, comfortable and elegant, thus creating room for your next meet.'
              img='/rolnew/global/card/card-image4.jpg'
              titleNoWrap
            />
          </div>
          <div className='col-span-1'>
            <Card
              title='Tokyo Airport Transfer'
              description='As you arrive or depart from Tokyo, RolDrive’s Tokyo Airport Transfer service offers the perfect blend of business and pleasure while travelling.'
              img='/rolnew/global/card/card-image5.jpg'
              titleNoWrap
            />
          </div>
        </div>

        {/* <div className="grid lg:grid-cols-2 px-56 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 sm:justify-center sm:items-center gap-x-6 gap-y-6 sm:mt-0"> */}

        {/* </div> */}
      </Container>
    </>
  );
}

export default Services;
