/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { metadata } from 'components/utils/metadata';
import BusinessSolutionBanner from 'components/home/BusinessSolutionBanner';
import BusinessFeatures from 'components/shared/BusinessFeatures';
import BookingProcess from 'components/shared/BookingProcess';
import Testimonials from 'components/shared/Testimonials';
import Button from 'components/ui/Button';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';

export function generateMetadata() {
  return metadata({
    title: 'Corporate Transport Service',
    description:
            'Book our trusted Corporate Chauffeur Service London or Corporate Chauffeur Hire service so you can travel at your own pace and convenience.',
    keywords: [
      'corporate chauffeur service London',
      'corporate chauffeur hire',
    ],
    robots: [
      'index',
      'follow',
    ],
    revisit: '3 days',
    url: 'https://www.roldrive.com/corporate-chauffeur-service-london',
    ogTitle: 'Hire a Corporate Chauffeur Service London through RolDrive',
    ogDescription:
          'Book our trusted Corporate Chauffeur Service London or Corporate Chauffeur Hire service so you can travel at your own convenience.',
    ogImage: '',
    ogLocale: 'en_GB',
    ogType: 'website',
    ogUrl: 'https://www.roldrive.com/corporate-chauffeur-service-london',
    pDomainVerify: '5a85a1e146fef31be71b80439f963cde',
    ogSite_name: 'RolDrive',
    twTitle: 'Hire Our Mercedes S Class Chauffeur London and Experience the Best',
    twCard: 'summary_large_image',
    twSite: 'https://www.roldrive.com/corporate-chauffeur-service-london',
    twImage: '',
    twCreator: '@Rol_Drive',
    twDescription:
          'Book our trusted Corporate Chauffeur Service London or Corporate Chauffeur Hire service so you can travel at your own pace.',
    siteId: 'https://www.roldrive.com/corporate-chauffeur-service-london',
  });
}
export default function Home() {
  return (
    <main>
      <BusinessSolutionBanner
        img="/images/banner/banner-corporate-transfer-service.png"
        line1="Reliable Corporate"
        line2="Transportation"
        line3=" "
      />
      <BusinessFeatures />
      <BookingProcess />
      <section className="text-gray-700">
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-col justify-center items-center mb-8">
            <P className="text-neutral-500 text-base font-normal">Feedback and ratings from our cherished clientele</P>
            <H2 className="text-neutral-900 text-3xl font-semibold my-2">Ratings by our beloved customers</H2>
          </div>
          <Testimonials />
        </div>
      </section>
      <section>
        <div className="container mx-auto md:pb-8 md:pt-2 px-4 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex flex-col justify-center items-center mb-8">
            <P className="text-neutral-500 text-base font-normal ">Get in touch with us</P>
            <H2 className="text-neutral-900 text-3xl font-semibold my-2"> Contact us for further communication</H2>
          </div>
          <form action="">
            <div className="boxers py-4 gap-5 justify-between flex lg:flex-row flex-col">
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200  appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Full Name</label>
                </div>
              </div>
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Email Address</label>
                </div>
              </div>
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="boxers py-4 gap-5 justify-between flex lg:flex-row flex-col">
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Company Name</label>
                </div>
              </div>
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Company Address</label>
                </div>
              </div>
            </div>
            <div className="boxers py-4 gap-5 justify-between flex lg:flex-row flex-col">
              <div className="box w-full">
                <div className="relative">
                  <input type="text" id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer" placeholder=" " />
                  <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase">Send US Query</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 items-center justify-center text-center">
              <Button type="button" className="text-white bg-primary uppercase hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center me-2 mb-2">
                Send Us Your Query
              </Button>
              <div className="flex flex-row gap-3 mt-2 text-black text-sm font-normal">
                Prefer to call?
                <img src="/images/global/mobile_primary.svg" alt="" />
                +44(0) 204 592 0966
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="h-24" />
    </main>
  );
}
