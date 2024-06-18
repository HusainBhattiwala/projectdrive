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
      <Container className="bg-[#081017] sm:py-[80px] py-8 text-center">
        <Title subTile="Our services" 
        mainTitle="Hire A Chauffeur Service For Your Every Need" 
        description="Indulge in an unparalleled chauffeured luxury car rental service with our customised hire a chauffeur service designed to meet your unique requirements. Whether you're in pursuit of seamless airport transfers, corporate travel, or special events; our hourly chauffeur services are crafted to upgrade your journey. Embark on a journey with a full day chauffeur hire service where every detail is tailored to perfection. Browse our services now and experience the RolDrive difference with our executive chauffeur services." descClass="sm:py-[44px] py-8" />
        
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 sm:justify-center sm:items-center gap-x-6 gap-y-6 sm:mt-0">
          <div className="col-span-1 h-full">
            <Card title="Airport Transfer" description="Our airport transfers are smooth and effortless. Whether you need to be picked up from your hotel and dropped off at the airport or vice versa, our friendly yet professional chauffeur service will ensure your journey is comfortable and stress-free." img="/rolnew/global/card/card-image1.jpg" />
          </div>

          <div className="col-span-1 h-full">
            <Card title="Corporate Chauffeurs" description="With RolDrive, you’ll make a lasting impression from the moment you set out of our chauffeur driven vehicles. Let us help you make a statement and command te boardroom. Our corporate chauffeurs are dependable, efficient and dedicated to exceeding your expectations." img="/rolnew/global/card/card-image2.jpg" titleNoWrap />
          </div>

          <div className="col-span-1 h-full">
            <Card title="Wedding Transfers" description="We understand the importance of making your special day flawless, which is why we offer a range of chauffeur driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach and Bentley. Our chauffeur service adds an extra touch of elegance to your celebration." img="/rolnew/global/card/card-image3.jpg" titleNoWrap />
          </div>

          <div className="col-span-1 h-full">
            <Card title="Private Jet Transfers" description="Our experienced private chauffeur service will safely transport you from the tarmac of your private helicopter or airliner to your hotel or business meeting. Our fleet is equipped with complimentary packages to ensure a comfortable and enjoyable experience." img="/rolnew/global/card/card-image4.jpg" titleNoWrap />
          </div>

          <div className="col-span-1 h-full">
            <Card title="Event Transfers" description="We provide transportation services for all types of social, cultural, and sports events in and around the city. Whether you're attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and special experience. " img="/rolnew/global/card/card-image5.jpg" titleNoWrap />
          </div>

          <div className="col-span-1 h-full">
            <Card title="Sightseeing Tours" description="With our hourly chauffeur service you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress-free transportation solutions of RolDrive as our skilled chauffeurs act as your guide on your trips. " img="/rolnew/global/card/card-image6.jpg" titleNoWrap />
          </div>

        </div>
      </Container>
    </>
  );
}

export default Services;
