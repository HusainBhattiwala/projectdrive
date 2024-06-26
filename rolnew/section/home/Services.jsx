import React from 'react';
import Container from 'rolnew/comp/Container';
import Card from 'rolnew/comp/Card';
import Title from './Title';

function Services({ servicesData }) {
  return (
    <>
      {/* <Container className="bg-[#081017]">
        <div className="w-full h-[1px] mx-auto">
          <Pic src="/rolnew/global/hr.svg" alt="hr" objectFit="cover" />
        </div>
      </Container> */}
      <Container className='bg-[#081017] sm:py-[80px] py-8 text-center'>
        {servicesData ? (
          <>
            <Title
              subTitle={servicesData.subTitle}
              mainTitle={servicesData.mainTitle}
              description={servicesData.desc}
              descClass='sm:py-[44px] py-8'
            />

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 sm:justify-center sm:items-center gap-x-6 gap-y-6 sm:mt-0'>
              {servicesData.cardData.map((data, index) => (
                <div className='col-span-1 h-full' key={index}>
                  <Card
                    title={data.title}
                    description={data.cardDesc}
                    img={data.img}
                    action={servicesData.action}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <Title
              subTitle='Our services'
              mainTitle='Hire A Chauffeur Service For Your Every Need'
              description="Indulge in an unparalleled chauffeured luxury car rental service with our customised hire a chauffeur service designed to meet your unique requirements. Whether you're in pursuit of seamless airport transfers, corporate travel, or special events; our hourly chauffeur services are crafted to upgrade your journey. Embark on a journey with a full day chauffeur hire service where every detail is tailored to perfection. Browse our services now and experience the RolDrive difference with our executive chauffeur services."
              descClass='sm:py-[44px] py-8'
            />

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 sm:justify-center sm:items-center gap-x-6 gap-y-6 sm:mt-0'>
              <div className='col-span-1 h-full'>
                <Card
                  title='Airport Transfer'
                  description='Our airport transfers are smooth and effortless. Whether you need to be picked up from your hotel and dropped off at the airport or vice versa, our friendly yet professional chauffeur service will ensure your journey is comfortable and stress-free.'
                  img='/rolnew/global/card/home/Airport Transfer Home.jpg'
                />
              </div>

              <div className='col-span-1 h-full'>
                <Card
                  title='Corporate Chauffeurs'
                  description='With RolDrive, you’ll make a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. We provide customised corporate packages whether you are booking for yourself or a colleague.'
                  img='/rolnew/global/card/card-image2.jpg'
                  titleNoWrap
                />
              </div>

              <div className='col-span-1 h-full'>
                <Card
                  title='Wedding Transfers'
                  description='We understand the importance of making your special day flawless, which is why we offer a range of chauffeur driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach and Bentley. Our chauffeur service adds an extra touch of elegance to your celebration.'
                  img='/rolnew/global/card/home/Wedding Transfer Home.jpg'
                  titleNoWrap
                />
              </div>

              <div className='col-span-1 h-full'>
                <Card
                  title='Private Jet Transfers'
                  description='Our experienced private chauffeur service will safely transport you from the tarmac of your private helicopter or airliner to your hotel or business meeting. Our fleet is equipped with complimentary packages to ensure a comfortable and enjoyable experience.'
                  img='/rolnew/global/card/home/Private Jet Transfer Home.jpg'
                  titleNoWrap
                />
              </div>

              <div className='col-span-1 h-full'>
                <Card
                  title='Event Transfers'
                  description="We provide transportation services for all types of social, cultural, and sports events in and around the city. Whether you're attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience."
                  img='/rolnew/global/card/home/Event Transfer Home.jpg'
                  titleNoWrap
                />
              </div>

              <div className='col-span-1 h-full'>
                <Card
                  title='Sightseeing Tours'
                  description='With our hourly chauffeur service you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress-free transportation solutions provided by us as our skilled chauffeurs act as your guide on your trips.'
                  img='/rolnew/global/card/home/Sightseeing Tours Home.jpg'
                  titleNoWrap
                />
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Services;
