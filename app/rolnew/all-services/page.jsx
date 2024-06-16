import CategoriesComponent from "components/AllCategories";
import FindMoreComponent from "components/FindMore";
import Container from "rolnew/comp/Container";
import ClientTestimonial from "rolnew/section/home/ClientTestimonial";
import OurFeet from "rolnew/section/home/OurFeet";
import TrustedPartner from "rolnew/section/home/TrustedPartner";

export default function Home() {
  return (
    <>
      <Container className='bg-[#223544] sm:py-8 py-6 text-center mt-16'>
        <h1 className='text-4xl leading-10 sm:block hidden'>
          Enjoy Our Service,
          <br />
          From Anywhere to Everywhere
        </h1>
        <h1 className='text-3xl leading-10 sm:hidden block'>
          Enjoy Our Services, From Everywhere
        </h1>
        <p className='py-6'>
          Your exclusive and dependable chauffeur service indulgence
        </p>
        <button
          type='button'
          className='sm:w-auto w-full bg-primary rounded-md px-12 py-1.5 sm:-mb-10 font-bold text-lg'
        >
          Book Now
        </button>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:-mt-5 mt-5'>
          <div className='grid gap-y-2'>
            <img
              className='h-full w-full'
              src='/rolnew/services/allservices/1.svg'
              alt=''
            />
            <img
              className='h-full w-full'
              src='/rolnew/services/allservices/7.svg'
              alt=''
            />
          </div>
          <div className='grid'>
            <div className='relative'>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/2.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/8.svg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-y-2'>
            <div className='sm:mt-[50px]'>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/3.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/9.svg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-y-2'>
            <div className='sm:mt-[50px]'>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/3.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/10.png'
                alt=''
              />
            </div>
          </div>
          <div className='grid'>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/2.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/11.svg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-y-2'>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/1.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full w-full'
                src='/rolnew/services/allservices/7.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </Container>
      <OurFeet />
      <TrustedPartner />
      <ClientTestimonial />
      <CategoriesComponent />
      <FindMoreComponent />
    </>
  );
}
