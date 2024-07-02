// import CategoriesComponent from 'components/AllCategories';
import FindMoreComponent from 'components/FindMore';
import Container from 'rolnew/comp/Container';
import TopDestination from 'rolnew/comp/TopDestination';
import ClientTestimonial from 'rolnew/section/home/ClientTestimonial';
import OurFeet from 'rolnew/section/home/OurFeet';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import Contact from 'rolnew/comp/Contact';
import {
  destinationsData,
  findMoreData,
  trustedPartnersData,
} from './allServicesData';

export default function Home() {
  return (
    <>
      <Container className="bg-[#223544] sm:py-8 py-6 text-center mt-16">
        <h1 className="text-4xl leading-10 sm:block hidden">
          Enjoy Our Luxury Chauffeur Services
          <br />
          From Anywhere to Everywhere
        </h1>
        <h1 className="text-3xl leading-10 sm:hidden block">
          Enjoy Our Services, From Everywhere
        </h1>
        <p className="py-6">
          Your exclusive and dependable chauffeur service indulgence
        </p>
        <button
          type="button"
          className="sm:w-auto w-full bg-primary rounded-md px-12 py-1.5 sm:-mb-10 font-bold text-lg"
        >
          Book Now
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:-mt-5 mt-5">
          <div className="grid gap-y-2">
            <img
              className="h-full w-full"
              src="/rolnew/services/allservices/1.jpg"
              alt=""
            />
            <img
              className="h-full w-full"
              src="/rolnew/services/allservices/7.jpg"
              alt=""
            />
          </div>
          <div className="grid gap-y-2">
            <div className="relative">
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-y-2">
            <div className="sm:mt-[50px]">
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/9.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-y-2">
            <div className="sm:mt-[50px]">
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/10.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-y-2">
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/11.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-y-2">
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full w-full"
                src="/rolnew/services/allservices/12.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <OurFeet />
      <TrustedPartners trustedPartnersData={trustedPartnersData} />
      <ClientTestimonial />
      {/* <CategoriesComponent /> */}
      <TopDestination data={destinationsData?.london} bg="bg-[#11202D]" />
      <TopDestination data={destinationsData?.paris} bg="bg-[#223544]" />
      <Contact />
      <TopDestination data={destinationsData?.newyork} bg="bg-[#223544]" />
      <TopDestination data={destinationsData?.dubai} bg="bg-[#11202D]" />
      <TopDestination data={destinationsData?.tokyo} bg="bg-[#223544]" />
      <FindMoreComponent findMoreData={findMoreData} />
    </>
  );
}
